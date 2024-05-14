const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const divVideo = document.querySelector('.main_section-video-box')
const video = document.createElement('video')
const videoSource = document.createElement('source')
divVideo.appendChild(video)
video.appendChild(videoSource)
video.setAttribute("muted", "muted")
video.setAttribute("autoplay", "autoplay")
video.classList.add("main_section-video")
videoSource.setAttribute("src", "assets/videos/01 1920x1080/1920x1080_mq.mp4")

if(window.matchMedia("(max-width: 1920px)").matches) {
    videoSource.setAttribute("src", "assets/videos/01 1920x1080/1920x1080_mq.mp4")
}

if(window.matchMedia("(max-width: 1680px)").matches) {
    videoSource.setAttribute("src", "assets/videos/02 1680x1050/1680x1050_mq.mp4")
}

if(window.matchMedia("(max-width: 1600px)").matches) {
    videoSource.setAttribute("src", "assets/videos/03 1600x1024/1600x1024_mq.mp4")
}

if(window.matchMedia("(max-width: 1440px)").matches) {
    videoSource.setAttribute("src", "assets/videos/04 1440x1080/1440x1080_mq.mp4")
}

if(window.matchMedia("(max-width: 1366px)").matches) {
    videoSource.setAttribute("src", "assets/videos/06 1366x768/1366x768_mq.mp4")
}

if(window.matchMedia("(max-width: 1280px)").matches) {
    videoSource.setAttribute("src", "assets/videos/07 1280x1024/1280x1024_mq.mp4")
}

if(window.matchMedia("(max-width: 1024px)").matches) {
    videoSource.setAttribute("src", "assets/videos/10 1024x1366/1024x1366_mq.mp4")
}

if(window.matchMedia("(max-width: 632px)").matches) {
    videoSource.setAttribute("src", "assets/videos/11 632x800/632x800_mq.mp4")
}

if(window.matchMedia("(max-width: 375px)").matches) {
    videoSource.setAttribute("src", "assets/videos/13 375x667/375x667_mq.mp4")
}
