const $video = document.querySelector('#v_reunion')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

const $progress = document.querySelector('#progress')

$play.addEventListener('click', getplay)
$pause.addEventListener('click', getpause)
$backward.addEventListener('click', getbackward)
$forward.addEventListener('click', getforward)
$video.addEventListener('loadedmetadata', cargar)
$video.addEventListener('timeupdate', actualizacion_progreso)

$progress.addEventListener('input', actualizacion_video)

function getplay(){
   $video.play()
   $play.hidden = true
   $pause.hidden = false
   console.log('Click en el boton play')
}

function getpause() {
   $video.pause()
   $pause.hidden = true
   $play.hidden = false
   console.log('Click en el boton pause')
}

function getbackward() {
   $video.currentTime -= 10
   console.log('Retroceder 10 segundos')
}

function getforward() {
   $video.currentTime += 10
   console.log('Adelantar 10 segundos')
}

function cargar(){
   $progress.max = $video.duration
   console.log('Ha cargado mi video', $video.duration)
}

function actualizacion_progreso(){
   $progress.value = $video.currentTime
   // console.log('tiempo actual', $video.currentTime)
}

function actualizacion_video(){
   $video.currentTime = $progress.value
   console.log($progress.value)
}
