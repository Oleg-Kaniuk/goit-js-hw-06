const input = document.querySelector('#name-input')
// console.dir(input);
const output = document.querySelector('#name-output')
// console.dir(output);

const inputValue = (evt) => {
     output.textContent = input.value !== "" ? evt.currentTarget.value : 'Anonymous';
}

input.addEventListener('input', inputValue)

console.log(output.innerHTML);