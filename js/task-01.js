const list = document.querySelector('#categories')
// console.dir(list);
const numberOfCategories = list.children.length
console.log('Number of categories:', numberOfCategories);

const categoryAndElements = document.querySelectorAll('.item')
// console.dir(categoryAndElements);
categoryAndElements.forEach((element) => {
    console.log('Category :', element.firstElementChild.textContent);
    console.log('Elements :', element.lastElementChild.children.length);
})

