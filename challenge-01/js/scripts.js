$(document).ready(function () {

    $('*').animate(function(){
        
    })
    
    $("#change").click(function () { 
        $(".cards #price-month").slideToggle('slow');
        $(".cards #price-annual").slideToggle('slow');
     });
     
});