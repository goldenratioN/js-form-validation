// 1. value empty kina

// 2. nam er length > 5 kian

// 3. email a @ and . ace kina 

// 4. Password length > 8 kina 

// 5. subject select korci kina

function noman(){


	// name diye html element and js k link korlam

	var name_box = document.forms['myForm']['givenName'];
	var email_box = document.forms['myForm']['givenEmail'];
	var pass_box = document.forms['myForm']['givenPassword'];
	var sub_box = document.forms['myForm']['givenSubject'];

	// name check
	if(name_box.value==""){
		alert("name box paka");
		name_box.focus();
		return false;
	}else if(name_box.value.length < 5){
		alert("name aro boro hobe !");
		name_box.focus();
		return false;
	}

	// email check
	if(email_box.value ==""){
		alert("email box paka");
		email_box.focus();
		return false;
	}else if(email_box.value.indexOf("@") <= 0){
		alert("email a somosa (@) ");
		email_box.focus();
		return false;

	}else if(email_box.value.indexOf(".") <= 0){
		alert("email a somosa (.) ");
		email_box.focus();
		return false;
	}

	// pass check
	if(pass_box.value == ""){
		alert("password daw nai");
		pass_box.focus();
		return false;
	}else if(pass_box.value.length < 8){
		alert("password aro boro hobe");
		pass_box.focus();
		return false;
	}

	// sub check
	if(sub_box.value =="0"){
		alert("subject select koro");
		sub_box.focus();
		return false;
	}




}