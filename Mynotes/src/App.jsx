import { useEffect, useState } from "react";
import { buildNotebookPages } from "./noteUtils";
import rawNoteText from "./data/java-notes.txt?raw";

function clampIndex(index, total) {
  if (!total) {
    return 0;
  }

  if (index < 0) {
    return 0;
  }

  if (index > total - 1) {
    return total - 1;
  }

  return index;
}

export default function App() {
  const [pages] = useState(() => buildNotebookPages(rawNoteText));
  const [currentPage, setCurrentPage] = useState(0);
  const [turnDirection, setTurnDirection] = useState("forward");
  function goToPage(nextIndex, direction) {
    setCurrentPage((page) => clampIndex(nextIndex ?? page, pages.length));
    setTurnDirection(direction);
  }

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "ArrowRight") {
        goToPage(currentPage + 1, "forward");
      }

      if (event.key === "ArrowLeft") {
        goToPage(currentPage - 1, "backward");
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentPage, goToPage, pages.length]);

  const page = pages[currentPage];
  const isReady = !!page;
  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === pages.length - 1;

  return (
    <div className="desk">
      <div className="desk-glow" aria-hidden="true" />

      <main className="workspace">
        <header className="workspace-header">
          <div>
            <p className="eyebrow">React Notebook</p>
            <h1>Java Notes Book</h1>
            <p className="lead">
              A compact notebook with page turning, chapter jumps, and a cleaner book-style layout.
            </p>
          </div>

          {isReady ? (
            <label className="chapter-picker">
              <span>Jump to page</span>
              <select
                value={currentPage}
                onChange={(event) => {
                  const nextIndex = Number(event.target.value);
                  goToPage(nextIndex, nextIndex > currentPage ? "forward" : "backward");
                }}
              >
                {pages.map((entry, index) => (
                  <option key={`${entry.title}-${index}`} value={index}>
                    {index + 1}. {entry.title}
                  </option>
                ))}
              </select>
            </label>
          ) : null}
        </header>

        <section className="book-frame" aria-label="Notebook">
          <aside className="book-spine" aria-hidden="true">
            <div className="spine-ring-list">
              {Array.from({ length: 12 }).map((_, index) => (
                <span key={index} className="spine-ring" />
              ))}
            </div>
            <div className="spine-title">Core Java Notes</div>
          </aside>

          <div className="book-board">
            <div className="bookmark" aria-hidden="true" />

            <article
              key={`${currentPage}-${turnDirection}`}
              className={`paper-sheet ${turnDirection === "forward" ? "turn-forward" : "turn-backward"}`}
            >
              <div className="paper-meta">
                <span className={`chapter-tag chapter-tag-${page?.type ?? "default"}`}>
                  {page.title}
                </span>
                <span className="page-counter">
                  {`Page ${currentPage + 1} / ${pages.length}`}
                </span>
              </div>

              <div className="paper-content">
                <pre>{page.content}</pre>
              </div>
            </article>
          </div>
        </section>

        <footer className="book-controls">
          <button
            className="page-button"
            type="button"
            disabled={isFirstPage}
            onClick={() => goToPage(currentPage - 1, "backward")}
          >
            Previous
          </button>

          <div className="page-status">
            <strong>{page.title}</strong>
            <span>Use arrow keys or buttons to flip pages.</span>
          </div>

          <button
            className="page-button page-button-primary"
            type="button"
            disabled={isLastPage}
            onClick={() => goToPage(currentPage + 1, "forward")}
          >
            Next
          </button>
        </footer>
      </main>
    </div>
  );
}
