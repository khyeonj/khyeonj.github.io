$(document).ready(function(){
	 //로그인 유효성 체크
     $('.boxRight').click(function(){
        login();
    });
    function login(){
        let id = document.querySelector('#id').value;
        let idCheck = document.querySelector('#idMsg');
        let pw = document.querySelector('#pw').value;
        let pwCheck = document.querySelector('#pwMsg');

        let cA = /^[a-z0-9][a-z0-9_\-]{6,12}$/;
        
        //입력여부 검사
        if(id == ""){
            idCheck.innerHTML = "아이디를 입력하세요.";
            $("#id").focus();
            pwCheck.innerHTML = "";
            id = '';
            return false;
        }else if(!(cA.test(id))){
            idCheck.innerHTML = "6~12자의 영문 소문자, 숫자만 사용 가능합니다.";
            $("#id").focus();
            pwCheck.innerHTML = "";
            id = '';
            return false;
        }else if(pw == ""){
            pwCheck.innerHTML = "비밀번호를 입력하세요.";
            idCheck.innerHTML = "";
            pw.focus();
            return false;
        }else if(pw.length<6 || pw.length>8) {
            pwCheck.innerHTML = "패스워드를 6~8자 까지 입력해주세요.";
            idCheck.innerHTML = "";
            pw.focus();
            pw.select();
            return false;
        }else{
            idCheck.innerHTML = "";
            pwCheck.innerHTML = "";
            alert(id+"님 환영합니다!");
            window.location = 'index.html';
            id ="";
            pw ="";
        };                
    };
})