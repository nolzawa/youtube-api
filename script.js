function fetchAPI() {
    const youtubekey = 'API_KEY_HERE';
    let regionCode = document.getElementById('region').value;
    let dataBox = document.getElementById('ytData');
    
    console.log(regionCode);

    fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&regionCode=${regionCode}&fields=items(snippet(title%2C%20channelTitle)%2C%20statistics(viewCount%2C%20likeCount))&key=${youtubekey}`)
    .then(response => {
        return response.json();
}).then(responseData => {
    console.log(responseData);

    data = "";

    for (let key in responseData.items) {
        let title = responseData.items[key].snippet.title;
        let channel = responseData.items[key].snippet.channelTitle;
        let video_views = responseData.items[key].statistics.viewCount;
        let video_likes = responseData.items[key].statistics.likeCount;

        data += `<p>Video Title: ${title}<br>Channel: ${channel}<br>Views: ${video_views}<br>Likes: ${video_likes}</p><br>`;
    };
    
    dataBox.innerHTML = data;
})
};

