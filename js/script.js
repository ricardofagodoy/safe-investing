console.log(`Safe Investing Prototype (${new Date()})`)

function move(page) {
    window.location.href = page + '.html'
}

function calculate_vh() {
    // First we get the viewport height and we multiple it 
    // by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01

    // Then we set the value in the --vh custom property to 
    // the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    console.log(`For this screen, 1vh is ${vh}px`)
}

calculate_vh()

// Recalculate viewport height on resize
window.addEventListener('resize', calculate_vh)