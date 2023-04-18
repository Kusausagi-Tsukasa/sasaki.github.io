function init() {
    gapi.client.init({
      'apiKey': 'AIzaSyDhHyEiIjsf_UJnXD421lvEq9rdGjDRJhc',
      'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
    }).then(function() {
      getChannelVideos();
    }, function(error) {
      console.error(error);
    });
  }
  
  function getChannelVideos() {
    gapi.client.youtube.search.list({
      'part': 'snippet',
      'channelId': 'UCE3QwJ0ERHjnyCJNYxKwdQQ',
      'maxResults': 12,
      'order': 'date'
    }).then(function(response) {
      var videos = response.result.items;
      var videoList = document.getElementById('videoList');
      for(var i = 0; i < videos.length; i++) {
        var video = videos[i];
        var title = video.snippet.title;
        var thumbnailUrl = video.snippet.thumbnails.medium.url;
        var videoLink = 'https://www.youtube.com/watch?v=' + video.id.videoId;
        var thumbnail = '<a href="' + videoLink + '"><img src="' + thumbnailUrl + '"></a>';
        var videoItem = document.createElement('div');
        videoItem.innerHTML = thumbnail + '<br>' + title;
        videoList.appendChild(videoItem);
      }
    }, function(error) {
      console.error(error);
    });
  }
  