window.onload = function(){
    window.addEventListener('scroll', function(){
      
      const header = document.querySelector(".header")
      const logo = document.querySelector(".header__logo__img")
     
     logo.classList.add('active')
     if(pageYOffset <= 50 ){
       logo.classList.remove('active')
     
     }
      header.classList.add('active')
      if(pageYOffset <= 50 ){
        header.classList.remove('active')
      
      }
      
  
    }, false)
  }
  