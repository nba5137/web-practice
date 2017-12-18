/** 
 * ===================================================================
 * Song. Main js
 * 12/10/2017
 * 
 * ===================================================================
 * 1. Scroll to top of the page
 * ------------------------------------------------------------------- 
 */ 

/* 1. Scroll to top of the page */
function Func_top() {
    $('html, body').animate({scrollTop:0}, 1500);
}

function Func_me() {
    $('html, body').animate({
        scrollTop: $("#me").offset().top
    }, 1500);
}

