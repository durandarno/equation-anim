 	largeurbalance=300;
	hauteurplateau=50;
	largeurplateau=250;
	hauteurfleche=20;
	ecartpoidsentreetage=20;
	nbxg=0;
	nbg=0;
	nbxd=0;
	nbd=0;
	avnbxg=0;
	avnbg=0;
	avnbxd=0;
	avnbd=0;
	poseag=[0,0];
	posead=[0,0];
	valx=0;
	chaineequations='';
	equilibre=0;
	avequilibre=0;
	tableeq=document.getElementById("liste-eq");
	
	idanimation=0;
 var canvas = document.getElementById('mon_canvas');
        if(!canvas)
        {
            alert("Impossible de récupérer le canvas");
        }

    var context = canvas.getContext('2d');
        if(!context)
        {
            alert("Impossible de récupérer le context du canvas");
            
        }
        
        largeur_disponible=document.body.offsetWidth;
       canvas.width=3*largeurplateau+10;
        canvas.height=window.innerHeight-250;
        canvas.height=largeurbalance+100;
        decalageverslebas=120;
        
function resize()
{
	largeur_disponible=document.body.offsetWidth;

	    canvas.width=3*largeurplateau+10;
	canvas.height=window.innerHeight-250;
	canvas.height=largeurbalance+100;
	clearCanvas();
	affichebalance();
}
function rotation(centrex,centrey,angle)
{
	context.translate(centrex,centrey);
	context.rotate(angle*Math.PI/180);
}

