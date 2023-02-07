const video = document.getElementById("video")
const playVideo=document.getElementById("play")
const pauseVideo=document.getElementById("pause")
const rewindVideo=document.getElementById("rewind")
const forwardVideo=document.getElementById("forward")
const fullScreenVideo=document.getElementById("fullScreen")
const downloadVideo=document.getElementById("download")
const inner=document.querySelector("div.inner")
const controls=document.querySelector("div.controls")
const currentTime=document.getElementById("currentTime")
const totalTime=document.getElementById("ToTalTime")
const volumeRange=document.getElementById("volumeRange")
// const rangeVolume=document.getElementById("rangeVolume")
// // video.volume=rangeVolume.value/100
// rangeVolume.addEventListener("change",(e)=>{
//     video.volume=e.target.value/100
// })
document.write(video.volume)
controls.style.width=video.style.width
video.addEventListener("timeupdate", () => {
    let curr = (video.currentTime / video.duration) * 100
    let minutes=Math.trunc(video.currentTime/60)
    if (minutes<9){
        minutes=`0${minutes}`
    }
    let seconds=Math.trunc(video.currentTime%60)
    if (seconds<9){
        seconds=`0${seconds}`
    }
    let tMinutes=Math.trunc(video.duration/60)
    if (tMinutes<9){
        tMinutes=`0${tMinutes}`
    }
    let tSeconds=Math.trunc(video.duration%60)
    if (tSeconds<9){
        tSeconds=`0${tSeconds}`
    }
    currentTime.innerText=`${minutes}:${seconds}`
    totalTime.innerText=`${tMinutes}:${tSeconds}`
    if(video.ended){
        // playVideo.setAttribute("display","block")
        playVideo.setAttribute("display","block")
        pauseVideo.setAttribute("display","none")
        // pauseVideo.className="vNone"
    }
    inner.style.width = `${curr}%`
})
const play = (e) => {
    if(video.paused){
        playVideo.removeAttribute("display")
        playVideo.setAttribute("display","none")
        pauseVideo.removeAttribute("display")
        pauseVideo.setAttribute("display","block")
        video.play()
    }
    else{

        playVideo.setAttribute("display","block")
        pauseVideo.setAttribute("display","none")


        video.pause()
    }
}
const fullScreen = (e) => {
    e.preventDefault()
    video.requestFullscreen()
}
const download = (e) => {
    e.preventDefault()
    let a = document.createElement('a')
    a.href = video.src
    a.target = "_blank"
    a.download = ""
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}
const rewind = (e) => {
    video.currentTime = video.currentTime - ((video.duration/100) * 5)
}
const forward = (e) => {
    video.currentTime = video.currentTime + ((video.duration/100) * 5)
}
volumeRange.addEventListener('input', function() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #AE8649 0%, #AE8649 ${value}%, #fff ${value}%, white 100%)`
})

volumeRange.addEventListener("change",function (e){
    video.volume=e.currentTarget.value /100
})
