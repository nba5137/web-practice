/** 
 * ===================================================================
 * Song. Main js
 * 12/10/2017
 * 
 * ===================================================================
 * 1. Scroll to top of the page.
 * 2. Obtain div height for paddings.
 * ------------------------------------------------------------------- 
 */ 

/* 1. Scroll to top of the page */
function Func_top() {
    $('html, body').animate({scrollTop:0}, 1500);
}

function Func_me() {
    $('html, body').animate({
        scrollTop: $("#me_div").offset().top
    }, 1500);
}

function Func_pur() {
    $('html, body').animate({
        scrollTop: $("#pur_div").offset().top
    }, 1500);
}

function Func_con() {
    $('html, body').animate({
        scrollTop: $("#con_div").offset().top
    }, 1500);
}

