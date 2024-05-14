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
const video = document.querySelector('video')
// const videoSource = document.createElement('source')
divVideo.appendChild(video)
// video.appendChild(videoSource)
// video.setAttribute("mute", "mute")
// video.setAttribute("autoplay", "autoplay")
video.classList.add("main_section-video")

// if (window.matchMedia("(max-width: 1920px)").matches) {
//     video.setAttribute("src", "assets/videos/01 1920x1080/1920x1080_mq.mp4")
// }

// if (window.matchMedia("(max-width: 1680px)").matches) {
//     video.setAttribute("src", "assets/videos/02 1680x1050/1680x1050_hq.mp4")
// }

// if (window.matchMedia("(max-width: 1600px)").matches) {
//     video.setAttribute("src", "assets/videos/03 1600x1024/1600x1024_mq.mp4")
// }

// if (window.matchMedia("(max-width: 1440px)").matches) {
//     video.setAttribute("src", "assets/videos/04 1440x1080/1440x1080_mq.mp4")
// }

// if (window.matchMedia("(max-width: 1366px)").matches) {
//     video.setAttribute("src", "assets/videos/06 1366x768/1366x768_mq.mp4")
// }

// if (window.matchMedia("(max-width: 1280px)").matches) {
//     video.setAttribute("src", "assets/videos/07 1280x1024/1280x1024_mq.mp4")
// }

// if (window.matchMedia("(max-width: 1024px)").matches) {
//     video.setAttribute("src", "assets/videos/10 1024x1366/1024x1366_mq.mp4")
// }

// if (window.matchMedia("(max-width: 632px)").matches) {
//     video.setAttribute("src", "assets/videos/11 632x800/632x800_mq.mp4")
// }

// if (window.matchMedia("(max-width: 375px)").matches) {
//     video.setAttribute("src", "assets/videos/13 375x667/375x667_mq.mp4")
// }


function setVideoSource() {
    if (window.matchMedia("(max-width: 375px)").matches) {
        video.setAttribute("src", "assets/videos/13 375x667/375x667_mq.mp4")
    } else if (window.matchMedia("(max-width: 430px)").matches) {
        video.setAttribute("src", "assets/videos/12 430x932 (temporary)/430х932_mq_temporary.mp4")
    } else if (window.matchMedia("(max-width: 632px)").matches) {
        video.setAttribute("src", "assets/videos/11 632x800/632x800_mq.mp4")
    } else if (window.matchMedia("(max-width: 1024px)").matches) {
        video.setAttribute("src", "assets/videos/10 1024x1366/1024x1366_mq.mp4")
    } else if (window.matchMedia("(max-width: 1280px)").matches) {
        video.setAttribute("src", "assets/videos/07 1280x1024/1280x1024_mq.mp4")
    } else if (window.matchMedia("(max-width: 1366px)").matches) {
        video.setAttribute("src", "assets/videos/06 1366x768/1366x768_mq.mp4")
    } else if (window.matchMedia("(max-width: 1440px)").matches) {
        video.setAttribute("src", "assets/videos/04 1440x1080/1440x1080_mq.mp4")
    } else if (window.matchMedia("(max-width: 1600px)").matches) {
        video.setAttribute("src", "assets/videos/03 1600x1024/1600x1024_mq.mp4")
    } else if (window.matchMedia("(max-width: 1680px)").matches) {
        video.setAttribute("src", "assets/videos/02 1680x1050/1680x1050_mq.mp4")
    } else if (window.matchMedia("(max-width: 1920px)").matches) {
        video.setAttribute("src", "assets/videos/01 1920x1080/1920x1080_mq.mp4")
    } else {
        video.setAttribute("src", "assets/videos/01 1920x1080/1920x1080_mq.mp4")
    }
}


setVideoSource()

// btn down

const btnDown = document.querySelectorAll("a[href^='#']");
for (let smoothLink of btnDown) {
    smoothLink.addEventListener("click", function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute("href");

        document.querySelector(id).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
};

// loader on

video.addEventListener('loadeddata', () => {
    // loader off

})