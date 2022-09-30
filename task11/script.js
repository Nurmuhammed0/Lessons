let insert = document.getElementById('insert')

window.addEventListener('keydown',(e)=>{

  insert.innerHTML = `
  <h1 class = 'num'>${e.keyCode}</h1>
  <div class="key">
  ${e.key == ' '? 'Space' : e.key}
  <small>event.key</small>
  </div>
  <div class="key">
  ${e.keyCode}
  <small>event.keyCode</small>
  </div>
  <div class="key">
  ${e.code}
  <small>event.Code</small>
  </div>
   
  `
  console.log(e);
})
