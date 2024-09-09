const timeElement = document.getElementById('time')
let time = new Date().toTimeString().split(' ')[0]
timeElement.innerText = time
setInterval(() => {
    time = new Date().toTimeString().split(' ')[0]
    timeElement.innerText = time
}, 1000)

let i = 0;
const text = 'bash /system/bin/404.sh';
const speed = 80;

function typing() {
    if (i < text.length) {
        document.getElementById('typing').innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, speed);
    }
}

typing()

setInterval(() => {
    if (i >= text.length) {
        const errorCodeElement = document.getElementById('command-output-code')
        const errorTextElement = document.getElementById('command-output-text')
        const socialPageURLElement = document.getElementById('socials-url')
        const errorCodeASCIIArray = [
            ' /$$   /$$  /$$$$$$  /$$   /$$',
            '| $$  | $$ /$$$_  $$| $$  | $$',
            '| $$  | $$| $$$$\\ $$| $$  | $$',
            '| $$$$$$$$| $$ $$ $$| $$$$$$$$',
            '|_____  $$| $$\\ $$$$|_____  $$',
            '      | $$| $$ \\ $$$      | $$',
            '      | $$|  $$$$$$/      | $$',
            '      |__/ \\______/       |__/'
        ]
        const errorTextASCIIArrayNot = [
            ' /$$   /$$             /$$    ',
            '| $$$ | $$            | <a class="hidden" href="https://instagram.com/twitch">$$</a>    ',
            '| $$$$| $$  /$$$$$$  /$$$$$$  ',
            '| $$ $$ $$ /$$__  $$|_  $$_/  ',
            '| $$  $$$$| $$  \\ $$  | $$    ',
            '| $$\\  $$$| $$  | $$  | $$ /$$',
            '| $$ \\  $$|  $$$$$$/  |  $$$$/',
            '|__/  \\__/ \\______/    \\___/  '
        ]
        const errorTextASCIIArrayFound = [
            ' /$$$$$$$$                                  /$$',
            '| $$_____/                                 | $$',
            '| $$     /$$$$$$  /$$   /$$ /$$$$$$$   /$$$$$$$',
            '| $$$$$ /$$__  $$| $$  | $$| $$__  $$ /<a class="hidden" href="https://instagram.com/discord">$$</a>__  $$',
            '| $$__/| $$  \\ $$| $$  | $$| $$  \\ $$| $$  | $$',
            '| $$   | $$  | $$| $$  | $$| $$  | $$| $$  | $$',
            '| $$   |  $$$$$$/|  $$$$$$/| $$  | $$|  $$$$$$$',
            '|__/    \\______/  \\______/ |__/  |__/ \\_______/'
        ]
        
        errorCodeElement.innerHTML = errorCodeASCIIArray.join('\n')
        
        setTimeout(() => {
            errorTextElement.innerHTML = `${errorTextASCIIArrayNot.join('\n')}\n${errorTextASCIIArrayFound.join('\n')}`
            
            socialPageURLElement.innerHTML = '<a href="https://stefdp.is-a.dev">Go to Socials page!</a>'
        }, 500)
    }
}, 100)


const modal1 = document.getElementById("modal1")
const span1 = document.getElementById("close1")

const modal2 = document.getElementById('modal2')
const span2 = document.getElementById('close2')

const modal3 = document.getElementById('modal3')
const span3 = document.getElementById('close3')

function startTimeouts() {
    const tim1 = setTimeout(() => {
        modal3.style.display = "none";
        modal2.style.display = "none";
        modal1.style.display = "block";
    }, 180000)
    
    const tim2 = setTimeout(() => {
        modal1.style.display = "none";
        modal3.style.display = "none";
        modal2.style.display = "block";
    }, 300000)
    
    const tim3 = setTimeout(() => {
        modal1.style.display = "none";
        modal2.style.display = "none";
        modal3.style.display = "block";
    }, 480000)
    
    document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === "hidden") {
        clearTimeout(tim1)
        clearTimeout(tim2)
        clearTimeout(tim3)
    } else {
        startTimeouts()
    }
    })
}
startTimeouts()

function hideModals() {
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
}

span1.onclick = hideModals
span2.onclick = hideModals
span3.onclick = hideModals

window.onclick = (event) => {
    if (event.target === modal1 || event.target === modal2 || event.target === modal3) hideModals();
}