function getRandomChines(length) {
  return new Promise((resolve) => {
    let letters = Date.now().toString().slice(-5);
    let randomChines = [];
    for(let i = 0; i < length; i++) {
      letters += 1;
      randomChines.push(String.fromCharCode(letters));
    }
    setTimeout(() => resolve(randomChines.join("")), length * 50)
  })
}
const btn =  document.querySelector(".button");
btn.addEventListener('click', () =>{
  getRandomChines(4).then((lett) =>{
    document.querySelector(".randomChines").innerHTML = lett;
  })
})

