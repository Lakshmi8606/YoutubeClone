const videos=[
    {
        thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    title: "Never Gonna Give You Up",
    channel: "Rick Astley",
    views: "1.2B views",
    date: "14 years ago"
    },
     {
        thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    title: "Never Gonna Give You Up",
    channel: "Rick Astley",
    views: "1.2B views",
    date: "14 years ago"
    },
     {
        thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    title: "Never Gonna Give You Up",
    channel: "Rick Astley",
    views: "1.2B views",
    date: "14 years ago"
    },
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