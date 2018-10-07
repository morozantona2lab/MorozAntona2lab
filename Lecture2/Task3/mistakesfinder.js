function check() {
	var text =document.getElementById('text').value;
	var lettersnumber=0;
	var wordsnumber=0;
	var charsinword=0;
	var comamistakes=0;
	var dotmistakes=0;
	var mainlettermistakes=0;
	var i=0;
	while(i<text.length){
		if(text.charCodeAt(i)==32){
			wordsnumber++
			if (text.charCodeAt(i-1)==32) {wordsnumber--}
		}
		i++;
	}
	if(text.charCodeAt(0)==32){ wordsnumber--}
	document.getElementById('numberwords').innerHTML='wordsnumber = '+wordsnumber;
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
	var a=0;
	while(a<text.length){
		if((text.charCodeAt(a)>64 && text.charCodeAt(a)<91)||(text.charCodeAt(a)>96 && text.charCodeAt(a)<123)){
			if((text.charCodeAt(a-1)<65 && text.charCodeAt(a-1)!=32)|| (text.charCodeAt(a-1)>90 && text.charCodeAt(a-1)<97) || text.charCodeAt(a-1)>122){
				charsinword++
			}
		}
		a++
	}
	document.getElementById('charsinword').innerHTML='charsinword = '+charsinword;
	var b=0;
	while(b<text.length){
		if((text.charCodeAt(b-1)==44 && text.charCodeAt(b)!=32)||(text.charCodeAt(b-1)==32 && text.charCodeAt(b)==44)){comamistakes++}
		b++
	}
	document.getElementById('comamistakes').innerHTML='comamistakes = '+comamistakes;
	var c=0;
	while(c<text.length){
		if((text.charCodeAt(c-1)==46 && text.charCodeAt(c)!=32)||(text.charCodeAt(c-1)==32 && text.charCodeAt(c)==46)){dotmistakes++}
		c++
	}
	document.getElementById('dotmistakes').innerHTML='dotmistakes = '+dotmistakes;
	var d=0;
	while(d<text.length){
		if(text.charCodeAt(d-2)==46){
			if (text.charCodeAt(d)<64||text.charCodeAt(d)>91){
				mainlettermistakes++
			}
		}
		d++
	}
	document.getElementById('mainlettermistakes').innerHTML='mainlettermistakes = '+mainlettermistakes;
}

