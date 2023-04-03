const spoiler = document.getElementById('spoiler');
const spoilerDesktop = document.getElementById('spoiler-desktop');

const codeBlock = document.getElementById('code-block');
const codeBlockDesktop = document.getElementById('code-block-desktop');

const aboutMeModalElement = document.getElementById('aboutMeModal');
const aboutMeModalClose = document.getElementById('aboutMeModal-close');
const aboutMeModalBody = document.getElementById('aboutMeModal-body');

const aboutMeModalElementDesktop = document.getElementById('aboutMeModalDesktop');
const aboutMeModalCloseDesktop = document.getElementById('aboutMeModalDesktop-close');
const aboutMeModalBodyDesktop = document.getElementById('aboutMeModalDesktop-body');

const rabbitModalElement = document.getElementById('rabbitModal');
const rabbitModalClose = document.getElementById('rabbitModal-close');
const rabbitModalBody = document.getElementById('rabbitModal-body');

const rabbitModalElementDesktop = document.getElementById('rabbitModalDesktop');
const rabbitModalCloseDesktop = document.getElementById('rabbitModalDesktop-close');
const rabbitModalBodyDesktop = document.getElementById('rabbitModalDesktop-body');

const alternativeLinksModalElement = document.getElementById('alternativeLinksModal');
const alternativeLinksModalClose = document.getElementById('alternativeLinksModal-close');
const alternativeLinksModalBody = document.getElementById('alternativeLinksModal-body');

const alternativeLinksModalElementDesktop = document.getElementById('alternativeLinksModalDesktop');
const alternativeLinksModalCloseDesktop = document.getElementById('alternativeLinksModalDesktop-close');
const alternativeLinksModalBodyDesktop = document.getElementById('alternativeLinksModalDesktop-body');

const githubStatsModalElement = document.getElementById('githubStatsModal');
const githubStatsModalClose = document.getElementById('githubStatsModal-close');
const githubStatsModalBody = document.getElementById('githubStatsModal-body');

const githubStatsModalElementDesktop = document.getElementById('githubStatsModalDesktop');
const githubStatsModalCloseDesktop = document.getElementById('githubStatsModalDesktop-close');
const githubStatsModalBodyDesktop = document.getElementById('githubStatsModalDesktop-body');

function backgroundImageSet() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    if ((month == 12 && day >= 8 && day <= 31) || (month == 1 && day >= 2 && day <= 3)) {
    document.body.className = "christmas"; //christmas
    }
    
    if (month == 4 && day >= 9 && day <= 12) {
    document.body.className = "easter"; //easter
    }
    
    if (month == 10 && day >= 25 && day <= 31) {
    document.body.className = "halloween"; //halloween
    }
    
    if (month == 1 && day >= 4 && day <= 8) {
    document.body.className = "epiphany"; //epiphany
    }
    
    if (month == 1 == day == 1) {
    document.body.className = "newyear" //new year
    }
}

backgroundImageSet();

spoiler.onclick = function() {
    spoiler.style.backgroundColor = "rgba(54, 47, 46, 0.65)";
    spoiler.style.color = "rgba(255, 255, 255, 0.85)";
}

spoilerDesktop.onclick = function() {
    spoilerDesktop.style.backgroundColor = "rgba(54, 47, 46, 0.65)";
    spoilerDesktop.style.color = "rgba(255, 255, 255, 0.85)";
}

function close() {
    alternativeLinksModalElement.style.display = "none";
    alternativeLinksModalElementDesktop.style.display = "none";
    
    aboutMeModalElement.style.display = "none";
    aboutMeModalElementDesktop.style.display = "none";
    
    rabbitModalElement.style.display = "none";
    rabbitModalElementDesktop.style.display = "none";
    
    githubStatsModalElement.style.display = "none";
    githubStatsModalElementDesktop.style.display = "none";
}

function aboutMeModal() {
    if (window.innerWidth < 720) {
    close()
    aboutMeModalElement.style.display = "block";
    
    aboutMeModalBody.scrollTop = 0;
    
    spoiler.style.backgroundColor = "rgba(54, 47, 46, 1)";
    spoiler.style.color = "transparent";
    
    codeBlock.scrollTop = 0;
    codeBlock.scrollLeft = 0;
    } else {
    close()
    aboutMeModalElementDesktop.style.display = "block";
    
    aboutMeModalBodyDesktop.scrollTop = 0;
            
    spoilerDesktop.style.backgroundColor = "rgba(54, 47, 46, 1)";
    spoilerDesktop.style.color = "transparent";
    
    codeBlockDesktop.scrollTop = 0;
    codeBlockDesktop.scrollLeft = 0;
    }
}

function rabbitModal() {
    if (window.innerWidth < 720) {
    close()
    rabbitModalElement.style.display = "block";
    
    rabbitModalBody.scrollTop = 0;
    } else {
    close()
    rabbitModalElementDesktop.style.display = "block";
    
    rabbitModalBody.scrollTop = 0;
    }
}

function alternativeLinksModal() {
    if (window.innerWidth < 720) {
    close()
    alternativeLinksModalElement.style.display = "block";
    
    alternativeLinksModalBody.scrollTop = 0;
    } else {
    close()
    alternativeLinksModalElementDesktop.style.display = "block";
    
    alternativeLinksModalBodyDesktop.scrollTop = 0;
    }
}

function githubStatsModal() {
    if (window.innerWidth < 720) {
    close()
    githubStatsModalElement.style.display = "block";
    
    githubStatsModalBody.scrollTop = 0;
    } else {
    close()
    githubStatsModalElementDesktop.style.display = "block";
    
    githubStatsModalBodyDesktop.scrollTop = 0;
    }
}

aboutMeModalClose.onclick = close
aboutMeModalCloseDesktop.onclick = close

rabbitModalClose.onclick = close
rabbitModalCloseDesktop.onclick = close

alternativeLinksModalClose.onclick = close
alternativeLinksModalCloseDesktop.onclick = close

githubStatsModalClose.onclick = close
githubStatsModalCloseDesktop.onclick = close

window.onclick = function(event) {
    if (
    event.target == aboutMeModalElement ||
    event.target == aboutMeModalElementDesktop ||
    
    event.target == rabbitModalElement ||
    event.target == rabbitModalElementDesktop ||
    
    event.target == alternativeLinksModalElement ||
    event.target == alternativeLinksModalElementDesktop ||
    
    event.target == githubStatsModalElement ||
    event.target == githubStatsModalElementDesktop
    ) {
    close()
    }
}