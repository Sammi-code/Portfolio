

//Sticky Menu Background

window.addEventListener('scroll', function(){
    if (window.scrollY > 150){
        document.queryselector('#navbar').style.opacity = 0.9;
    } else { 
        document.queryselector('#navbar').style.opacity = 1;
    }
    
})


//For Smooth Scrolling

$ ('#navbar a, hire-btn, works-tab').on('click', function(event){
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;
        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100

            },
            800
            
        );
    }
});

//Hiding the hamburger after i click on my link 

function hideMenu(){
    let menuOpen = document.querySelector('.toggler').checked;
  
    if(menuOpen = true){
      document.querySelector('.toggler').checked = false;
    }
    }
    window.addEventListener("scroll", hideMenu);