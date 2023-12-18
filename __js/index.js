startLoading()

const spoilerDesktop = document.getElementById('spoilerDesktop')
const codeBlockDesktop = document.getElementById('codeBlockDesktop')
const socialsContainer = document.getElementById('socials')


fetch('/__data/aboutMeCodeBlock.txt')
    .then(res => res.text())
    .then(text => {
        codeBlockDesktop.innerHTML = text

        hljs.highlightAll();
    })
    .then(() => {
        fetch('/__data/codeBlockPlaceholders.json')
            .then(res => res.json())
            .then(json => {
                codeBlockDesktop.innerHTML = replacePlaceholders(codeBlockDesktop.innerHTML, json)
            })
    })


spoilerDesktop.onclick = revealSpoiler(spoilerDesktop)


jQuery(handleJQuery)


function replacePlaceholders(html, json) {
    return html.replace(/\[\[([^\]]+)\]\]/g, (match, key) => {
        if (json?.[key]) return json[key]
        
        return match
    })
}

function revealSpoiler(element) {
    return () => {
        element.classList.add('opened')
        element.style.backgroundColor = "rgba(54, 47, 46, 0.65)";
        element.style.color = "rgba(255, 255, 255, 0.85)";
    }
}

function handleJQuery() {
    for (const social of socialsContainer.children) {
        new jBox('Mouse', {
            attach: `#${social.children[0].id}`,
            position: {
                x: 'right',
                y: 'top'
            },
            content: social.dataset.tooltip ?? 'Missing tooltip'
        })
    }
}


const collapseElementList = document.querySelectorAll('.collapse')

for (const collapse of collapseElementList) {
    collapse.addEventListener('hidden.bs.collapse', (event) => {
        event.target.previousElementSibling.style.borderBottom = '4px solid #a2a3a5'
        event.target.previousElementSibling.style.borderBottomLeftRadius = '25px'
        event.target.previousElementSibling.style.borderBottomRightRadius = '25px'
    })

    collapse.addEventListener('hide.bs.collapse', (event) => {
        event.target.previousElementSibling.classList.remove('active')
    })

    collapse.addEventListener('show.bs.collapse', (event) => {
        event.target.previousElementSibling.classList.add('active')
        event.target.previousElementSibling.style.borderBottomLeftRadius = '0px'
        event.target.previousElementSibling.style.borderBottomRightRadius = '0px'
        event.target.previousElementSibling.style.borderBottom = '0px'
    })
}