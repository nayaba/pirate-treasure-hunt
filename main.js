/*-------- constants ---------*/


/*----- state variables ------*/


/*----- cached elements  -----*/
const checkBtn = document.getElementById('check-btn')
const glyph01 = document.getElementById('glyph01')
const glyph01Options = document.querySelectorAll('.glyph01')
console.log(glyph01Options)

/*----- event listeners ------*/
checkBtn.addEventListener('click', checkGuess)
glyph01Options.forEach(option => {
    option.addEventListener('click', () => updateGlyph(option))
})

/*-------- functions ---------*/
function checkGuess() {
    console.log("Check guess function")
}

function updateGlyph(option) {
    glyph01.innerHTML = option.innerHTML
}
