let stars = document.getElementById('stars');
let folks = document.getElementById('folks');
let rainbow = document.getElementById('rainbow');
let rainbows = document.getElementById('rainbows');
let text = document.getElementById('hometext');
let btn = document.getElementById('btn');

window.addEventListener('scroll', function(){
  let value = window.scrollY;
  stars.style.left = value * 0.25 + 'px';
  folks.style.top = value * 1.05 + 'px';
})