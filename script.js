const keypad = document.querySelector('#keypad')
const display = document.querySelector('#display')

function displayOutput(value) {
    display.innerText = formatOutput(value)
}

function formatOutput(value) {
    return Number(value).toLocaleString('en')
}

displayOutput(910085616)

keypad.addEventListener('click', e => {
    console.log(e.target.innerText)
    // clear the screen
    if (e.target.innerText === 'C') {
        clearScr(e)
    }
})

function clearScr(e) {
    display.innerHTML = '0'
}