$(document).ready(function() {    



      $(document).on('click','#food-roulette, #kwik-pix, #crypto, #realtalk' ,function(){
       
        if(!$(this).hasClass('clicked')){ 
       
        $('.clicked').removeClass('clicked');        
        $(this).addClass('clicked');  
        
        if($('.content-foodroulette, .content-kwikpix, .content-crypto, .content-realtalk').hasClass('on-screen')){
        $('.on-screen').animate({left: '-=100%'}, 500);
        $('.on-screen').removeClass('on-screen');
         if($(this).hasClass('clicked') || $('.content-foodroulette, .content-kwikpix, .content-crypto, .content-realtalk').hasClass('on-screen')){
         $('clicked').removeClass('clicked');}}   


        if($(this).is('#food-roulette')){     
          if($('.content-foodroulette').offset().left < 0){ 
            $('.content-foodroulette').addClass('on-screen');                               
            $('.on-screen').animate({left: '+=100%'}, 500);}
          }
        else if($(this).is('#kwik-pix')){      
          if($('.content-kwikpix').offset().left < 0){              
             $('.content-kwikpix').addClass('on-screen');                               
             $('.on-screen').animate({left: '+=100%'}, 500);}                          
          }
        else if($(this).is('#crypto')){      
          if($('.content-crypto').offset().left < 0){              
             $('.content-crypto').addClass('on-screen');                               
             $('.on-screen').animate({left: '+=100%'}, 500);}            
          }
        else if($(this).is('#realtalk')){   
          if($('.content-realtalk').offset().left < 0){                 
             $('.content-realtalk').addClass('on-screen');                                         
             $('.on-screen').animate({left: '+=100%'}, 500);}            
          } 
          }     


          
          
        
      });    

      $("#food-roulette, #kwik-pix, #crypto, #realtalk").hover(function() {
        if (!$(this).hasClass('clicked')) $(this).css('color', 'white');
      }, function() {
         $(this).css('color', 'black');
      });


});  
