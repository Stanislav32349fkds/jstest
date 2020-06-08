$(document).ready(function(){
        $(".navbar a").click(function()
        {
        //    $("html,body").scrollTop($(myElement).offset().top)
        //Плавное перемещени
            $("html, body").animate(
                {scrollTop($(myElement).offset().top)},10000    
        );
    })
})
