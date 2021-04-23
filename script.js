const menu_mobile=document.getElementById('menu_mobile');
const div_menu1open=document.getElementById('div-menu1-open');
const menu1=document.getElementById('menu1');
const menuCode=menu1.innerHTML;


menu_mobile.addEventListener('click', e => {
    if (menu_mobile.classList.contains('open')){
        menu_mobile.classList.remove('open');
        div_menu1open.innerHTML="";
        menu1.innerHTML=menuCode;
        div_menu1open.classList.remove('menu1-open');

    } else {
        menu_mobile.classList.add('open');
        
        div_menu1open.classList.add('menu1-open');
        div_menu1open.innerHTML=menuCode;
        menu1.innerHTML="";
    }
});


window.addEventListener('resize',e=>{
    if (window.innerWidth>=760){
        menu_mobile.classList.remove('open');
        div_menu1open.innerHTML="";
        menu1.innerHTML=menuCode;
        div_menu1open.classList.remove('menu1-open');
    }
});


