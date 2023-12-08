startLoading()

const spoilerDesktop = document.getElementById('spoilerDesktop')
const codeBlockDesktop = document.getElementById('codeBlockDesktop')


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
    new jBox('Mouse', {
        attach: '#tooltip-discord',
        position: {
            x: 'right',
            y: 'top'
        },
        content: '<b>Discord</b><br /><i>stef_dp</i> (Ex: <i>Stef#6705</i>)'
    })
    

    new jBox('Mouse', {
        attach: '#tooltip-twitch',
        position: {
            x: 'right',
            y: 'top'
        },
        content: '<b>Twitch</b><br /><i>Stef_DP</i>'
    })

    
    new jBox('Mouse', {
        attach: '#tooltip-instagram',
        position: {
            x: 'right',
            y: 'top'
        },
        content: '<b>Instagram</b><br /><i>stefanodelprete_</i>'
    })

    
    new jBox('Mouse', {
        attach: '#tooltip-github',
        position: {
            x: 'right',
            y: 'top'
        },
        content: '<b>Github</b><br /><i>Stef-00012</i>'
    })
    

    new jBox('Mouse', {
        attach: '#tooltip-telegram',
        position: {
            x: 'right',
            y: 'top'
        },
        content: '<b>Telegram</b><br /><i>Stef_DP</i>'
    })
    

    new jBox('Mouse', {
        attach: '#tooltip-youtube',
        position: {
            x: 'right',
            y: 'top'
        },
        content: '<b>Youtube</b><br /><i>Stefano Del Prete</i>'
    })

    
    new jBox('Mouse', {
        attach: '#tooltip-twitter',
        position: {
            x: 'right',
            y: 'top'
        },
        content: '<b>X (Twitter)</b><br /><i>Stef_Del_Prete</i>'
    })

    
    new jBox('Mouse', {
        attach: '#tooltip-spotify',
        position: {
            x: 'right',
            y: 'top'
        },
        content: '<b>Spotify</b><br /><i>Stef</i>'
    })

    
    new jBox('Mouse', {
        attach: '#tooltip-tiktok',
        position: {
            x: 'right',
            y: 'top'
        },
        content: '<b>Tiktok</b><br /><i>stefano0122</i>'
    })

    
    new jBox('Mouse', {
        attach: '#tooltip-reddit',
        position: {
            x: 'right',
            y: 'top'
        },
        content: '<b>Reddit</b><br /><i>Stef_DP</i>'
    })
    
    
    new jBox('Mouse', {
        attach: '#tooltip-revolt',
        position: {
            x: 'right',
            y: 'top'
        },
        content: '<b>Revolt</b><br /><i>Stef</i>'
    })

    
    new jBox('Mouse', {
        attach: '#tooltip-mastodon',
        position: {
            x: 'right',
            y: 'top'
        },
        content: '<b>Mastodon</b><br /><i>Stef_DP</i>'
    })

    new jBox('Mouse', {
        attach: '#tooltip-steam',
        position: {
            x: 'right',
            'y': 'top'
        },
        content: '<b>Steam</b><br /><i>Stefano_Del_Prete</i>'
    })

    new jBox('Mouse', {
        attach: '#tooltip-mail',
        position: {
            x: 'right',
            'y': 'top'
        },
        content: '<b>Mail</b><br /><i>admin@stefdp.is-a.dev</i>'
    })
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