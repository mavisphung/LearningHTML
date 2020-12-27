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

function SignUp() {
	var username = document.getElementById('username').value;
	var radioNam = document.getElementById('nam');
	
	var password = document.getElementById('password').value;
	var cpassword = document.getElementById('cpassword').value;
	var email = document.getElementById('email').value;
	var dob = document.getElementById('dob').value;
	var phone = document.getElementById('phone').value;
	var gioitinh;
	
	//check empty
	if (username == "" || password == "" || cpassword == "" || email == "" || dob == "" || phone == "") {
		alert("Vui lòng nhập đủ");
		return;
	}
	
	//check ngày
	var today = new Date;
	today = Date.parse(today);
	dob = Date.parse(dob);
	if (dob > today) {
		alert("Ngày sinh phải nhỏ hơn ngày hiện hành");
		return;
	}
	
	//check password
	if (password.localeCompare(cpassword) != 0) {
		alert("Password không trùng khớp");
		return;
	}
	
	//giới tính
	if (radioNam.checked)
		gioitinh = "nam";
	else gioitinh = "nữ";
	
	var result = 
		"Username: " + username + "\n" +
		"Password: " + password + "\n" +
		"Confirm password: " + cpassword + "\n" +
		"Email: " + email + "\n" +
		"DoB: " + dob + "\n" +
		"Phone: " + phone + "\n" +
		"Gender: " + gioitinh + "\n";
	alert(result);
}