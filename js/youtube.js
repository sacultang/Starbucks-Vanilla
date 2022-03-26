// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: 'OdFr7wd-DWA', // 최초 재생할 유튜브 영상 ID
        playerVars : {
            autoplay: true, //자동 재생 유무
            loop: true, // 반복 재생 유무
            playlist:'OdFr7wd-DWA', // 반복 재생할 유튜브 영상 ID 목록
            origin:'https://confident-hoover-5f75a6.netlify.app/'
        },
        events : {
            onReady: function(event){
                event.target.mute()
            }
        }
        
    });
}