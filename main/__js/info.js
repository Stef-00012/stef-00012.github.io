const inputEndpointElement = document.getElementById('endpoint')
const inputTypeElement = document.getElementById('type')
const inputPassElement = document.getElementById('password')
const outputElement= document.getElementById('outputDiv')
const timeElement = document.getElementById('time')

let time = new Date().toTimeString().split(' ')[0]
timeElement.innerText = time

setInterval(() => {
    time = new Date().toTimeString().split(' ')[0]
    timeElement.innerText = time
}, 1000)

var i1 = 0
var text1 = 'bash /system/bin/info.sh'

var i2 = 0
var text2 = 'Endpoint: '

var i3 = 0
var text3 = 'Info type: '

var i4 = 0
var text4 = 'Password:'
const speed = 80;

function typing1() {
    if (i1 < text1.length) {
        document.getElementById('typing').innerHTML += text1.charAt(i1);
        i1++;
        setTimeout(typing1, speed);
    } else {
        typing2()
    }
}

function typing2() {
    if (i2 < text2.length) {
        document.getElementById('endpointtype').innerHTML += text2.charAt(i2);
        i2++;
        setTimeout(typing2, speed);
    } else {
        inputEndpointElement.style.display = 'inline'
        inputEndpointElement.focus()
        inputEndpointElement.select()
    }
}

function typing3() {
    if (i3 < text3.length) {
        document.getElementById('infotype').innerHTML += text3.charAt(i3);
        i3++;
        setTimeout(typing3, speed);
    } else {
        inputTypeElement.style.display = 'inline'
        inputTypeElement.focus()
        inputTypeElement.select()
    }
}

function typing4() {
    if (i4 < text4.length) {
        document.getElementById('passtype').innerHTML += text4.charAt(i4);
        i4++;
        setTimeout(typing4, speed);
    } else {
        inputPassElement.style.display = 'inline'
        inputPassElement.focus()
        inputPassElement.select()
    }
}

typing1()

async function inputEndpointSubmit() {
    if (event.keyCode == 13) {
        inputEndpointElement.setAttribute('disabled', '')
        
        typing3()
    }
}

async function inputTypeSubmit() {
    if (event.keyCode == 13) {
        inputTypeElement.setAttribute('disabled', '')
        
        typing4()
    }
}

async function inputPassSubmit() {
    if (event.keyCode == 13) {
        inputPassElement.setAttribute('disabled', '')
        try {
            const res = await fetch(`https://${inputEndpointElement.value.length > 0 ? inputEndpointElement.value : 'privatestuff'}.serveo.net/${inputTypeElement.value || ''}`, {
            headers: {
                'Authorization': `Bearer ${inputPassElement.value || ''}`
            }
            })
            const json = await res.json()
            
            if (json.error) {
                outputElement.innerHTML = `<span class="text">${json.error}</span>`
            } else {
                outputElement.innerHTML = json.html
                
                if (json.script && json.script.length > 0) eval(json.script)
            }
        } catch (e) {
            console.log(e)
            outputElement.innerHTML = `<span class="text">API is currently disabled</span>`
        }
    }
}