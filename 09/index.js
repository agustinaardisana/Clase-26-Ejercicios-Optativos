const requiredInput = document.querySelectorAll('input[required]')

for (let field of requiredInput) {
    const validInput = document.querySelector('input[value]')

    validInput.onblur = () => {
        if (validInput.valid()) {
            field.classList.remove('hidden')
        }
    }
    
}