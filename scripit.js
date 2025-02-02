const songName = document.getElementById('song-name');
const bandName = document.getElementById('band-name');
const song = document.getElementById('audio');
const cover = document.getElementById('cover');
const play = document.getElementById('play');

const prayForMe = {
    songName: 'Pray For Me',
    artist: 'The Weeknd, Kendrick Lamar',
    file: 'Kendrick_Lamar_The_Weeknd_-_Pray_For_Me'
};

const conLaBrisa = {
    songName: 'Con La Brisa (From Black Panther Wakanda Forever)',
    artist: 'Foudeqush, Ludwig Göransson',
    file: 'Con_La_Brisa_From_Black_Panther_Wakanda_Forever'
};
const allTheStar = {
    songName: 'All The Stars (feat. SZA)',
    artist: 'Kendrick Lamar, SZA',
    file: 'All_The_Stars'
};

let isPlaying = false;
const playlist = [prayForMe, conLaBrisa,allTheStar ];
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
    cover.src = `images/${playlist[index].file}.webp`;
    song.src = `songs/${playlist[index].file}.mp3`;
    songName.innerText = playlist[index].songName;
    bandName.innerText = playlist[index].artist;
}

initializeSong();

play.addEventListener('click', playPauseDecider);

