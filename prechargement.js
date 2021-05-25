//chargement des images
var startTime = 50;
telecharger=-1;
var imageLoaded = new CustomEvent(
  "imageLoaded",
  {
    detail: {
    },
    bubbles: true,
    cancelable: true
  }
);

document.getElementById("progressBar").addEventListener("imageLoaded", function(event) {
  startTime += 50;
  
  console.log(telecharger);
  setTimeout( function() {
    document.getElementById("progressBar").value = document.getElementById("progressBar").value + 6,6;
  }, startTime);
});


var loadImages = function() {
	telecharger++;
if (telecharger==0)
{
plus = new Image();   // Crée un nouvel objet Image
plus.src = './plus.png'; // Définit le chemin vers sa source	
plus.addEventListener("load",function() 
{
      document.getElementById("progressBar").dispatchEvent(imageLoaded);loadImages();
});
}
if (telecharger==1)
{
moins = new Image();   // Crée un nouvel objet Image
moins.src = './moins.png'; // Définit le chemin vers sa source	
moins.addEventListener("load",function() 
{
      document.getElementById("progressBar").dispatchEvent(imageLoaded);loadImages();
});
}
if (telecharger==2)
{
div = new Image();   // Crée un nouvel objet Image
div.src = './div.png'; // Définit le chemin vers sa source	
div.addEventListener("load",function() 
{
      document.getElementById("progressBar").dispatchEvent(imageLoaded);loadImages();
});
}
if (telecharger==3)
{
fois = new Image();   // Crée un nouvel objet Image
fois.src = './fois.png'; // Définit le chemin vers sa source	
fois.addEventListener("load",function() 
{
      document.getElementById("progressBar").dispatchEvent(imageLoaded);loadImages();
});
}
if (telecharger==4)
{
plus = new Image();   // Crée un nouvel objet Image
plus.src = './plus.png'; // Définit le chemin vers sa source	
plus.addEventListener("load",function() 
{
      document.getElementById("progressBar").dispatchEvent(imageLoaded);loadImages();
});
}

if (telecharger==5)
{
moins = new Image();   // Crée un nouvel objet Image
moins.src = './moins.png'; // Définit le chemin vers sa source	
moins.addEventListener("load",function() 
{
      document.getElementById("progressBar").dispatchEvent(imageLoaded);loadImages();
});
}

if (telecharger==6)
{
poidsx = new Image();   // Crée un nouvel objet Image
poidsx.src = './poidsx.png'; // Définit le chemin vers sa source	
poidsx.addEventListener("load",function() 
{
      document.getElementById("progressBar").dispatchEvent(imageLoaded);loadImages();
});
}
if (telecharger==7)
{
flecheg = new Image();   // Crée un nouvel objet Image
flecheg.src = './fleche.png'; // Définit le chemin vers sa source	
flecheg.addEventListener("load",function() 
{
      document.getElementById("progressBar").dispatchEvent(imageLoaded);loadImages();
});
}
if (telecharger==8)
{
fleched = new Image();   // Crée un nouvel objet Image
fleched.src = './fleche2.png'; // Définit le chemin vers sa source	
fleched.addEventListener("load",function() 
{
      document.getElementById("progressBar").dispatchEvent(imageLoaded);loadImages();
});
}
if (telecharger==9)
{
poidsxtrans = new Image();   // Crée un nouvel objet Image
poidsxtrans.src = './poidsxtrans.png'; // Définit le chemin vers sa source	
poidsxtrans.addEventListener("load",function() 
{
      document.getElementById("progressBar").dispatchEvent(imageLoaded);loadImages();
});
}
if (telecharger==10)
{
poidstrans = new Image();   // Crée un nouvel objet Image
poidstrans.src = './poidstrans.png'; // Définit le chemin vers sa source	
poidstrans.addEventListener("load",function() 
{
      document.getElementById("progressBar").dispatchEvent(imageLoaded);loadImages();
});
}
if (telecharger==11)
{
poids = new Image();   // Crée un nouvel objet Image
poids.src = './poids.png'; // Définit le chemin vers sa source	
poids.addEventListener("load",function() 
{
      document.getElementById("progressBar").dispatchEvent(imageLoaded);loadImages();
      if (GET('eq')==undefined)
	{
       initialisation(); // car dernière image chargée
   }
   else
   {
	   lancerequationurl(GET('eq'))
   }
});
}
}
loadImages();

//fin chargement image
