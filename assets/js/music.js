
const songList = [
    '/assets/music/1-closed_doors.mp3',
    '/assets/music/2-talking_to_myself.mp3',
    '/assets/music/3-reflection.mp3',
    '/assets/music/4-moving_backwards.mp3',
    '/assets/music/5-drunk_text.mp3',
    '/assets/music/6-broken_by_you.mp3',
    '/assets/music/7-be_alright.mp3',
    '/assets/music/8-im_nobody_without_you.mp3',
    '/assets/music/9-all_the_stars.mp3',
    '/assets/music/10-in_the_cards.mp3',
    '/assets/music/11-all_these_years.mp3',
    '/assets/music/12-all_i_ever_wanted.mp3',
    '/assets/music/13-rewrite-the-stars.mp3',
    '/assets/music/14-when-i-die.mp3',
    '/assets/music/15-nothing-to-miss.mp3',
    '/assets/music/16-somebody-to-someone.mp3',
    '/assets/music/17-kid.mp3',
    '/assets/music/18-bulletproof.mp3',
    '/assets/music/19-bite_the_bullet.mp3',
    '/assets/music/20-lies_to_the_mirror.mp3',
    '/assets/music/21-would_anyone_care.mp3'
];

const songNames = [
    {
        name: "Closed Doors",
        artist: "Ismail"
    }, 
    {
        name: "Talking To Myself",
        artist: "Jon Caryl"
    },
    {
        name: "Reflection",
        artist: "Alexander Stewart"
    },
    {
        name: "Moving Backwards",
        artist: "Jon Caryl"
    },
    {
        name: "Drunk Text",
        artist: "Henry Moodie"
    },
    {
        name: "Broken By You",
        artist: "Alexander Stewart"
    },
    {
        name: "Be Alright",
        artist: "Dean Lewis"
    },
    {
        name: "I'm Nobody Without You",
        artist: "Jon Caryl"
    },
    {
        name: "All The Stars",
        artist: "Hayd"
    },
    {
        name: "In The Cards",
        artist: "Jamie Miller"
    },
    {
        name: "All These Years",
        artist: "Alexander Stewart"
    },
    {
        name: "All I Ever Wanted",
        artist: "Dean Lewis"
    },
    {
        name: "Rewrite the Stars",
        artist: "Here At Last"
    },
    {
        name: "When I Die",
        artist: "Kyle Hume"
    },
    {
        name: "Nothing To Miss",
        artist: "Jamie Miller"
    },
    {
        name: "Somebody To Someone (I Just Wanna Fall In Love)",
        artist: "Natalie Jane"
    },
    {
        name: "Kid",
        artist: "Paul Eckert"
    },
    {
        name: "Bulletproof",
        artist: "Kado"
    },
    {
        name: "Bite the Bullet",
        artist: "Jessica Baio"
    },
    {
        name: "Lies To The Mirror",
        artist: "Kado, Promoting Sounds"
    },
    {
        name: "Would Anyone Care",
        artist: "Citizen Soldier"
    }
]

let currentSongIndex = Math.floor(Math.random() * songList.length);

const audioPlayer = document.getElementById('audioPlayer');
const playPauseButton = document.getElementById('playPause');
const nowPlayingText = document.getElementById('nowPlayingText');
const playPauseIcon = document.getElementById('playPauseIcon');

function loadSong(songIndex) {
    if (!songList[songIndex]) songIndex = 0;

    const songPath = songList[songIndex];
    const songData = songNames[Number.parseInt(songPath.split('/').pop()) - 1]
    
    nowPlayingText.textContent = `Now Playing | ${songData.name} - ${songData.artist}`;
    audioPlayer.src = songList[songIndex];
    
    audioPlayer.load();
    
    console.log(`Started playing "${songData.name}" by "${songData.artist}" [index ${songIndex}]`)
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
        playPauseIcon.src = '/assets/images/music/play.svg';
    } else {
        playPauseIcon.src = '/assets/images/music/pause.svg';
    }
}

document.getElementById('prev').addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songList.length) % songList.length;
    
    loadSong(currentSongIndex);
    audioPlayer.play();
    updatePlayPauseIcon();
});

document.getElementById('next').addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songList.length;
    
    loadSong(currentSongIndex);
    audioPlayer.play();
    updatePlayPauseIcon();
});

audioPlayer.addEventListener('ended', () => {
    currentSongIndex = (currentSongIndex + 1) % songList.length;
    
    loadSong(currentSongIndex);
    audioPlayer.play();
    updatePlayPauseIcon();
});

playPauseButton.addEventListener('click', togglePlayPause);