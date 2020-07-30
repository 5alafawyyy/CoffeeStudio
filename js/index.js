/*glabal $, alert, console*/

$(function(){
    
    'use strict';
    
    
    // Display Nicescroll Plugin
    
    $('html').niceScroll({
        cursorcolor: '#F7600E',
        cursorborder: '1px solid #F7600E',
        cursorborderradius: '5px',
        scrollspeed: '60',
        spacebarenabled: 'true',
        smoothscroll: 'true',
        cursorwidth:'5px'
    });
    
    // Header Height be the same Window Height
    
    $('.header').height($(window).height());
    
    // Scroll To Features
    
    $('.header .overlay .arrow i').click(function(){
        
        $('html, body').animate({
            scrollTop: $('.features').offset().top
            
        },1000);
        
    });
    
    
    
    
    /* Testmonial With Bx Slider
    
    
	// Trigger The Bx Slider:
    $('.bxslider') .bxSlider({
        
        pager: false
        
    });
    */
    
    
    // Check Testmonial 
    
    var clickRight = $('.testmonial .right'),
        clickLeft = $('.testmonial .left');
    
    function checkClient(){
        
        $('.client:first').hasClass('active') ? clickLeft.fadeOut() : clickLeft.fadeIn();
        
        $('.client:last').hasClass('active') ? clickRight.fadeOut() : clickRight.fadeIn();
    
    } 
    
    checkClient();
    
   
    $('.testmonial i').click(function(){
        
        if($(this).hasClass('right')){
            
            $('.testmonial .active').fadeOut(100, function(){
                
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                
                checkClient();
            });
        } else {
            
            $('.testmonial .active').fadeOut(100, function(){
                
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                
                checkClient();
            });
        }
    }) 
    
    // Adjust Our Team Button
    
    $('.hire').click(function(){
        
        $('html, body').animate({
            
            scrollTop: $('.our-team').offset().top
            
        },1000)
        
    });
    
    // Our Work
    
    $('.show-works').click(function(){
        
        $('html, body').animate({
            
            scrollTop: $('.our-work').offset().top
            
        },1000)
    });
    
    
    // Show Hidden Items in Projects of work
    
    $('.show-more').click(function(){
        
        $('.our-work .hidden').fadeIn(2000);
    })
    
    
 });