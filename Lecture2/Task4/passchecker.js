var wronglogin=0 //boolean type
var wrongpassword=0 //boolean type
var message='' //write the result of checking
function checklogin(){
	var login=document.getElementById('login').value
	var atposition //position of @ in the line
	var dotexist=0 //have .
	var atexist=0 // have @
	var chars=login.length	//boolean type
	var char //current char
	var i=0 //counter
	while(i<login.length){
		char=login.charCodeAt(i)
		if (login[i]=='@') {
			atexist++
			atposition=i;
		}
		if (atposition<i && login[i]=='.') {
			dotexist++
		}
		if(char==46) {chars--}
		if(char>=48 && char<=57){chars--}
		if(char==64){chars--}
		if(char>=97 && char<+122) {chars--}
		i++
	}
	if (login!='' || atexist!=1 || chars!=0 || dotexist!=1){
		wronglogin=1
	}else{
		wronglogin=0
	}
}

function checkpassword(){
	var password=document.getElementById('password').value
	var chars=0	//boolean type
	var char //current char
	var number=0
	var bigletter=0
	var smallleter=0
	var mistakes=0
	var n=0
	while(n<password.length){
		char=password.charCodeAt(n)
		if((char>=36 && char<=38) || char==59 || char==64) {chars++}
		if(char>=48 && char<=57){number++}
		if(char>=97 && char<=122){smallleter++}
		if(char>=65 && char<=90){bigletter++}
		if((char<48 && char!=36 && char!=37 && char!=38) || (char!=59 && char!=64 && char>57 && char<65) || (char>90 && char<97) || char>122){
			mistakes++
		}
		n++
	}
	if(chars<1 || number<1 || smallleter<1 || bigletter<1 || mistakes!=0){
		wrongpassword=1
	}else{
		wrongpassword=0
	}
}

function check(){
	if (wrongpassword==1 || password=='') {
		alert('Wrong password')
	}
	if (wronglogin==1 ||login=='') {
		alert("Wrong login")
	}
	if(wrongpassword==0 && wronglogin==0 && password!='' && login!=''){
		alert('Everything is fine!')
	}
}