let names = 'Nurmuhammed';
let regex = /^[a-zA-Z0-9]{6,12}$/
// let result = regex.test(names)
let result = names.search(regex)
console.log(result);



