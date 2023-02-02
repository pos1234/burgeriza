/* FOR MENU LINKS AND FOR MENU CONTENTS */
let display_food = [$('#breakfast'),$('#burger'),$('#pizza'),$('#fast_dish'),$('#drink')]
let food_links = [$('#menu_link'),$('#menu_link2'),$('#menu_link3'),$('#menu_link4'),$('#menu_link5')]
$(document).ready(()=>{
    $('#menu_link',()=>{
    for(let i=0;i<display_food.length;i++){
    display_food[i].css('display','none');
    }
    for(let i=0;i<food_links.length;i++){
        food_links[i].css('color','rgb(39,37,31)');
    }
  $('#menu_link').css('color','rgb(218,41,28)');
  $('#breakfast').css('display','flex');
})})

$('#menu_link').click(()=>{
    for(let i=0;i<display_food.length;i++){
    display_food[i].css('display','none');
    }
    for(let i=0;i<food_links.length;i++){
        food_links[i].css('color','rgb(39,37,31)');
    }
  $('#menu_link').css('color','rgb(218,41,28)');
  $('#breakfast').css('display','flex');
})

$('#menu_link2').click(()=>{
    for(let i=0;i<display_food.length;i++){
    display_food[i].css('display','none');
    }
    for(let i=0;i<food_links.length;i++){
        food_links[i].css('color','rgb(39,37,31)');
    }
  $('#menu_link2').css('color','rgb(218,41,28)');
  $('#burger').css('display','flex');
})

$('#menu_link3').click(()=>{
    for(let i=0;i<display_food.length;i++){
    display_food[i].css('display','none');
    }
    for(let i=0;i<food_links.length;i++){
        food_links[i].css('color','rgb(39,37,31)');
    }
  $('#menu_link3').css('color','rgb(218,41,28)');
  $('#pizza').css('display','flex');
})
$('#menu_link4').click(()=>{
    for(let i=0;i<display_food.length;i++){
    display_food[i].css('display','none');
    }
    for(let i=0;i<food_links.length;i++){
        food_links[i].css('color','rgb(39,37,31)');
    }
  $('#menu_link4').css('color','rgb(218,41,28)');
  $('#fast_dish').css('display','flex');
})

$('#menu_link5').click(()=>{
    for(let i=0;i<display_food.length;i++){
    display_food[i].css('display','none');
    }
    for(let i=0;i<food_links.length;i++){
        food_links[i].css('color','rgb(39,37,31)');
    }
  $('#menu_link5').css('color','rgb(218,41,28)');
  $('#drink').css('display','flex');
})

/* FOR ADMIN PANEL NAVIGATION AND CONTENT HIDE AND DISPLAY */

let admin_content = [$('#admin_add'),$('#admin_view'),$('#admin_update'),$('#admin_delete')];
let admin_links =[$('#add'),$('#view'),$('#update'),$('#delete')];

$(document).ready(()=>{
    $('#add',()=>{
    for(let i=0;i<admin_content.length;i++){
        admin_content[i].css('display','none');
    }
    for(let i=0;i<admin_links.length; i++){
        admin_links[i].css('color','white');
    }
    $('#admin_add').css('display','flex');
    $('#add').css({'backgroundColor':'rgb(255,199,44)','color':'rgb(39,37,31)'});
})})
for(let i=0;i<admin_content.length;i++){
console.log(admin_content[i]);
}
admin_links[0].click(()=>{
    for(let i=0;i<admin_content.length;i++){
        admin_content[i].css('display','none');
    }
    for(let i=0;i<admin_links.length;i++){
        admin_links[i].css({'backgroundColor':'rgb(39,37,31)','color':'rgb(255,255,255)'});
    }
    admin_content[0].css('display','flex');
    admin_links[0].css({'backgroundColor':'rgb(255,199,44)','color':'rgb(39,37,31)'});
})

admin_links[1].click(()=>{
    for(let i=0;i<admin_content.length; i++){
        admin_content[i].css('display','none');
    }
    for(let i=0;i<admin_links.length; i++){
        admin_links[i].css({'backgroundColor':'rgb(39,37,31)','color':'rgb(255,255,255)'});
    }
    admin_content[1].css('display','flex');
    admin_links[1].css({'backgroundColor':'rgb(255,199,44)','color':'rgb(39,37,31)'});
})

admin_links[2].click(()=>{
    for(let i=0;i<admin_content.length; i++){
        admin_content[i].css('display','none');
    }
    for(let i=0;i<admin_links.length; i++){
        admin_links[i].css({'backgroundColor':'rgb(39,37,31)','color':'rgb(255,255,255)'});
    }
    admin_content[2].css('display','flex');
    admin_links[2].css({'backgroundColor':'rgb(255,199,44)','color':'rgb(39,37,31)'});
})
admin_links[3].click(()=>{
    for(let i=0;i<admin_content.length; i++){
        admin_content[i].css('display','none');
    }
    for(let i=0;i<admin_links.length; i++){
        admin_links[i].css({'backgroundColor':'rgb(39,37,31)','color':'rgb(255,255,255)'});
    }
    admin_content[3].css('display','flex');
    admin_links[3].css({'backgroundColor':'rgb(255,199,44)','color':'rgb(39,37,31)'});
})

$('#navbar-toggler').click(()=>{
    $('#mobile-icon').toggleClass('fa-xmark');
})

/* FOR NAVIGATION AND TOP BUTTON */
let mybutton = $('#backtop');
let navbar = $('#navbar');
window.onscroll = ()=>{
    scrollback();
};
let scrollback = ()=>{
if(document.body.scrollTop>740||document.documentElement.scrollTop>740){
    mybutton.css('display','block');
    navbar.removeClass('sticky-top');
}else{
    mybutton.css('display','none');
    navbar.addClass('sticky-top',5000,'swing');
}
}
mybutton.click(()=>{
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
});