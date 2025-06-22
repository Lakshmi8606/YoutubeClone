const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const videoGrid = document.getElementById("video-grid");
const modal = document.getElementById("video-modal");
const modalIframe = document.getElementById("modal-iframe");
const closeModalBtn = document.getElementById("close-modal");

async function fetchVideos(query = "javascript") {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&maxResults=12&q=${query}`
  );
  const data = await response.json();

  videoGrid.innerHTML = "";

  data.items.forEach(item => {
    const video = item.snippet;
    const videoId = item.id.videoId;

    const card = document.createElement("div");
    card.className = "video-card";
    card.innerHTML = `
      <img src="${video.thumbnails.high.url}" alt="Thumbnail">
      <div class="video-info">
        <h3>${video.title}</h3>
        <p>${video.channelTitle}</p>
      </div>
    `;

    card.addEventListener("click", () => {
      modalIframe.src = `https://www.youtube.com/embed/${videoId}`;
      modal.classList.remove("hidden");
    });

    videoGrid.appendChild(card);
  });
}

window.onload = () => {
  fetchVideos("trending");
};

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query) {
    fetchVideos(query);
  }
});

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    searchBtn.click();
  }
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  modalIframe.src = "";
});
