let showBtn = document.getElementById('iid');
let modal = document.getElementById('modal');
let closeBtn = document.getElementById('closeBtn');
let overlay = document.getElementById('overlay');

let addHidden = ()=>{
  modal.classList.add('hidden');
  overlay.classList.add('hidden')
}


showBtn.addEventListener('click',()=>{
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

closeBtn.addEventListener('click',()=>{
 addHidden()
})

overlay.addEventListener('click',addHidden)

document.addEventListener('keydown',(e)=>{
  if(e.key == 'Escape'){
    addHidden()
  }
})