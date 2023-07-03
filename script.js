$(document).ready(function() {
    
  /*print seat number--------------*/
      
      /*---for bus1----*/
      var b1=0;
      $(".bus1 .seat").each(function() { 
          b1++;
         $(this).append("<em class='seat_num'>"+b1+"</em>");
      }); 
      
      /*---for bus2----*/
      var b2=0;
      $(".bus2 .seat").each(function() { 
          b2++;
         $(this).append("<em class='seat_num'>"+b2+"</em>");
      });
  /*end print seat number-----------*/
      
      
      
      
  /*open popup------------------*/
      var chk_name=0; //create input name
      
      $('.seat').click(function(e){
          /*show-hide popup*/
           $('.seat .pop_con').removeClass('show');
          
          if( $(this).hasClass('add_popup') ){
              /*e.preventDefault();*/
              /*show-hide popup*/
              $(this).children('.pop_con').addClass('show');
          }
          /*end if---------*/
          else {
              /*add popup structure*/
              $(this).append("<div class='pop_con'>"+
                                  "<label class='bus-check male'>"+
                                      "<input type='checkbox' name='chk"+chk_name+"'>"+
                                      "<span></span>"+
                                  "</label>"+
                                  "<label class='bus-check female'>"+
                                      "<input type='checkbox' name='chk"+chk_name+"'>"+
                                      "<span></span>"+
                                  "</label>"+
                                  "<span class='btm_arrow'></span>"+
                             "</div>");
              
              /*show-hide popup*/
              $(this).addClass('add_popup');
              $(this).children('.pop_con').addClass('show');
              
              chk_name++;//create input name -increment
          }
          /*end else---------*/
      });
  /*end clicked item--------------------*/
      
  });