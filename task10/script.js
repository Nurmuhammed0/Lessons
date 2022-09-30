document.addEventListener('keyup',(e)=>{
  // console.log('Code',e.code);
  // console.log('Key',e.key);
  // console.log('keyCode',e.keyCode);
  console.log(e);

  if(e.key == 'm' && e.ctrlKey)console.log('salam');
  
})