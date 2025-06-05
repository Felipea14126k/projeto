const songName = document.getElementById('song-name');
const bandName = document.getElementById('band-name');
const song = document.getElementById('audio');
const cover = document.getElementById('cover');
const play = document.getElementById('play');
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const currentProgress = document.getElementById('current-progress');
const progressContainer = document.getElementById('progress-container');

const engenharia = {
  songName: 'A egenharia',
  artist: 'The Weeknd, Kendrick Lamar',
    file: 'engenharia'
    
};

const Politica = {
  songName: 'Politica',
  artist: 'Kendrick Lamar, SZA',
 file: 'politica'
};

//const ProgaramaçãoEcriaçãoDejogos = {
  //songName: 'Progaramação',
//artist: 'Gabriel',
 // file: 'All_The_Stars'
  //file: 'Programação'
//};

const explicaçãoProjeto = {
   songName: 'A Explicação do Projeto',
 artist: 'Felipe',
 file: 'explicação do projeto'
};


let isPlaying = false;
const playlist = [engenharia, Politica,explicaçãoProjeto];
let index = 0;

function playSong() {
    play.querySelector('.bi').classList.remove('bi-play-circle-fill');
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    song.play();
    isPlaying = true;
}

function pauseSong() {
    play.querySelector('.bi').classList.add('bi-play-circle-fill');
    play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    song.pause();
    isPlaying = false;
}

function playPauseDecider() {
    if (isPlaying === true) {
        pauseSong();
    }
    else {
        playSong();
    }
}

function initializeSong() {
    cover.src = `imagens/${playlist[index].file}.webp`;
    song.src = `songs/${playlist[index].file}.mp3`;
    songName.innerText = playlist[index].songName;
    bandName.innerText = playlist[index].artist;
}

function previousSong() {
    if (index === 0)
        index = playlist.length - 1;
    else {
        index -= 1;
    }
    initializeSong();
    playSong();
}
function nextSong() {
    if (index === playlist.length - 1)
        index - 0;
    else {
        index += 1;
    }
    initializeSong();
    playSong();
}

function updateProgressBar() {
    const barWidth = (song.currentTime / song.duration) * 100;
    currentProgress.style.setProperty('--progress', `${barWidth}%`);
}

function jumpTo(event) {
    const width = progressContainer.clientWidth;
    const clickPostion = event.offsetX;
    const jumpToTime = (clickPostion / width) * song.duration;
    song.currentTime = jumpToTime;
}


initializeSong();

play.addEventListener('click', playPauseDecider);
previous.addEventListener('click', previousSong);
next.addEventListener('click', nextSong);
song.addEventListener('timeupdate', updateProgressBar);
progressContainer.addEventListener('click', jumpTo);
