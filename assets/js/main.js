// Overlay Div 
let site_overly = document.querySelector('.site-overly');

// ================= Product Category ===================
// Filter Open/Close
let filter_open_btn = document.querySelector('.category-product .right-section .filter-open');
let filter_close_btn = document.querySelector('.category-product .left-section .filter-close');
let filter_section = document.querySelector('.category-product .left-section');

if(filter_open_btn){
    filter_open_btn.addEventListener('click',function(){
        filter_section.classList.add('show');
        site_overly.classList.add('show');
    });
    filter_close_btn.addEventListener('click',function(){
        filter_section.classList.remove('show');
        site_overly.classList.remove('show');
    });
    // let link_item = document.querySelectorAll("aside nav .navbar-nav li a.link-item");
    // for(let i = 0; i < link_item.length; i++){
    //     link_item[i].addEventListener('click',function(){
    //         aside.classList.remove('show');
    //         site_overly.classList.remove('show');
    //     });
    // }
}



// ================= Product Details ===================
let share_btn = document.querySelector('.pdt-details .details .shares .social-share .share-btn');
let share_div = document.querySelector('.pdt-details .details .shares .social-share .share');
if(share_btn){
    share_btn.addEventListener('click',function(){
        share_div.classList.toggle('show');
    });
    window.addEventListener('mouseup',function(event){
        if(event.target != share_div && event.target.parentNode != share_div){
            share_div.classList.remove('show');
        }
    }); 
}






// ================= Site Overly ===================
// Overly Click All Close
site_overly.addEventListener('click',function(){
    this.classList.remove("show");
    filter_section.classList.remove("show");
});
