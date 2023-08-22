// Overlay Div 
let site_overlay = document.querySelector('.site-overlay');

// ================= Product Category ===================
// Filter Open/Close
let filter_open_btn = document.querySelector('.category-product .right-section .filter-open');
let filter_close_btn = document.querySelector('.category-product .left-section .filter-close');
let filter_section = document.querySelector('.category-product .left-section');

if(filter_open_btn && filter_close_btn && filter_section){
    filter_open_btn.addEventListener('click',function(){
        siteOverlay();
        site_overlay.classList.add('show');
        filter_section.classList.add('show');
    });
    filter_close_btn.addEventListener('click',function(){
        site_overlay.classList.remove('show');
        filter_section.classList.remove('show');
    });
    // let link_item = document.querySelectorAll("aside nav .navbar-nav li a.link-item");
    // for(let i = 0; i < link_item.length; i++){
    //     link_item[i].addEventListener('click',function(){
    //         aside.classList.remove('show');
    //         site_overlay.classList.remove('show');
    //     });
    // }
}



// ================= Product Details ===================
let share_btn = document.querySelector('.pdt-details .details .shares .social-share .share-btn');
let share_div = document.querySelector('.pdt-details .details .shares .social-share .share');
if(share_btn && share_div){
    share_btn.addEventListener('click',function(){
        share_div.classList.toggle('show');
    });
    window.addEventListener('mouseup',function(event){
        if(event.target != share_div && event.target.parentNode != share_div){
            share_div.classList.remove('show');
        }
    }); 
}


// ================= User Panel ===================
let user_panel_open_btn = document.querySelector('.mobile-tools .user-panel-open-btn');
let user_panel_close_btn = document.querySelector('.head .user-panel-close-btn');
let user_panel_aside = document.querySelector('.user-panel .user-aside');
if(user_panel_open_btn && user_panel_close_btn && user_panel_aside){
    user_panel_open_btn.addEventListener('click',function(){
        mobileIconText(this);
        siteOverlay();
        site_overlay.classList.add('show');
        user_panel_aside.classList.add('show');
    });
    user_panel_close_btn.addEventListener('click',function(){
        site_overlay.classList.remove('show');
        user_panel_aside.classList.remove('show');
    });
}

// ================= Categories Slide ===================
let categories_slide_open_btn = document.querySelector('.mobile-tools .categories-slide-open-btn');
let categories_slide_close_btn = document.querySelector('.heading .categories-slide-close-btn');
let categories_aside = document.querySelector('header .navigation .categories');
if(categories_slide_open_btn && categories_slide_close_btn && categories_aside){
    categories_slide_open_btn.addEventListener('click',function(){
        mobileIconText(this);
        siteOverlay();
        site_overlay.classList.add('show');
        categories_aside.classList.add('show');
    });
    categories_slide_close_btn.addEventListener('click',function(){
        site_overlay.classList.remove('show');
        categories_aside.classList.remove('show');
    });
}

// Mobile Icon Text Active/Remove
function mobileIconText(_this){
    // All active item link remove
    let mobile_tools_icon = document.querySelectorAll(".mobile-tools .items .item .link .icon");
    let mobile_tools_txt = document.querySelectorAll(".mobile-tools .items .item .link .txt");
    for (let i = 0; i < mobile_tools_icon.length; i++) {
        mobile_tools_icon[i].classList.remove("active");
        mobile_tools_txt[i].classList.remove("active");
    }

    _this.querySelector('.icon').classList.add('active')
    _this.querySelector('.txt').classList.add('active')
}



// ================= Site Overlay ===================
// Overlay Click All Close
site_overlay.addEventListener('click',function(){
    this.classList.remove("show");
    siteOverlay();
});

function siteOverlay(){
    if(filter_section){
        filter_section.classList.remove("show");
    }
    if(user_panel_aside){
        user_panel_aside.classList.remove("show");
    }
    if(categories_aside){
        categories_aside.classList.remove("show");
    }
}









// let acc = document.querySelectorAll(".categories .menus .item.tree .link");
// let i;
// // acc[0].classList.add("active");
// // acc[0].nextElementSibling.style.display = "block";
// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     } 
//   });
// }


// let menu_item = document.querySelectorAll(".categories .menus .item .text .arrow");
let menu_item = document.querySelectorAll(".categories .menus .item .text .link");
let mega_menu_title = document.querySelectorAll(".categories .menus .item.tree .mega-menu .list-section .title");
for (let i = 0; i < menu_item.length; i++) {
    menu_item[i].addEventListener("click", function () {
        // All active item link remove
        // let menu_item_link = document.querySelectorAll(".categories .menus .item .text .arrow");
        let menu_item_link = document.querySelectorAll(".categories .menus .item .text .link");
        for (let l = 0; l < menu_item_link.length; l++) {
            menu_item_link[l].classList.remove("active");
        }

        // This item link active
        // this.closest('.text').classList.add("active");
        this.classList.add("active");

        // All mega menu(sub menu) height remove
        let mega_menu = document.querySelectorAll(".categories .menus .item.tree .mega-menu");
        for (let k = 0; k < mega_menu.length; k++) {
            mega_menu[k].style.maxHeight = null;
        }


        // Mega menu(sub menu) height active
        let list_section = this.closest(".item").querySelector(".mega-menu");
        if(list_section){
            list_section.classList.add("show");
            list_section.style.maxHeight = list_section.scrollHeight + "px";
        }
        


        // ================
        // (Main Megu Click) All sub menu item active remove
         let sub_sub_item = document.querySelectorAll(".categories .menus .item.tree .mega-menu .list-section .title");
        for (let p = 0; p < sub_sub_item.length; p++) {
            sub_sub_item[p].classList.remove("active");
        }

        // All sub sub menu height remove
        let sub_sub_lists = document.querySelectorAll(".categories .menus .item.tree .mega-menu .list-section .sub-lists");
        for (let q = 0; q < sub_sub_lists.length; q++) {
            sub_sub_lists[q].style.maxHeight = null;
        }
    });
} 

// SubMenu
for (let j = 0; j < mega_menu_title.length; j++) {
    mega_menu_title[j].addEventListener("click", function () {
        // All sub sub menu item active remove
        let item_active_remove = document.querySelectorAll(".categories .menus .item.tree .mega-menu .list-section .title");
        for (let p = 0; p < item_active_remove.length; p++) {
            item_active_remove[p].classList.remove("active");
        }

        // This sub sub menu item active
        this.classList.add("active");

        // // All sub sub menu height remove
        let sub_menu_height = document.querySelectorAll(".categories .menus .item.tree .mega-menu .list-section .sub-lists");
        console.log(sub_menu_height.length);
        for (let q = 0; q < sub_menu_height.length; q++) {
            sub_menu_height[q].style.maxHeight = null;
        }

        // Sub Sub menu height active
        let sub_lists = this.closest(".list-section").querySelector(".sub-lists");
        sub_lists.style.maxHeight = sub_lists.scrollHeight + "px";

        // Mega menu(sub menu) + sub sub menu height adding
        let list_section_add = this.closest(".item.tree").querySelector(".mega-menu");
        list_section_add.style.maxHeight = sub_lists.scrollHeight + list_section_add.scrollHeight + "px";
    });
}
