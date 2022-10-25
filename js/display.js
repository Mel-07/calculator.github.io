const dis = document.querySelector('#dis-target');
const btn = document.querySelectorAll('input');
const form = document.querySelector('form'); 


LoadEvent();


function LoadEvent(){
    form.addEventListener('click', onclick)

}
    
function onclick(e) {
    dis.textContent += e.target.value
    

    if(e.target.value ="del"){
    
    }

console.log(e.path)
}
function reset(e){

}