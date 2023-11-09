//Navbar Change Color on Scroll
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 700){
        $("nav").addClass("dark-nav");
    }else{
        $("nav").removeClass("dark-nav");
    }
});

function notWorking(){
    alert("Função não disponível no momento");
}