function dessinerpoids(nbx,nb,nbtrans)
{
	if (nbtrans==undefined)
	{
		nbtrans=1;
	}

	var nbxlimtrans=nbx/nbtrans;
	var nblimtrans=nb/nbtrans;
	var nbpoidxpose=0;
	var nbpoidpose=0;
	if (nbx%3==1)
	{
		if (nbx-nbpoidxpose<=nbxlimtrans)
		{
			context.drawImage(poidsx, -39*3, -48-Math.floor(nbx/3)*ecartpoidsentreetage-hauteurplateau);
		}
		else
		{
			context.drawImage(poidsxtrans, -39*3, -48-Math.floor(nbx/3)*ecartpoidsentreetage-hauteurplateau);
		}
		nbpoidxpose++;
	}
	
	if (nbx%3==2)
	{
		if (nbx-nbpoidxpose<=nbxlimtrans)
		{
			context.drawImage(poidsx, -39*3, -48-Math.floor(nbx/3)*ecartpoidsentreetage-hauteurplateau);
		}
		else
		{
			context.drawImage(poidsxtrans, -39*3, -48-Math.floor(nbx/3)*ecartpoidsentreetage-hauteurplateau);
		}
		nbpoidxpose++;
		if (nbx-nbpoidxpose<=nbxlimtrans)
		{
			context.drawImage(poidsx, -39*2, -48-Math.floor(nbx/3)*ecartpoidsentreetage-hauteurplateau);
		}
		else
		{
			context.drawImage(poidsxtrans, -39*2, -48-Math.floor(nbx/3)*ecartpoidsentreetage-hauteurplateau);
		}
		nbpoidxpose++;	
	}
	
	
	for (i=Math.floor(nbx/3)-1;i>=0;i--)
	{
		if (nbx-nbpoidxpose<=nbxlimtrans)
		{
			context.drawImage(poidsx, -39*3, -48-i*ecartpoidsentreetage-hauteurplateau);
		}
		else
		{
			context.drawImage(poidsxtrans, -39*3, -48-i*ecartpoidsentreetage-hauteurplateau);
		}
		nbpoidxpose++;
		if (nbx-nbpoidxpose<=nbxlimtrans)
		{
			context.drawImage(poidsx, -39*2, -48-i*ecartpoidsentreetage-hauteurplateau);
		}
		else
		{
			context.drawImage(poidsxtrans, -39*2, -48-i*ecartpoidsentreetage-hauteurplateau);
		}
		nbpoidxpose++;			
		if (nbx-nbpoidxpose<=nbxlimtrans)
		{
			context.drawImage(poidsx, -39, -48-i*ecartpoidsentreetage-hauteurplateau);
		}
		else
		{
			context.drawImage(poidsxtrans, -39, -48-i*ecartpoidsentreetage-hauteurplateau);
		}
		nbpoidxpose++;				
	
	}
	
	
	if (nb%3==1)
	{
		if (nb-nbpoidpose<=nblimtrans)
		{
			context.drawImage(poids, 0, -62-Math.floor(nb/3)*ecartpoidsentreetage-hauteurplateau);
		}
		else
		{
			context.drawImage(poidstrans, 0, -62-Math.floor(nb/3)*ecartpoidsentreetage-hauteurplateau);
		}
		nbpoidpose++;
		
	}
	if (nb%3==2)
	{
		if (nb-nbpoidpose<=nblimtrans)
		{
			context.drawImage(poids, +39, -62-Math.floor(nb/3)*ecartpoidsentreetage-hauteurplateau);
		}
		else
		{
			context.drawImage(poidstrans, +39, -62-Math.floor(nb/3)*ecartpoidsentreetage-hauteurplateau);
		}
		nbpoidpose++;
		if (nb-nbpoidpose<=nblimtrans)
		{
			context.drawImage(poids, 0, -62-Math.floor(nb/3)*ecartpoidsentreetage-hauteurplateau);
		}
		else
		{
			context.drawImage(poidstrans,0, -62-Math.floor(nb/3)*ecartpoidsentreetage-hauteurplateau);
		}
		nbpoidpose++;
		
		
	}
	for (i=Math.floor(nb/3)-1;i>=0;i--)
	{
		if (nb-nbpoidpose<=nblimtrans)
		{
			context.drawImage(poids, +39*2, -62-i*ecartpoidsentreetage-hauteurplateau);
		}
		else
		{
			context.drawImage(poidstrans, +39*2, -62-i*ecartpoidsentreetage-hauteurplateau);
		}
		nbpoidpose++;
		if (nb-nbpoidpose<=nblimtrans)
		{
			context.drawImage(poids, +39, -62-i*ecartpoidsentreetage-hauteurplateau);
		}
		else
		{
			context.drawImage(poidstrans, +39, -62-i*ecartpoidsentreetage-hauteurplateau);
		}
		nbpoidpose++;

		if (nb-nbpoidpose<=nblimtrans)
		{
			context.drawImage(poids, 0, -62-i*ecartpoidsentreetage-hauteurplateau);
		}
		else
		{
			context.drawImage(poidstrans, 0, -62-i*ecartpoidsentreetage-hauteurplateau);
		}
		nbpoidpose++;		
		
		
	}
	
}
function calculequilibre(nbxg,nbg,nbxd,nbd)
{
	if (nbxg*valx+nbg>nbxd*valx+nbd)
	{
		return Math.max(-(Math.floor(nbxg*valx+nbg-(nbxd*valx+nbd))+1)*2,-40);
	}
	if (nbxg*valx+nbg<nbxd*valx+nbd)
	{
		return  Math.min((Math.floor(nbxd*valx+nbd-(nbxg*valx+nbg))+1)*2,40);
	}
	if (nbxg*valx+nbg==nbxd*valx+nbd)
	{
		return 0;
		
	}
	return 0;
}
function dessinebalance(lequilibre,nbtrans) //nbtrans permet de mettre 2 si on veut rendre transparent la moitié des poids etc...
{
	if (lequilibre==undefined)
	{
		lequilibre=equilibre;
	}
	if(nbtrans==undefined)
	{
		nbtrans=1;
	} 
	clearCanvas();

	context.beginPath();//On démarre un nouveau trace
	context.strokeStyle = 'black';
	context.lineCap='square';
	context.lineWidth=4; 
	
	centrex=canvas.width/2;
	centrey=Math.max(canvas.height-100,2*canvas.height/3);
	
	context.save();
	context.moveTo(centrex,centrey);
	context.lineTo(centrex-40,canvas.height);
	context.lineTo(centrex+40,canvas.height);
	context.lineTo(centrex,centrey);
	context.fill();
	context.translate(centrex,centrey);//on centre sur la balance
	context.rotate(lequilibre*Math.PI/180);// on rotationne
	
	context.moveTo(-largeurbalance/2,0);//on n'oublie que le centre est le centre de la balance
	
	
	context.lineTo(largeurbalance/2,0);
	
	context.moveTo(0,0);
	context.lineTo(0,-hauteurfleche);
	
	context.moveTo(-5,-hauteurfleche+5);
	context.lineTo(0,-hauteurfleche);
	
	context.moveTo(+5,-hauteurfleche+5);
	context.lineTo(0,-hauteurfleche);
	
	context.translate(-largeurbalance/2,0);//on sur la gauche de la balance
	context.rotate(-lequilibre*Math.PI/180);// on rotationne
	context.moveTo(0,0);
	context.lineTo(0,-hauteurplateau);
	context.lineTo(-largeurplateau/2,-hauteurplateau);
	context.lineTo(-largeurplateau/2,-hauteurplateau-10);
	context.moveTo(0,-hauteurplateau);
	context.lineTo(largeurplateau/2,-hauteurplateau);
	context.lineTo(largeurplateau/2,-hauteurplateau-10);
	context.stroke(); 
	context.closePath();
	context.beginPath();
	context.strokeStyle = 'grey';
	context.fillStyle = 'grey';
	context.lineCap='square';
	context.lineWidth=3; 
	context.moveTo(largeurplateau/2,-hauteurplateau);
	context.quadraticCurveTo(0,-hauteurplateau+50, -largeurplateau/2,-hauteurplateau); 
	context.fill(); 
	context.stroke(); 
	context.closePath();
	context.beginPath();
		context.strokeStyle = 'black';
	context.lineCap='square';
	context.lineWidth=4; 
	dessinerpoids(nbxg,nbg,nbtrans);
	context.rotate(lequilibre*Math.PI/180);
	
	context.translate(largeurbalance,0);//on sur la droite de la balance
	context.rotate(-lequilibre*Math.PI/180);// on rotationne
	context.moveTo(0,0);
	context.lineTo(0,-hauteurplateau);
	context.lineTo(-largeurplateau/2,-hauteurplateau);
	context.lineTo(-largeurplateau/2,-hauteurplateau-10);
	context.moveTo(0,-hauteurplateau);
	context.lineTo(largeurplateau/2,-hauteurplateau);
	context.lineTo(largeurplateau/2,-hauteurplateau-10);
	context.stroke(); 
	context.closePath();
	context.beginPath();
	context.strokeStyle = 'grey';
	context.fillStyle = 'grey';
	context.lineCap='square';
	context.lineWidth=3; 
	context.moveTo(largeurplateau/2,-hauteurplateau);
	context.quadraticCurveTo(0,-hauteurplateau+50, -largeurplateau/2,-hauteurplateau); 
	context.fill(); 
	context.stroke(); 
	context.closePath();
	context.beginPath();
	context.strokeStyle = 'black';
	context.lineCap='square';
	context.lineWidth=4; 
	dessinerpoids(nbxd,nbd,nbtrans);
	context.restore();
	context.stroke();

	var ecart1=0;
	var ecart2=0;
	if (poseag[0]!=0)
	{
		context.font = '48px serif';
		context.textBaseline = 'top';
		var texte = context.measureText(poseag[0]); 
		ecart1=texte.width;
		context.fillText(poseag[0], 0, canvas.height-70);
		context.drawImage(poidsx, 0+ecart1, canvas.height-70);
	}
	if (poseag[1]!=0)
	{
		context.font = '48px serif';
		context.textBaseline = 'top';
		var texte = context.measureText(poseag[1]); 
		ecart2=texte.width;
		context.fillText(poseag[1], 0+ecart1+40, canvas.height-70);
		context.drawImage(poids, 0+ecart1+40+ecart2, canvas.height-80);
	}
	var ecart1=0;
	var ecart2=0;
	
	if (posead[1]!=0)
	{
		context.font = '48px serif';
		context.textBaseline = 'top';
		var texte = context.measureText(posead[1]); 
		ecart1=texte.width;
		context.fillText(posead[1],canvas.width-40-ecart1, canvas.height-70);
		context.drawImage(poids, canvas.width-40, canvas.height-80);
	}
	if (posead[0]!=0)
	{
		context.font = '48px serif';
		context.textBaseline = 'top';
		var texte = context.measureText(posead[0]); 
		ecart2=texte.width;
		context.fillText(posead[0], canvas.width-40-ecart1-40-ecart2, canvas.height-70);
		context.drawImage(poidsx, canvas.width-40-ecart1-40, canvas.height-70);
	}
}


