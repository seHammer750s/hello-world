const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for(i=0;i<5;i++){
const newImage = document.createElement('img');
newImage.setAttribute('src','images/pic'+(i+1)+'.jpg');
thumbBar.appendChild(newImage);
}
thumbBar.onclick = function(e){
    displayedImage.setAttribute('src',e.target.getAttribute('src'));
}
/* Wiring up the Darken/Lighten button */
btn.onclick = function(){
    if(btn.getAttribute('class')==='dark'){
    btn.setAttribute('class','light');
    btn.textContent = 'lighten';
    overlay.setAttribute('style','background-color:rgba(0,0,0,0)');
    }else{
    btn.setAttribute('class','dark');
    btn.textContent = 'darken';
    overlay.setAttribute('style','background-color:rgba(0,0,0,0.8)');
    }
}

/* draft

newImage.setAttribute('src','images/pic4.jpg');
thumbBar.appendChild(newImage);

  background-color: rgba(0,0,0,0);
  
  overlay.onclick = function(){
(
overlay.style.backgroundColor = 'rgba(0,0,0,0)'?
overlay.style.backgroundColor = 'rgba(0,0,0,0.8)':
overlay.style.backgroundColor = 'rgba(0,0,0,0)';
)}

btn.onclick  = function(){
    if(overlay.style.backgroundColor === 'rgba(0,0,0,0)'){
    overlay.style.backgroundColor = 'rgba(0,0,0,0.8)';
    }else{
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}
  overlay.setAttribute('style','background-color:rgba(0,0,0,0.8)');

const rgba = overlay.getAttribute('style','background-color');


END OF DRAFT*/
