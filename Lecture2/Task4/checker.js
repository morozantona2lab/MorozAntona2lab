var wronglogin=0 //boolean type
var wrongpassword=0 //boolean type
var loginmessage //write the result of checking
var passmessage //write the result of checking
function checklogin(){
	var login=document.getElementById('login').value
	var atposition //position of @ in the line
	var dotexist=0 //have .
	var atexist=0 // have @
	var chars=login.length	//boolean type
	var char=0 //current char
	var i=0 //counter
	var dotposition
	loginmessage='Login: '
	wronglogin=0
	while(i<login.length){
		char=login.charCodeAt(i)
		if (login[i]=='@') {
			atexist++
			atposition=i;
		}
		if (atposition<i && login[i]=='.') {
			dotexist++
			if(i-atposition==1){wronglogin=1;loginmessage+='No symbols between "@" and ".". '}
			if(login[i]=='.' && login[i-1]=='.'){wronglogin=1;loginmessage+='No symbols between two ".". '}
			dotposition=i
		}
			if(char==46) {chars--}
			if(char>=48 && char<=57){chars--}
			if(char==64){chars--}
			if(char>=97 && char<=122) {chars--}
			if(char>=65 && char<=91){chars--}
			i++
		}
		if(dotposition==login.length-1){wronglogin=1;loginmessage+='Incorrect last symbol. '}
		if(login==''){wronglogin=1; loginmessage+='Fill in login field. '}
		if(atexist!=1){wronglogin=1; loginmessage+='Wrong amount of "@" symbols. '}
		if(chars!=0){wronglogin=1; loginmessage+='Incorrect symbols. '}
		if(dotexist<1){wronglogin=1; loginmessage+='No "." symbol. '}
		if(wronglogin==0){loginmessage+='fine'}
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
	wrongpassword=0
	passmessage='Password: '
	if(password==''){wrongpassword=1;passmessage+='Fill in password field. '}
	if(chars<1){wrongpassword=1;passmessage+='Nothing of the "$%;@&" symbols exists. '}
	if(number<1){wrongpassword=1;passmessage+='No numbers in password. '}
	if(smallleter<1){wrongpassword=1;passmessage+='No small leters in password. '}
	if(bigletter<1){wrongpassword=1;passmessage+='No big leters in password. '}
	if(mistakes!=0){wrongpassword=1;passmessage+='Incorrect symbols in password. '}
	if(wrongpassword==0){passmessage+='fine'}
}

function check(){
	checklogin()
	checkpassword()
	if(wrongpassword==0 && wronglogin==0){
		message='Everything is fine!'
		alert(message)
	}else{
		message=loginmessage+'\n'+passmessage
		alert(message)
	}
}
