const DIVIDER_PATTERN = /^[#=_-]{4,}$/;
const PROMOTED_HEADING_PATTERN =
  /^(Example|Output|Note|Syntax|Ans|Assignment|Step\s*\d+|Download from here|Installation Doc)/i;

function isDivider(line) {
  return DIVIDER_PATTERN.test(line.trim());
}

function isPromotedHeading(line) {
  const trimmed = line.trim();

  if (!trimmed) {
    return false;
  }

  if (PROMOTED_HEADING_PATTERN.test(trimmed)) {
    return false;
  }

  if (
    trimmed.length < 4 ||
    trimmed.length > 90 ||
    /^[0-9]+[.)]?$/.test(trimmed) ||
    /^[{}\]]+$/.test(trimmed) ||
    /->/.test(trimmed) ||
    /%/.test(trimmed) ||
    /^[a-e]\./i.test(trimmed) ||
    /^\d+\./.test(trimmed) ||
    /public class/i.test(trimmed) ||
    /package /i.test(trimmed)
  ) {
    return false;
  }

  return true;
}

function cleanTitle(title) {
  return title.replace(/\s+/g, " ").trim();
}

function splitLargeSection(section) {
  const blocks = section.content
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);

  const chunks = [];
  let current = [];
  let charCount = 0;
  const maxCharacters = 2400;

  const flush = () => {
    if (!current.length) {
      return;
    }

    chunks.push(current.join("\n\n"));
    current = [];
    charCount = 0;
  };

  for (const block of blocks) {
    const blockSize = block.length;

    if (blockSize > maxCharacters) {
      const lines = block.split("\n");
      let lineChunk = [];
      let lineCharCount = 0;

      for (const line of lines) {
        if (lineChunk.length && lineCharCount + line.length > maxCharacters) {
          if (current.length) {
            flush();
          }

          chunks.push(lineChunk.join("\n"));
          lineChunk = [];
          lineCharCount = 0;
        }

        lineChunk.push(line);
        lineCharCount += line.length;
      }

      if (lineChunk.length) {
        if (current.length) {
          flush();
        }

        chunks.push(lineChunk.join("\n"));
      }

      continue;
    }

    if (current.length && charCount + blockSize > maxCharacters) {
      flush();
    }

    current.push(block);
    charCount += blockSize;
  }

  flush();

  if (chunks.length <= 1) {
    return [section];
  }

  return chunks.map((content, index) => ({
    ...section,
    title: `${section.title} (${index + 1}/${chunks.length})`,
    content,
  }));
}

function buildContentsPages(sections, startPageNumber) {
  const entries = sections.map(
    (section, index) => `${index + startPageNumber}. ${section.title}`
  );
  const pages = [];
  const chunkSize = 22;

  for (let index = 0; index < entries.length; index += chunkSize) {
    pages.push({
      type: "contents",
      title: index === 0 ? "Notebook Contents" : "Notebook Contents Continued",
      content: entries.slice(index, index + chunkSize).join("\n"),
    });
  }

  return pages;
}

export function buildNotebookPages(rawText) {
  const lines = rawText.replace(/\r\n/g, "\n").split("\n");
  const sections = [];
  let currentTitle = "Java Notes";
  let currentLines = [];

  const pushSection = () => {
    const content = currentLines.join("\n").trim();

    if (!content) {
      currentLines = [];
      return;
    }

    sections.push({
      type: "section",
      title: cleanTitle(currentTitle),
      content,
    });
    currentLines = [];
  };

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const trimmed = line.trim();
    const previous = lines[index - 1]?.trim() ?? "";
    const next = lines[index + 1]?.trim() ?? "";
    const isWrappedHeading = trimmed && isDivider(previous) && isDivider(next);
    const isClassicHeading = trimmed && next && isDivider(next);

    if (trimmed && isDivider(trimmed)) {
      continue;
    }

    if ((isWrappedHeading || isClassicHeading) && isPromotedHeading(trimmed)) {
      pushSection();
      currentTitle = trimmed;

      if (isClassicHeading && !isWrappedHeading) {
        index += 1;
      }

      continue;
    }

    currentLines.push(line);
  }

  pushSection();

  const normalizedSections = sections.flatMap(splitLargeSection);
  const totalLines = rawText.split("\n").length;
  const contentsPageCount = Math.ceil(normalizedSections.length / 22);
  const coverPage = {
    type: "cover",
    title: "Core Java Notes",
    content: [
      "Pocket notebook edition",
      "",
      `Chapters: ${normalizedSections.length}`,
      `Lines of notes: ${totalLines}`,
      "",
      "Use Previous and Next to flip pages.",
      "Use the chapter jump to move faster.",
      "",
      "Your original note stays intact inside this notebook."
    ].join("\n"),
  };

  return [
    coverPage,
    ...buildContentsPages(normalizedSections, contentsPageCount + 2),
    ...normalizedSections,
  ];
}
