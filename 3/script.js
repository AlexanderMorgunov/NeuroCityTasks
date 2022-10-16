const video = document.querySelector('#video-player')
      progress = document.querySelector('.progress')
;

let isPlay = false;

video.addEventListener('click', () => {
    if(isPlay) {
        video.pause(); 
        isPlay = false;   
    } else {
        video.play(); 
        isPlay = true;
    }
});

const progressUpdate = () => {
    const time = video.currentTime;
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time - minutes*60);
    let miniSeconds = Math.floor((time - minutes*60 - seconds)*100);

    minutes < 10 ? minutes = '0'+minutes : minutes;
    seconds < 10 ? seconds = '0'+seconds : seconds;
    miniSeconds < 10 ? miniSeconds+='0' : miniSeconds;

    const totalTime = video.duration;
    totalMinutes = Math.floor(totalTime / 60);
    let totalSeconds = Math.floor(totalTime - totalMinutes*60);
    let totalMiniSeconds = Math.floor((totalTime - totalMinutes*60 - totalSeconds)*100);

    progress.textContent = `${minutes}: ${seconds}: ${miniSeconds} / 0${totalMinutes}: 0${totalSeconds}: ${totalMiniSeconds}`

    if(time == totalTime) {
        video.style.poster="src/poster.jpg";
    } 
}

video.addEventListener('timeupdate', progressUpdate);



