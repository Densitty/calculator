const keypad = document.querySelector('#keypad')
const display = document.querySelector('#display')

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