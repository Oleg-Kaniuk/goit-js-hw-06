const input = document.querySelector('[data-length="6"]')
// console.dir(input);

const inputLength = (evt) => {
    if (evt.currentTarget.value.length === Number(input.dataset.length)) {
        input.classList.add('valid') 
        // input.classList.remove('invalid')
    } else {
        input.classList.add('invalid')
        // input.classList.remove('valid') 
    }
}

input.addEventListener('blur', inputLength)