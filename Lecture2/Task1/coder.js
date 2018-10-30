function encrypt() {
	var x=document.getElementById('number').value;
	x = parseInt(x);
	var text= document.getElementById('text').value;
	var i=0;
	var letter;
	var result="";
	while(i<text.length){
		letter=text.charCodeAt(i);
		if ((letter<65)||((letter>90)&&(letter<97))||(letter>122)){x=0;}else{
			x=document.getElementById('number').value;
			x = parseInt(x);
			x=x%26;
			if ((letter>64)&&(letter<91)){ letter-=26;}
			letter+=x;
			if (letter>122){ letter-=26;}
			if (letter<65){ letter+=26;}
		}
		letter=String.fromCharCode(letter);
		result+=letter;
		i+=1
	}
	document.getElementById('retext').value=result;
}
function decrypt() {
	var x=document.getElementById('number').value;
	x = parseInt(x);
	var text= document.getElementById('text').value;
	var i=0;
	var letter;
	var result="";
	while(i<text.length){
		letter=text.charCodeAt(i);
		if ((letter<65)||((letter>90)&&(letter<97))||(letter>122)){x=0;}else{
			x=document.getElementById('number').value;
			x = parseInt(x);
			x=x%26;
			if ((letter-x>90)&&(letter-x<97)){ letter+=26;}
		letter-=x;
		if (letter<65){ letter+=26;}
	}
		letter=String.fromCharCode(letter);
		result+=letter;
		i+=1
	}
	document.getElementById('retext').value=result;
}
