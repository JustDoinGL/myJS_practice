let video = document.getElementById('task13-video')

document.getElementById('task13-play').onclick = () => video.play()

document.getElementById('task13-pause').onclick = () => video.pause()

document.getElementById('task13-stop').onclick = () => {
    video.pause()
    video.currentTime = 0
}

document.getElementById('task13-fast').onclick = () => {
    video.play()
    if (video.playbackRate <= 2) {
        video.playbackRate += 0.1
    }
    if (video.playbackRate > 2 && video.playbackRate < 8) {
        video.playbackRate += 1
    }
}

document.getElementById('task13-slow').onclick = () => {
    video.play()
    if (video.playbackRate <= 2 && video.playbackRate > 0.5) {
        video.playbackRate -= 0.1
    }
    if (video.playbackRate > 2) {
        video.playbackRate -= 1
    }

}

document.getElementById('task13-normal').onclick = () => {
    video.play()
    video.playbackRate = 1
}

videoSound()

function videoSound() {
    let videoSoundGet = document.getElementById('task13-sound').value
    video.volume = videoSoundGet / 100
}

document.getElementById('task13-video').onclick = () => {
    if (video.paused) {
        video.play()
    } else {
        video.pause()
    }
}

document.getElementById('task13-sound').oninput = videoSound

document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        if (video.paused) {
            video.play()
        } else {
            video.pause()
        }
    }
  });
