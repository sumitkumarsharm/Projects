const accessKey = "Zw7bAJy7GxI3FL4heOSgLEW7Okmd9EU5GC4l3o7wAg8";
const gallery = document.getElementById("gallery");
const loader = document.getElementById("loader");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

// step 1
window.addEventListener("DOMContentLoaded", () => {
  loadImages();
});

// step 3
function searchImages() {
  const query = searchInput.value.trim();
  if (query) {
    const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=30&client_id=${accessKey}`;
    fetchImages(url, true);
  }
  searchInput.value = "";
}

searchInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    searchImages();
  }
});

// step 2
function loadImages() {
  const url = `https://api.unsplash.com/photos?per_page=30&client_id=${accessKey}`;
  fetchImages(url, false);
}

// step -4
async function fetchImages(url, isSearch = false) {
  gallery.innerHTML = "";
  loader.classList.remove("hidden");

  //   feteching images fom unshplace
  try {
    const res = await fetch(url);
    const data = await res.json();
    const images = isSearch ? data.results : data;

    loader.classList.add("hidden");

    if (!images.length) {
      gallery.innerHTML = "<p>No images found.</p>";
      return;
    }

    images.forEach((imgData, i) => {
      const img = document.createElement("img");
      img.src = imgData.urls.small;
      img.alt = imgData.alt_description || "Image";
      gallery.appendChild(img);
      setTimeout(() => {
        img.classList.add("visible");
      }, i * 30);
    });
  } catch (err) {
    loader.classList.add("hidden");
    gallery.innerHTML = "<p>Error loading images.</p>";
    console.error(err);
  }
}
