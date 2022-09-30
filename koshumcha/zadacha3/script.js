let forms = document.querySelector('#forms')
// let int = document.querySelector('#int')
let di = document.querySelector('.di')

forms.addEventListener('submit',(e)=>{
  e.preventDefault();
  let regex = /^[a-zA-Z0-9]{6,12}$/;
  let inputVal = forms.int.value;

  if(regex.test(inputVal)){
    di.textContent = 'Tuura'
  }else{
    di.textContent = 'Tuura emes'
  }
})