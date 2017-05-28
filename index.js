var myBody = document.body;
var myForm = document.createElement('form');
	myForm.setAttribute("name","login");
	myForm.setAttribute("action","#");
	myForm.setAttribute("onsubmit","return checkForm(this)");
	myBody.appendChild(myForm);
var username = document.createElement('input');
	username.setAttribute("type","text");
	username.setAttribute("name","username");
	username.setAttribute("placeholder","user_");
	myForm.appendChild(username);
var age = document.createElement('input');
	age.setAttribute("type","text");
	age.setAttribute("name","age");
	age.setAttribute("placeholder","скільки років");
	myForm.appendChild(age);
var date = document.createElement('input');
	date.setAttribute("type","text");
	date.setAttribute("name","date");
	date.setAttribute("placeholder","дата dd/mm/yyyy");
	myForm.appendChild(date);
var submit = document.createElement('input');
	submit.setAttribute("type","submit");
	myForm.appendChild(submit);

function checkForm(form){
	checkData();
	checkAge();
	checkName();
	
}
function checkName(){
	var name = document.getElementsByTagName('input')[0].value;
	var m = name.match(/^user_[^;:#*%S]/i);
	if (!m){
		alert("Ваше ім'я має починатись user_ ")
	} return true;
}
function checkAge(){
	var age = document.getElementsByTagName("input")[1].value;
	var m = age.match(/^[0-9]/);
	if(!m){
		alert("Введіть скільки вам років цифрою")
	} return true;
}
function checkData(){
	var data = document.getElementsByTagName('input')[2].value;
	var m = data.match(/^[0-3][0-9]\/[0|1][0-9]\/(19|20)[0-9]{2}/);
	if(!m){
		alert('Введіть будь ласка правильно дату за форматом дд/мм/рррр')
	}
}
