var charsinword=0; 
var countmistakes=0;
var mistakes='';

function check() {
	var lettersnumber=0;
	var wordsnumber=0;
	var comamistakes=0;
	var dotmistakes=0;
	var mainlettermistakes=0;
	var lastspace=0;
	var prelastspace=0;
	var text=document.getElementById("text").value;
	var i=0;
	var j=0;
	while(j<text.length){
		if(text.charCodeAt(j)>64 && text.charCodeAt(j)<91){
			lettersnumber++
		}
		if(text.charCodeAt(j)>96 && text.charCodeAt(j)<123){
			lettersnumber++
		}
		j++;
	}
	document.getElementById('numberletters').innerHTML='lettersnumber = '+lettersnumber;
	i=text.length-1;
	if((text.charCodeAt(i)>64 && text.charCodeAt(i)<91)||(text.charCodeAt(i)>96 && text.charCodeAt(i)<123)){
		if((text.charCodeAt(i-1)<65 && text.charCodeAt(i-1)!=32)|| (text.charCodeAt(i-1)>90 && text.charCodeAt(i-1)<97) || text.charCodeAt(i-1)>122){
			charsinword++;
		}
	}
	document.getElementById('charsinword').innerHTML='charsinword = '+charsinword;
	b=0;
	while(b<text.length){
		if((text.charCodeAt(b-1)==44 && text.charCodeAt(b)!=32)||(text.charCodeAt(b-1)==32 && text.charCodeAt(b)==44)){
			comamistakes++;
			
		}
		b++
	}
	document.getElementById('comamistakes').innerHTML='comamistakes = '+comamistakes;
	b=0;
	while(b<text.length){
		if((text.charCodeAt(b-1)==46 && text.charCodeAt(b)!=32)||(text.charCodeAt(b-1)==32 && text.charCodeAt(b)==46)){
			dotmistakes++
		}
		b++
	}
	document.getElementById('dotmistakes').innerHTML='dotmistakes = '+dotmistakes;
	b=0;
	while(b<text.length){
		if(text.charCodeAt(b-2)==46){
			if ((text.charCodeAt(b)<64||text.charCodeAt(b)>91)&&(text.charCodeAt(b)!=32)){
				mainlettermistakes++
			}
			}
		b++
	}
	document.getElementById('mainlettermistakes').innerHTML='mainlettermistakes = '+mainlettermistakes;
	i=0
	while(i<text.length){
		if(text.charCodeAt(i)==32){
			wordsnumber++
			b=i-lastspace;
			lastspace=i;
			prelastspace=lastspace-b;
			if (text.charCodeAt(i-1)==32) {wordsnumber--}
		}
		i++;
		
	}
	if(text.charCodeAt(0)==32){ wordsnumber--}
	document.getElementById('numberwords').innerHTML='wordsnumber = '+wordsnumber;
	if(countmistakes<charsinword+mainlettermistakes){	
		if(text[text.length-1]==' ' || text[text.length-1]=='.'){
			mistakes+=text.substring(prelastspace,lastspace)
			countmistakes++;
		}
	}
	mistakes+=" ";
	if (text.length>=999){
		alert('Too many chars')
	}
	if(mainlettermistakes+charsinword+comamistakes+dotmistakes==0){
		document.getElementById('text').style.borderColor='grey'
	}else{
		document.getElementById('text').style.borderColor='red'
	}	
	document.getElementById('mistakes').innerHTML=mistakes;	
}
