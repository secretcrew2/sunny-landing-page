function someFunction(){
    var menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
}

const menu = document.getElementById('menu');
menu.addEventListener('click', (event)=>{
    if(event.target === menu){
        menu.classList.toggle('hidden');
    }
})