/* JS code requested by index.html file; JavaScript content to HTML code */

/* FILL INDICATORS CODE */
document.getElementById('name').addEventListener('input', function(event) {
    let inside = event.target

    if(inside.value != '') {
        document.getElementById('name').classList.remove('empty')
        document.getElementById('name').classList.add('entered')
    } else {
        document.getElementById('name').classList.remove('entered')
        document.getElementById('name').classList.add('empty')
    }
})

document.getElementById('email').addEventListener('input', function(event) {
    let inside = event.target

    if(inside.value != '') {
        document.getElementById('email').classList.remove('empty')
        document.getElementById('email').classList.add('entered')
    } else {
        document.getElementById('email').classList.remove('entered')
        document.getElementById('email').classList.add('empty')
    }
})

document.getElementById('address').addEventListener('input', function(event) {
    let inside = event.target

    if(inside.value != '') {
        document.getElementById('address').classList.remove('empty')
        document.getElementById('address').classList.add('entered')
    } else {
        document.getElementById('address').classList.remove('entered')
        document.getElementById('address').classList.add('empty')
    }
})

document.getElementById('message').addEventListener('input', function(event) {
    let inside = event.target

    if(inside.value != '') {
        document.getElementById('message').classList.remove('empty')
        document.getElementById('message').classList.add('entered')
    } else {
        document.getElementById('message').classList.remove('entered')
        document.getElementById('message').classList.add('empty')
    }
})

document.getElementById('clearForm').addEventListener('click', clearForm)

function clearForm() {
    changeBorderLeft()
    
    document.querySelectorAll('.errorMessage').forEach(element => element.innerHTML = "")
    document.querySelectorAll('.errorMessage').forEach(element => element.classList.remove('errorMessage'))
    document.querySelectorAll('.errorBorder').forEach(element => element.classList.remove('errorBorder'))

    document.getElementById('contact').style.display = "block"
    document.getElementById('success').style.display = "none"

    labelDarkColor()
}

function changeBorderLeft() {
    let resetInput = document.querySelectorAll('input')
    for(let i = 0; i < resetInput.length; i++) {
        resetInput[i].classList.remove('entered')
        resetInput[i].classList.add('empty')
    }

    document.getElementById('message').classList.remove('entered')
    document.getElementById('message').classList.add('empty')
}

let labelColor = document.querySelectorAll('label')

function labelLightColor() {
    for(let i = 0; i < labelColor.length; i++) {
        labelColor[i].style.color = "#ff8800"
    }
}

function labelDarkColor() {
    for(let i = 0; i < labelColor.length; i++) {
        labelColor[i].style.color = "#333333"
    }
}
