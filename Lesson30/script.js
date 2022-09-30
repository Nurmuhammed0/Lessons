let article = document.querySelector('article')
console.log(article.children);

Array.from(article.children).forEach((child)=>{
  child.classList.add('article-child')
});

const title = document.querySelector('h2')

console.log(title.parentElement); /atasy/
console.log(title.parentElement.parentElement); /chon atasy/
console.log(title.nextElementSibling); /inisi/
console.log(title.previousElementSibling);