window.addEventListener('resize', resize, false);


function rendchaineequation()
{
	var chaineequation='';
	if (nbxg!=0)
	{
		if (nbxg!=1)
		{
			chaineequation=nbxg+'x';
		}
		else
		{
			chaineequation='x';
		}
	}
	if (nbg!=0)
	{
		if (chaineequation!='')
		{
			chaineequation=chaineequation+'+'+nbg;
		}
		else
		{
			chaineequation=nbg;
		}
	}
	if (chaineequation=='')
	{
		chaineequation='0';
	}
	chaineequation=chaineequation+'=';
	if (nbxd!=0)
	{
		if(nbxd!=1)
		{
			chaineequation=chaineequation+nbxd+'x';
		}
		else
		{
			chaineequation=chaineequation+'x';
		}
	}
	if (nbd!=0)
	{
		if (nbxd!=0)
		{
			chaineequation=chaineequation+'+'+nbd;
		}
		else
		{
			chaineequation=chaineequation+nbd;
		}
	}
	if ((nbd==0)&&(nbxd==0))
	{
		chaineequation=chaineequation+'0';
	}
	return chaineequation;
}

function initialisation()
{
	clearCanvas();
	chaineequation='';
	document.getElementById('progressBar').style.display='none';
	var nombrepoidsdsplataeau=Math.floor(Math.random()*5)+10;
	valx=Math.floor(Math.random()*5)+1;
	var nombrepoidsxg=Math.floor(Math.random()*nombrepoidsdsplataeau/valx);
	
	
	nbxg=Math.floor(Math.random()*nombrepoidsdsplataeau/valx);
	nbg=nombrepoidsdsplataeau-nbxg*valx;
	
	nbxd=Math.floor(Math.random()*nombrepoidsdsplataeau/valx);
	while (nbxd==nbxg)
	{
	nbxd=Math.floor(Math.random()*nombrepoidsdsplataeau/valx);	
	}
	nbd=nombrepoidsdsplataeau-nbxd*valx;

	avnbxg=nbxg;
	avnbg=nbg;
	avnbxd=nbxd;
	avnbd=nbd;
	equilibre=0;
	avequilibre=0;
	poseag=[0,0];
	posead=[0,0];
	if (idanimation!=0) // si animation en route, on l'arrête
	{
		window.cancelAnimationFrame(idanimation);
	}
	idanimation=0;
	
		 arrayLignes = tableeq.rows.length;
	 for (i=0;i<arrayLignes;i++)
	 {
			tableeq.deleteRow(-1);
	 }
	 
	affichebalance();
	

	
	
}
function configperso()
{
	clearCanvas();
	chaineequation='';


	

	
	if (Number(document.getElementById('nbxg').value)!=Number(document.getElementById('nbxd').value))
	{
	var		nbxgt=Number(document.getElementById('nbxg').value);
	var nbgt=Number(document.getElementById('nbg').value);
	var nbxdt=Number(document.getElementById('nbxd').value);
	var nbdt=Number(document.getElementById('nbd').value);
		valxt=(nbdt-nbgt)/(nbxgt-nbxdt);
			document.getElementById('progressBar').style.display='none';
		
	
	if (valxt>0)
	{
		document.getElementById('config').style.display='none';
		nbxg=Number(document.getElementById('nbxg').value);
		nbg=Number(document.getElementById('nbg').value);
		nbxd=Number(document.getElementById('nbxd').value);
		nbd=Number(document.getElementById('nbd').value);
		valx=(nbd-nbg)/(nbxg-nbxd);
		avnbxg=nbxg;
		avnbg=nbg;
		avnbxd=nbxd;
		avnbd=nbd;
		equilibre=0;
		avequilibre=0;
		if (idanimation!=0) // si animation en route, on l'arrête
		{
			window.cancelAnimationFrame(idanimation);
		}
		idanimation=0;
		
			 arrayLignes = tableeq.rows.length;
		 for (i=0;i<arrayLignes;i++)
		 {
				tableeq.deleteRow(-1);
		 }
	 
	}
	else
	{
		alert('configuration impossible, lepoids inconnu aurait un poids négatif')
	}
	}
	else
	{
		alert('configuration impossible, il y a le même nombre de poids inconnus de part et d\' autre de la balance')
	}
		affichebalance();
}
function menuperso()
{
	if (document.getElementById('config').style.display=='none')
	{
		document.getElementById('config').style.display='';
	}
	else
	{
		document.getElementById('config').style.display='none';
	}
	
}
function trouveoperation()
{
		if ((avnbxg!=nbxg)&&(avnbg==nbg)&&(avnbd==nbd)&&(avnbxd!=nbxd)) // les termes en x ont variés
		{
			if ((avnbxg-nbxg)==(avnbxd-nbxd))
			{
				if (avnbxg>nbxg)
				{
					var nb=avnbxg-nbxg;
					if (nb>1)
					{
						return " -"+nb+"x ";
					}
					else
					{
						return " -x ";
					}
				}
				else
				{
					var nb=nbxg-avnbxg;
					if (nb>1)
					{
						return " +"+nb+"x ";
					}
					else
					{
						return " +x ";
					}
					
				}
			}

		}
		else
		{
			if ((avnbg!=nbg)&&(avnbxg==nbxg)&&(avnbd!=nbd)&&(avnbxd==nbxd)) // les termes sans x ont variés
			{
				if (avnbg>nbg)
				{
					var nb=avnbg-nbg;
					return " -"+nb+" ";
				}
				else
				{
					var nb=nbg-avnbg;
					return " +"+nb+" ";
				}
			}
			else
			{
				if (((avnbxg!=nbxg)||((nbxg==0)&&(avnbxg==0)))&&((avnbg!=nbg)||((avnbg==0)&&(nbg==0)))&&((avnbxd!=nbxd)||((nbxd==0)&&(avnbxd==0)))&&((avnbd!=nbd)||((avnbd==0)&&(nbd==0))))
				{
					if (nbxg!=0)
					{
						var nb=avnbxg/nbxg;
					}
					else
					{
						if (nbxd!=0)
						{
							var nb=avnbxd/nbxd;
						}
						else
						{
							if (nbg!=0)
							{
								var nb=avnbg/nbg;
							}
							else
							{
								if (nbd!=0)
								{
									var nb=avnbd/nbd;
								}
								else
								{
									nb="";
								}	
							}							
						}
					}
					if (((avnbd-nbd)==(avnbg-nbg))&&((avnbxd-nbxd)==(avnbxg-nbxg)))
					{
						if ((avnbd-nbd>0)&&(avnbxd-nbxd>0))
						{
							return " -"+(avnbd-nbd)+ " - "+(avnbxd-nbxd)+"x";
						}
						if ((avnbd-nbd>0)&&(avnbxd-nbxd<0))
						{
							return " -"+(avnbd-nbd)+ " + "+(nbxd-avnbxd)+"x";
						}
						if ((avnbd-nbd<0)&&(avnbxd-nbxd<0))
						{
							return (nbd-avnbd)+ " + "+(nbxd-avnbxd)+"x";
						}
						if ((avnbd-nbd<0)&&(avnbxd-nbxd>0))
						{
							return (nbd-avnbd)+ " - "+(nbxd-avnbxd)+"x";
						}
					}
					if (nb!='')
					{
						if (nb<1)
						{
							return " ×"+Math.floor(1/nb)+" ";
						}
						else
						{
							return " :"+nb+" ";
						}
					}
					else
					{
						return "...";
					}
				}
				else
				{
					if (((avnbd-nbd)==(avnbg-nbg))&&((avnbxd-nbxd)==(avnbxg-nbxg)))
					{
						if ((avnbd-nbd>0)&&(avnbxd-nbxd>0))
						{
							return " -"+(nbd-avnbd)+ " - "+(nbxd-avnbxd)+"x";
						}
						if ((avnbd-nbd>0)&&(avnbxd-nbxd<0))
						{
							return " -"+(nbd-avnbd)+ " + "+(avnbxd-nbxd)+"x";
						}
						if ((avnbd-nbd<0)&&(avnbxd-nbxd<0))
						{
							return (nbd-avnbd)+ " + "+(avnbxd-nbxd)+"x";
						}
						if ((avnbd-nbd<0)&&(avnbxd-nbxd>0))
						{
							return (nbd-avnbd)+ " - "+(nbxd-avnbxd)+"x";
						}
					}
					return " ...";
					
				}

			}
		}
		
		
}

