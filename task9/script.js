let forms = document.querySelector('#forms')
// let int = document.querySelector('#int')
let di = document.querySelector('.di')
let regex = /^[a-zA-Z0-9]{6,12}$/;

forms.addEventListener('submit',(e)=>{
  e.preventDefault();

  let inputVal = forms.int.value;

  if(regex.test(inputVal)){
    di.textContent = 'Tuura'
  }else{
    di.textContent = 'Tuura emes'
  }
})

// live feedback

forms.int.addEventListener('keyup',(e)=>{
  if(regex.test(e.target.value)){
    forms.int.setAttribute('class','success')
  }else{
    forms.int.setAttribute('class','error')
  }
})