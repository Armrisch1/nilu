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
divVideo.appendChild(video)
video.classList.add("main_section-video")

function setVideoSource() {
    if (window.matchMedia("(max-width: 375px)").matches) {
        video.setAttribute("src", "assets/videos/13 375x667/375x667_mq.mp4")
    } else if (window.matchMedia("(max-width: 430px)").matches) {
        video.setAttribute("src", "assets/videos/12 430x932 (temporary)/430х932_mq_temporary.mp4")
    } else if (window.matchMedia("(max-width: 632px)").matches) {
        video.setAttribute("src", "assets/videos/11 632x800/632x800_mq.mp4")
    } else if (window.matchMedia("(max-width: 750px)").matches) {
        video.setAttribute("src", "assets/videos/750x1334_mq.mp4")
    } else if (window.matchMedia("(max-width: 860px)").matches) {
        video.setAttribute("src", "assets/videos/860x1864_mq.mp4")
    } else if (window.matchMedia("(max-width: 1024px)").matches) {
        video.setAttribute("src", "assets/videos/10 1024x1366/1024x1366_mq.mp4")
    } else if (window.matchMedia("(max-width: 1264px)").matches) {
        video.setAttribute("src", "assets/videos/1264x1600_mq.mp4")
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

setVideoSource();

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

video.addEventListener('loadeddata', () => {
    let preloader = document.getElementById('preload');
    preloader.style.display = 'none';
});


$('#nilu_contact_form').on("submit", function (e){
    e.preventDefault();

    const name = $('[name="name"]');
    const email = $('[name="email"]');
    const subject = $('[name="subject"]');
    const message = $('[name="message"]');

    if (!name.val().length || !email.val().length || !subject.val().length || !message.val().length){
        alert('Please fill in all fields');
        return;
    }

    const formData = new FormData();
    formData.append('name', name.val());
    formData.append('email', email.val());
    formData.append('subject', subject.val());
    formData.append('message', message.val());

    const form = this;
    const action = this.action;

    $.ajax({
        url: action,
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function(response) {
            console.log('Success:', response);
            form.reset();
            alert(response);
        },
        error: function(xhr, status, error) {
            console.error('Error:', error);
            form.reset();
            alert(`An error occurred while submitting the form. ${error.message}`);
        }
    });
});