function ajouterequation()
{
	
	console.log(nbxg +' '+ nbg+' '+nbxd+'  '+nbd);
	console.log(avnbxg +' '+ avnbg+' '+avnbxd+'  '+avnbd);
	 arrayLignes = tableeq.rows;
	 
	chaineequations=rendchaineequation();
	if (((avnbxg!=nbxg)||(avnbg!=nbg)||(avnbxd!=nbxd)||(avnbd!=nbd))||(arrayLignes.length==0))
	{
		if (arrayLignes.length!=0)
		{
			var chaineop=trouveoperation();
			if (chaineop!='')// si l'opération a été trouvé c'est que c'est valide
			{
				var nvligne=tableeq.insertRow(arrayLignes.length);
				var celluleflecheg=nvligne.insertCell(0);
				var nouvelleCellule2 = nvligne.insertCell(1);
				var cellulefleched=nvligne.insertCell(2);
				
				celluleflecheg.innerHTML=chaineop+"<img src='fleche.png'>";
				cellulefleched.innerHTML="<img src='fleche2.png'>"+chaineop;

				//document.getElementById('equation').innerHTML=chaineequations;
			}
		}
		
		if (((chaineop!='')&&(arrayLignes.length!=0))||(arrayLignes.length==0))
		{
			var nvligne=tableeq.insertRow(arrayLignes.length);
			
			
			nvligne.insertCell(0);
			var nouvelleCellule2 = nvligne.insertCell(1);
			 nvligne.insertCell(2);
			 //nouvelleCellule2.innerHTML=chaineequations;
			 var nouveauTexte = document.createTextNode(chaineequations);
			 nouvelleCellule2.appendChild(nouveauTexte);
			//document.getElementById('equation').innerHTML=chaineequations;
			avnbxg=nbxg;
			avnbg=nbg;
			avnbxd=nbxd;
			avnbd=nbd;
		}
	}
}
function axg()
{

		nbxg++;
		poseag[0]++;
	clearCanvas();
	affichebalance();
}
function sxg()
{
	if (nbxg>0)
	{
		nbxg--;
		poseag[0]--;
	clearCanvas();
	affichebalance();
	}
	

}
function ag()
{

		nbg++;
		poseag[1]++;
	clearCanvas();
	affichebalance();
}
function sg()
{
	if (nbg>0)
	{
		nbg--;
		poseag[1]--;
		clearCanvas();
		affichebalance();
	}

}
function axd()
{

		nbxd++;
		posead[0]++;
	clearCanvas();
	affichebalance();
}
function sxd()
{
	if (nbxd>0)
	{
		nbxd--;
		posead[0]--;
		clearCanvas();
		affichebalance();
	}

}
function ad()
{

		nbd++;
		posead[1]++;
		clearCanvas();
		affichebalance();
}
function sd()
{
	if (nbd>0)
	{
		nbd--;
		posead[1]--;
	
		clearCanvas();
		affichebalance();
	}
	

}
function diviser(nb)
{
	nbd=nbd/nb;
	nbxd=nbxd/nb;
	nbg=nbg/nb;
	nbxg=nbxg/nb;
		clearCanvas();
	affichebalance();
}

