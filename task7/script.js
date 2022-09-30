let forms = document.querySelector('#forms')
let int = document.querySelector('#int')


forms.addEventListener('submit',(e)=>{
  e.preventDefault()
  console.log(int.value);
})