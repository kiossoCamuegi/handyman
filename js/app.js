function Navbar_toggle(){
    let btn = document.querySelectorAll('.toggle');
    let navbar = document.querySelector('.responsive-navbar');

    for(let i= 0; i < btn.length; i++){
    btn[i].addEventListener('click',function(){
        navbar.classList.toggle('show');
    })
    } 
}
Navbar_toggle();



function Tabs(){
    let tab_header = document.querySelector('.tab-header');
    let tab_body = document.querySelector('.tab-body');
    let tab_item  = tab_header.querySelectorAll('li');
    for(let i=0; i < tab_item.length; i++){
        tab_item[i].addEventListener('click', function(){
            tab_header.getElementsByClassName('active')[0].classList.remove('active');
            tab_item[i].classList.add('active');
            tab_body.getElementsByClassName('active')[0].classList.remove('active');
            tab_body.getElementsByClassName('box')[i].classList.add('active');

        })
    }
}
Tabs();