function balancebouge()
{
	if (Math.abs(avequilibre-equilibre)>1)
	{
		console.log(avequilibre+'  '+equilibre);
		if (avequilibre>equilibre)
		{
			avequilibre--;
			dessinebalance(avequilibre);
		}
		else
		{
			avequilibre++;
			dessinebalance(avequilibre);
		}
		animationbalance();
	}
	else
	{
			avequilibre=equilibre;
			dessinebalance(equilibre)
			window.cancelAnimationFrame(idanimation);
			idanimation=0;
	}
	
}
function animationbalance()
{
	if (idanimation!=0) // si animation en route, on l'arrête
	{
		window.cancelAnimationFrame(idanimation);
		idanimation=0;
	}
	idanimation= window.requestAnimationFrame(balancebouge);  
}
function affichediv(nb)
{
	dessinebalance(0,nb);
}

function affichebalance()
{
	var op=document.getElementById('op');
	avequilibre=equilibre;
	equilibre=calculequilibre(nbxg,nbg,nbxd,nbd);
	console.log('equilibre '+equilibre+' avequilibre '+avequilibre);
	if (avequilibre==equilibre)
	{
		dessinebalance();
	}
	else
	{
		animationbalance();
	}
		var chaine="";
		maxdiv=Math.max(nbxg,nbg,nbxd,nbd);
		if (maxdiv>1)
		{
			for (i=2;i<=maxdiv;i++)
			{
				
			
				if ((equilibre==0)&&(nbxg%i==0)&&(nbg%i==0)&&(nbxd%i==0)&&(nbd%i==0))
				{
					
					chaine=chaine+"<br/><a onmouseout='dessinebalance();'  onmouseover='affichediv("+i+")' onclick='diviser("+i+")' style='cursor:pointer;font-size:60px'><img src='div.png'>"+i+"</a>";
					
				}
			
			
			}
	}
		op.innerHTML=chaine;
		
		if (equilibre==0)
		{
			poseag=[0,0];
			posead=[0,0];
				//chaineequations=rendchaineequation();
			//document.getElementById('equation').innerHTML=document.getElementById('equation').innerHTML+"<br/>"+chaineequations;
			ajouterequation();
		}
}

