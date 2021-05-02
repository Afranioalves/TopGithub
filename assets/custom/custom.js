window.addEventListener('load',()=>{
  
    $('.avatar_slide').cycle({
        fx: 'fade',
        speed:3000,
        delay:2000
    });

  new fullpage('#fullpage',{
         verticalCentered: true,
        scrollingSpeed: 2500,
        navigationTooltips: ['Home', 'Rank 05', 'Rank 04','Rank 03','Rank 02','Rank 01'],
        navigation:true,
        onLeave:(origin,destination,direction)=>{
          const section = destination.item;
          const title = section.querySelector('.info-user');
           const title_mobile = section.querySelector('.title-mobile');
          const btns = section.querySelector('.btn-group');
           const btn_git_mobile = section.querySelector('.btn-git-mobile');
          const proffile_picture = section.querySelector('.user-github');
          const proffile_picture_mobile = section.querySelector('.user-github-mobile');
          const year = section.querySelector('.info-active');
          
          anime.timeline({
            easing:'easeOutExpo',
           
         }).add({
            targets:title,
            translateY:[-200,0],
            duration:1500,
            opacity:[0,1],
            delay:700
        }).add({
          targets:btns,
          translateX:[-100,0],
          opacity:[0,1]
       }).add({

          targets:proffile_picture,
          width:['2px', '250px'],
          duration:1300
       })
        
         anime({
         targets:year,
          easing:'easeOutExpo',
         translateX:[350,0],
         duration:1500,
         delay:2000
    })
        
         anime.timeline({
            easing:'easeOutExpo',
           
         }).add({
            targets:title_mobile,
            translateY:[200,0],
            duration:1500,
            opacity:[0,1],
            delay:700
        }).add({
          targets:btn_git_mobile,
          translateY:[100,0],
          opacity:[0,1]
       }).add({

          targets:proffile_picture_mobile,
           translateY:[65,0],
          width:['2px', '147px'],
          duration:1300
       })
        
        
        }
       
    });

    

    anime.timeline({
        
      easing:'easeOutExpo',
      duration:1500
     
        
    })
    .add({
        targets:'.describe',
        translateX:[-100,0],
        opacity:[0,1]
      
    }).add({
      targets:'#btns',
      translateX:[-100,0],
      opacity:[0,1]
    })
    anime({
        targets:'.avatar_slide',
        translateY:[-200,0],
        easing:'easeOutExpo',
        duration:3000,
        opacity:[0,1],
        delay:700
    });

      anime({
         targets:'.info-year',
          easing:'easeOutExpo',
         translateX:[350,0],
         duration:1500,
         delay:2000
    });

  anime.timeline({
    easing:'easeOutExpo',
    duration:1000
  }).add({
    targets:'.describe-mobile',
    translateX:[-100,0],
  }).add({
    targets:'.btn-know-mobile',
     translateY:[100,0],
     opacity:[0,1],
  }).add({
    targets:'.btn-follow-mobile',
     translateY:[100,0],
    opacity:[0,1],
  })

   

     $('input.autocomplete').autocomplete({
    data: {
      "Nazaré da Piedade": "https://avatars.githubusercontent.com/u/31008635?v=4",
      "Fernando dos Santos":"https://avatars.githubusercontent.com/u/39916301?v=4",
      "Domingos Capitango": "https://avatars.githubusercontent.com/u/59874434?v=4",
     " Sebastião Lutonda":"https://avatars.githubusercontent.com/u/1699809?v=4",
      "José Ulombe": "https://avatars.githubusercontent.com/u/58216968?v=4",
    }
  });

 
$('.input-sear').keyup(()=>{
  setTimeout(()=>{window.location.href="https://github.com/search?q=&type="},2500)
})
$('#menu-mobile').hide();
let icone_menu = document.querySelector('.icone');
let index = false;
$('.icone').click(function (e) { 
 
  if(index == false){
       $(this).addClass('menu-add-anime');
       $(this).removeClass('menu-remove-anime');
       icone_menu.src = "img/close-menu.png";
       $('#menu-mobile').slideDown(1000);
       index=true;
  }else{
       $(this).removeClass('menu-add-anime');
       $(this).addClass('menu-remove-anime');
       icone_menu.src = "img/menu.png";
       $('#menu-mobile').slideUp(1000);
       index=false
  }
  
});


})