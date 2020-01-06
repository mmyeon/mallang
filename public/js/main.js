//페이지 이동
function moveToMain() {
  location.assign("main.html");
}

//말랑이 만난 날짜 계산
var date1 = new Date("10/08/2018");
var date2 = new Date();

var Difference_In_Time = date2.getTime() - date1.getTime();

var Difference_In_Days =
  Math.floor(Difference_In_Time / (1000 * 3600 * 24)) + 1;

document.getElementById("js_date").innerHTML = Difference_In_Days;

/* TODO: 함께 한 날짜 카운트로 보이기. 0 ~ 현재까지*/

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
var playList1;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "360",
    width: "640",
    videoId: "cH3fRE_g20Q",
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    },
    playerVars: {
      // autoplay: 1,
      listType: "playlist",
      list: "PLGvuch1E8yjhthvadHm0K4yzTZLCz0p1N"
    }
    // listType=playlist
    // & list=PLC77007E23FF423C6
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  // event.target.playVideo();
  playList1 = event.target.getPlaylist();
  console.log("리스트2", playList1);

  var target = document.getElementById("player2");
  var srcUrl = `https://www.youtube.com/embed/${playList1[0]}`;
  console.log("srcUrl", srcUrl);
  target.setAttribute("src", srcUrl);
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  // if (event.data == YT.PlayerState.PLAYING && !done) {
  //   setTimeout(stopVideo, 6000);
  //   done = true;
  // }
}
function stopVideo() {
  player.stopVideo();
}
