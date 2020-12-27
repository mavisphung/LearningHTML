// JavaScript Document
function ThongBao() {
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	if (username == "" || password == "") {
		alert("Vui lòng nhập đầy đủ");
	} else {
		alert("Xin chào " + username);
	}
}

function Cong() {
	var a = document.getElementById('so-1').value;
	var b = document.getElementById('so-2').value;
	if (a == "" || b == "") {
		alert("Vui lòng nhập đầy đủ");
		return;
	}
//	hệ cơ số 10
	a = parseInt(a, 10);
	b = parseInt(b, 10);
	alert(a + " + " + b + " = " + (a+b));
	
}