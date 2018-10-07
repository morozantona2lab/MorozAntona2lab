function encrypt() {
	var x=document.getElementById('number1').value;
	x = parseInt(x);
	var text= document.getElementById('text1').value;
	var i=0;
	var letter;
	var result="";
	while(i<text.length){
		letter=text.charCodeAt(i);
		x=x%26;
		if (letter<91){ letter-=26;}
		letter=letter+x;
		if (letter>122){ letter-=26;}
		if (letter<65){ letter+=26;}
		if (letter==32+x){ letter-=x;}
		letter=String.fromCharCode(letter);
		result+=letter;
		i+=1
	}
	document.getElementById('retext1').value=result;
}
function decrypt() {
	var x=document.getElementById('number2').value;
	x = parseInt(x);
	var text= document.getElementById('text2').value;
	var i=0;
	var letter;
	var result="";
	while(i<text.length){
		letter=text.charCodeAt(i);
		x=x%26;
		if (letter>90){ letter+=26;}
		letter=letter-x;
		if (letter>122){ letter-=26;}
		if (letter<65){ letter+=26;}
		if (letter-x==32){ letter-=x;}
		letter=String.fromCharCode(letter);
		result+=letter;
		i+=1
	}
	document.getElementById('retext2').value=result;
}