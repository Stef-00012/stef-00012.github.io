const form = document.getElementById('inputData')

const query = getQueryParams(window.location.href)

const orderParam = query.order
const authCodeParam = query.authCode
const cardHolderParam = query.cardHolder
const thanksParam = query.thanks
const userParam = query.user
const trackCountParam = query.trackCount
const periodParam = query.period

if (userParam) {
    form.setAttribute('disabled', '')
    
    form.innerText = 'Fetching...'

    let query = `?user=${userParam}`

    if (trackCountParam) query += `&trackCount=${trackCountParam}`
    if (periodParam) query += `&period=${periodParam}`
    if (cardHolderParam) query += `&cardHolder=${cardHolderParam}`
    if (authCodeParam) query += `&authCode=${authCodeParam}`
    if (thanksParam) query += `&thanks=${thanksParam}`
    if (orderParam) query += `&order=${orderParam}`

    fetch(`https://api.stefdp.is-a.dev/last.fm/receiptData/${query}`).then(res => res.json()).then(data => {
        document.body.style.maxWidth = '558px'

        const receipt = document.getElementById('receipt')
        const inputs = document.getElementById('inputs')

        const receiptTitle = document.getElementById('receiptTitle')
        const tracks = document.getElementById('tracks')
        const totalTracks = document.getElementById('totalTracks')
        const timePeriod = document.getElementById('timePeriod')
        const orderFor = document.getElementById('orderFor')
        const dateGenerated = document.getElementById('dateGenerated')
        const subtotalTime = document.getElementById('subtotalTime')
        const subtotalAmount = document.getElementById('subtotalAmount')
        const totalTime = document.getElementById('totalTime')
        const totalAmount = document.getElementById('totalAmount')
        const cardYear = document.getElementById('cardYear')
        const authCode = document.getElementById('authCode')
        const cardHolder = document.getElementById('cardHolder')
        const thanks = document.getElementById('thanks')

        tracks.innerHTML = data.tracksData.map(track => `<tr><td class="playCount">${track.playCount}</td><td><a href="${track.artist.url}" class="song-url">${track.artist.name}</a> - <a href="${track.url}" class="song-url">${track.name}</a></td><td class="align-right">${track.duration}</td><td class="align-right">${track.totalDuration}</td></tr>`).join('')
        receiptTitle.innerText = `${data.cardHolder}'s RECEIPT`
        totalTracks.innerText = `TOTAL TRACKS: ${data.tracks}`
        timePeriod.innerText = data.period
        orderFor.innerText = `ORDER #${data.orderNumber} FOR ${data.lastFMUsername}`
        dateGenerated.innerText = data.dateGenerated
        subtotalTime.innerText = data.subTotal.duration
        subtotalAmount.innerText = data.subTotal.amount
        totalTime.innerText = data.total.duration
        totalAmount.innerText = data.total.amount
        cardYear.innerText = `CARD #: **** **** **** ${data.year}`
        authCode.innerText = `AUTH CODE: ${decodeURIComponent(data.authCode)}`
        cardHolder.innerText = `CARDHOLDER: ${data.cardHolder}`
        thanks.innerText = data.thanks

        inputs.style.display = 'none'
        receipt.style.display = 'block'
    }).catch(e => {
        console.log(e)
        form.innerText = 'Something went wrong'
    })
}

function validate(type, input) {
    switch(type) {
        case 'username': {
            const usernameRegex = /^[a-zA-Z][a-zA-Z0-9-_]{1,14}$/

            if (!usernameRegex.test(input.value)) {
                input.setCustomValidity("The username should be between 2 and 15 characters, begin with a letter and contain only letters, number, '-' or '_'.")
            } else {
                input.setCustomValidity('')
            }

            break;
        }

        case 'order': {
            const orderRegex = /^([0-9]{4})$/

            if (input.value && !orderRegex.test(input.value)) {
                input.setCustomValidity("The order number must only have 4 numbers")
            } else {
                input.setCustomValidity("")
            }
            
            break;
        }

        case 'authCode': {
            const orderRegex = /^([0-9]{6})$/

            if (input.value && !orderRegex.test(input.value)) {
                input.setCustomValidity("The auth code must only have 4 numbers")
            } else {
                input.setCustomValidity("")
            }

            break;
        }
    }
}