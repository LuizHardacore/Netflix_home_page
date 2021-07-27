function myFunction(x) {
    if (x.matches) { // If media query matches
        document.getElementById("logo").src="/midia/RetroflixIcon.png";

    } else {
        document.getElementById("logo").src="/midia/RetroflixLogo.png";

    }
  }
  
  var x = window.matchMedia("(max-width: 560px)");
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) 

  function funcao(x) {
    if (x.matches) { 
        document.getElementById("descricao").innerHTML = " ";

    } else {
        document.getElementById("descricao").innerHTML = "Super Mario Bros. 3, a terceira entrada da série Super Mario Bros., tem Mario (ou Luigi) navegando em um mapa não linear com níveis de plataforma e minijogos opcionais.";
    }
  }
  
  var x = window.matchMedia("(max-width: 660px)");
  funcao(x) 
  x.addListener(funcao) 

 
 