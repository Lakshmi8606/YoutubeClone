const videos=[
    {
        thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    title: "Never Gonna Give You Up",
    channel: "Rick Astley",
    views: "1.2B views",
    date: "14 years ago"
    },
    
]

const videoGrid=document.getElementById("video-grid")

videos.forEach(video=>{
    const card=document.createElement("div")
    card.className="video-card"
    card.innerHTML=`
    <img src="${video.thumbnail}" alt="Thumbnail">
<div class="video-info">
<h3>${video.title}</h3>
<p>${video.channel} • ${video.views} • ${video.date}</p>
</div>
    `
    videoGrid.appendChild(card)
})

//Integrating with youtube API

const API_KEY = "AIzaSyBeN4otJcq21KROEbF7oVRuAfg8Al8LMq0";
const videoGrids = document.getElementById("video-grid");

async function fetchVideos(query = "javascript") {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&maxResults=12&q=${query}`
  );
  const data = await response.json();
  data.items.forEach(item => {
    const video = item.snippet;
    const card = document.createElement("div");
    card.className = "video-card";
    card.innerHTML = `
      <img src="${video.thumbnails.high.url}" alt="Thumbnail">
      <div class="video-info">
        <h3>${video.title}</h3>
        <p>${video.channelTitle}</p>
      </div>
    `;
    videoGrid.appendChild(card);
  });
}

window.onload = () => {
  fetchVideos("coding"); // Default topic
};
