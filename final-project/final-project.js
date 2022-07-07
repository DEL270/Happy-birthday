function showImg() {
    x=document.getElementById("confetti_img")
    x.style.visibility="visible"
}

$(document).ready(function(){
    $('.togglebtn').click(function(){
        $('.myimgdivtoggle').toggle();
    });
});

