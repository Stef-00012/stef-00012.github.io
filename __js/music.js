
const songList = [
    '/__assets/music/1-closed_doors.mp3',//0
    '/__assets/music/2-talking_to_myself.mp3',//1
    '/__assets/music/3-reflection.mp3',//2
    '/__assets/music/4-moving_backwards.mp3',//3
    '/__assets/music/5-drunk_text.mp3',//4
    '/__assets/music/6-broken_by_you.mp3',//5
    '/__assets/music/7-be_alright.mp3',//6
    '/__assets/music/8-im_nobody_without_you.mp3',//7
    '/__assets/music/9-all_the_stars.mp3',//8
    '/__assets/music/10-in_the_cards.mp3',//9
    '/__assets/music/11-all_these_years.mp3'//10
];

const songNames = [
    {
        name: "Closed Doors",
        artist: "Ismail"
    }, //0
    {
        name: "Talking to Myself",
        artist: "Jon Caryl"
    },//1
    {
        name: "Reflection",
        artist: "Alexander Stewart"
    },//2
    {
        name: "Moving Backwards",
        artist: "Jon Caryl"
    },//3
    {
        name: "Drunk Text",
        artist: "Henry Moodie"
    },//4
    {
        name: "Broken by You",
        artist: "Alexander Stewart"
    },//5
    {
        name: "Be Alright",
        artist: "Dean Lewis"
    },//6
    {
        name: "I'm Nobody Without You",
        artist: "Jon Caryl"
    },//7
    {
        name: "All The Stars",
        artist: "Hayd"
    },//8
    {
        name: "In The Cards",
        artist: "Jamie Miller"
    },//9
    {
        name: "All These Years",
        artist: "Alexander Stewart"
    }//10
]

let currentSongIndex = Math.floor(Math.random() * songList.length);

loadSong(currentSongIndex)

const audioPlayer = document.getElementById('audioPlayer');
const playPauseButton = document.getElementById('playPause');
const nowPlayingText = document.getElementById('nowPlayingText');
const playPauseIcon = document.getElementById('playPauseIcon');

function loadSong(songIndex) {
    const songPath = songList[songIndex];
    const songData = songNames[parseInt(songPath.split('/').pop()) - 1]
    
    nowPlayingText.textContent = `Now Playing | ${songData.name} - ${songData.artist}`;
    audioPlayer.src = songList[songIndex];
    
    audioPlayer.load();
}

function togglePlayPause() {
    if (audioPlayer.paused || audioPlayer.ended) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
    
    updatePlayPauseIcon();
}

function updatePlayPauseIcon() {
    if (audioPlayer.paused) {
        playPauseIcon.src = '/__assets/images/play.svg';
    } else {
        playPauseIcon.src = '/__assets/images/pause.svg';
    }
}

document.getElementById('prev').addEventListener('click', function () {
    currentSongIndex = (currentSongIndex - 1 + songList.length) % songList.length;
    
    loadSong(currentSongIndex);
    audioPlayer.play();
    updatePlayPauseIcon();
});

document.getElementById('next').addEventListener('click', function () {
    currentSongIndex = (currentSongIndex + 1) % songList.length;
    
    loadSong(currentSongIndex);
    audioPlayer.play();
    updatePlayPauseIcon();
});

audioPlayer.addEventListener('ended', function () {
    currentSongIndex = (currentSongIndex + 1) % songList.length;
    
    loadSong(currentSongIndex);
    audioPlayer.play();
    updatePlayPauseIcon();
});

playPauseButton.addEventListener('click', togglePlayPause);