function clearCanvas() 
{
  context.clearRect(0, 0, canvas.width, canvas.height);
  var w = canvas.width;
  canvas.width = 1;
  canvas.width = w;


}



function GET(param)
{
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if ( param ) {
		return vars[param] ? vars[param] : null;	
	}
	return vars;
}


function lancerequationurl(parametre)
{
	var equation=parametre.split(',')
	clearCanvas();
	chaineequation='';
	if (Number(equation[0])!=Number(equation[2]))
	{
	var		nbxgt=Number(equation[0]);
	var nbgt=Number(equation[1]);
	var nbxdt=Number(equation[2]);
	var nbdt=Number(equation[3]);
		valxt=(nbdt-nbgt)/(nbxgt-nbxdt);
			document.getElementById('progressBar').style.display='none';
		
	
	if (valxt>0)
	{
		document.getElementById('config').style.display='none';
		nbxg=Number(equation[0]);
		nbg=Number(equation[1]);
		nbxd=Number(equation[2]);
		nbd=Number(equation[3]);
		valx=(nbd-nbg)/(nbxg-nbxd);
		avnbxg=nbxg;
		avnbg=nbg;
		avnbxd=nbxd;
		avnbd=nbd;
		equilibre=0;
		avequilibre=0;
		if (idanimation!=0) // si animation en route, on l'arrête
		{
			window.cancelAnimationFrame(idanimation);
		}
		idanimation=0;
		
			 arrayLignes = tableeq.rows.length;
		 for (i=0;i<arrayLignes;i++)
		 {
				tableeq.deleteRow(-1);
		 }
	 
	}
	else
	{
		alert('configuration impossible, lepoids inconnu aurait un poids négatif')
	}
	}
	else
	{
		alert('configuration impossible, il y a le même nombre de poids inconnus de part et d\' autre de la balance')
	}
		affichebalance();
		
}
