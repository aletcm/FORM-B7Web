/* JS code requested by index.html file; JavaScript content to HTML code */

/* FORM VALIDATION CODE */
document.getElementById('formStruct').addEventListener('submit', function(event) {
    event.preventDefault()

    resetForm()

    let [name, email, address, message] = event.target

    let withError = false

    if(name.value.length < 10 || !name.value.includes(' ')) {
        let error = document.getElementById('name')
        errorMessage(error, 'O nome precisa estar completo.')
        withError = true
    }

    if(!email.value.includes(' ')) {
        let regex = /([a-zA-Z0-9_.-]{2,})@([a-zA-Z0-9_.-]{2,}).([a-zA-Z]{2,2})?.([a-zA-Z]{2,3}).([a-zA-Z]{2,2})?/
        if(!regex.test(email.value)) {
            let error = document.getElementById('email')
            errorMessage(error, '<i>E-mail</i> inválido!')
            withError = true
        }
    }

    if(address.value.length < 15 || !address.value.includes(' ')) {
        let error = document.getElementById('address')
        errorMessage(error, 'Endereço inválido!')
        withError = true
    }

    if(message.value.length < 15 || !message.value.includes(' ')) {
        let error = document.getElementById('message')
        errorMessage(error, 'Esta mensagem está muito curta, inclua mais detalhes.')
        withError = true
    }

    if(!withError) {
        document.getElementById('showLoading').classList.remove('show')

        setTimeout(() => {
            document.getElementById('showLoading').classList.add('show')
            formSent()
        }, 1000)
    }    
})

function errorMessage(errorElement, errorPhrase) {
    errorElement.classList.remove('empty')
    errorElement.classList.add('errorBorder')

    let newElement = document.createElement('div')
    newElement.classList.add('errorMessage')
    newElement.innerHTML = errorPhrase

    errorElement.parentElement.insertBefore(newElement, errorElement.ElementSibling)
}

function formSent() {
    document.getElementById('contact').style.display = "none"
    document.getElementById('success').style.display = "block"

    labelLightColor()
}

function resetForm() {
    document.querySelectorAll('.errorMessage').forEach(element => element.innerHTML = "")
    document.querySelectorAll('.errorMessage').forEach(element => element.classList.remove('errorMessage'))
    document.querySelectorAll('.errorBorder').forEach(element => element.classList.remove('errorBorder'))
}
