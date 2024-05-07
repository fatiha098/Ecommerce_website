var suggestions = document.querySelectorAll(".suggest")
var main_img = document.querySelector(".main")

console.log(suggestions)
suggestions.forEach(element => {
  console.log(suggestions.indexOf(element))
});
var i = 1;
console.log(main_img)
suggestions.forEach(sug => {

  sug.addEventListener("click", function(){
  main_img.src = `../images/products/f${suggestions.indexOf(sug)}.jpg`
  i++;

  console.log("hh")

})
})
