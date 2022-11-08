$(function(){
    // 동의하지 않음 선택 시 sms, 이메일 체크 해지
    $('#chk3').click(function(){
        if($(this).is(":checked")){
            $("input[name='chk1']").prop("checked", false);
            $("input[name='chk2']").prop("checked", false);
        }
    });
    //sms, 이메일 선택시 동의하지않음 해지
    $('#chk1, #chk2').click(function(){
        if($(this).is(":checked")){
            $("input[name='chk3']").prop("checked", false);
        }
    });

    //동의합니다
    $('#chk7').click(function(){
        if($(this).is(":checked")){
            $("input[name='chk4']").prop("checked", true);
            $("input[name='chk5']").prop("checked", true);
            $("input[name='chk6']").prop("checked", true);
            $("input[name='chk8']").prop("checked", false);
        }else{
            $("input[name='chk4']").prop("checked", false);
            $("input[name='chk5']").prop("checked", false);
            $("input[name='chk6']").prop("checked", false);
            $("input[name='chk8']").prop("checked", false);
        }
    });
    //동의하지않습니다.
    $('#chk8').click(function(){
        if($(this).is(":checked")){
            $("input[name='chk4']").prop("checked", false);
            $("input[name='chk5']").prop("checked", false);
            $("input[name='chk6']").prop("checked", false);
            $("input[name='chk7']").prop("checked", false);
        }
    });
    //약관눌렀을 때 동의하지 않습니다 해지& 전체 다 선택시 동의합니다 체크
    $('#chk4,#chk5,#chk6').click(function(){
        if($(this).is(":checked")){
            $("input[name='chk8']").prop("checked", false);
            $("input[name='chk7']").prop("checked", false);
        }
        if(!$('#chk4').is(":checked")||!$('#chk5').is(":checked")||!$('#chk6').is(":checked")){
            $("input[name='chk7']").prop("checked", false);
        }
        if($('#chk4').is(":checked")&&$('#chk5').is(":checked")&&$('#chk6').is(":checked")){
            $("input[name='chk7']").prop("checked", true);
        }
    });

    //약관보기 열기
    $('.right').click(function(e){
        e.preventDefault();
        $('.terms').stop().css('display','block');
    });
    //약관보기 닫기
    $('.terms_confirm').click(function(e){
        e.preventDefault();
        $('.terms').stop().css('display','none');
    });


    $('#reset_btn').click(function(e){
        e.preventDefault();
        if(!confirm("정말로 취소하시겠습니까?")){
            location.replace('#');
        }else{
            location.replace('login.html');
        }
    });

});

$(document).ready(function(){
    //회원가입 유효성 체크
    $('#join_btn').click(function(e){
        e.preventDefault();
        join();
    });
    function join(){
        let id = document.querySelector('#id').value;
        let idCheck = document.querySelector('#idMsg');
        let pw1 = document.querySelector('#pw1').value;
        let pw1Check = document.querySelector('#pw1Msg');
        let pw2 = document.querySelector('#pw2').value;
        let pw2Check = document.querySelector('#pw2Msg');
        let name = document.querySelector('#name').value;
        let nameCheck = document.querySelector('#nameMsg');
        let phone1 = document.querySelector('#phone1').value;
        let phone2 = document.querySelector('#phone2').value;
        let phoneCheck = document.querySelector('#phoneMsg');
        let email = document.querySelector('#email').value;
        let emailCheck = document.querySelector('#emailMsg');
        // let agree = document.querySelector('#agree').value;
        let agreeCheck = document.querySelector('#agreeMsg');
        // let totalAgree = document.querySelector('.totalAgree').value;
        let totalAgreeeCheck = document.querySelector('#totalAgreeMsg');

        let cAId = /^[a-z0-9][a-z0-9_\-]{5,13}$/;
        let cAName = /^[가-힣]{2,5}$/
        let cAEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
        let cAPhone = /^[0-9]{3,4}$/
        
        //회원가입 입력여부 검사
        if(id == ""){
            idCheck.innerHTML = "아이디를 입력하세요.";
            $("#id").focus();
            pw1Check.innerHTML = "";
            pw2Check.innerHTML = "";
            nameCheck.innerHTML = "";
            phoneCheck.innerHTML = "";
            emailCheck.innerHTML = "";
            agreeCheck.innerHTML = "";
            totalAgreeeCheck.innerHTML = "";
            id = '';
            return false;
        }else if(!(cAId.test(id))){
            idCheck.innerHTML = "6~12자의 영문 소문자, 숫자만 사용 가능합니다.";
            $("#id").focus();
            pw1Check.innerHTML = "";
            pw2Check.innerHTML = "";
            nameCheck.innerHTML = "";
            phoneCheck.innerHTML = "";
            emailCheck.innerHTML = "";
            agreeCheck.innerHTML = "";
            totalAgreeeCheck.innerHTML = "";
            id = '';
            return false;
        }else if(pw1 == ""){
            pw1Check.innerHTML = "비밀번호를 입력하세요.";
            idCheck.innerHTML = "";
            pw2Check.innerHTML = "";
            nameCheck.innerHTML = "";
            phoneCheck.innerHTML = "";
            emailCheck.innerHTML = "";
            agreeCheck.innerHTML = "";
            totalAgreeeCheck.innerHTML = "";
            pw1.focus();
            return false;
        }else if(pw1.length<5 || pw1.length>9) {
            pw1Check.innerHTML = "패스워드를 6~8자 까지 입력해주세요.";
            idCheck.innerHTML = "";
            pw2Check.innerHTML = "";
            nameCheck.innerHTML = "";
            phoneCheck.innerHTML = "";
            emailCheck.innerHTML = "";
            agreeCheck.innerHTML = "";
            totalAgreeeCheck.innerHTML = "";
            pw1.focus();
            pw1.select();
            return false;
        }else if(pw2 == ""){
            pw2Check.innerHTML = "비밀번호를 입력하세요.";
            idCheck.innerHTML = "";
            pw1Check.innerHTML = "";
            nameCheck.innerHTML = "";
            phoneCheck.innerHTML = "";
            emailCheck.innerHTML = "";
            agreeCheck.innerHTML = "";
            totalAgreeeCheck.innerHTML = "";
            pw2.focus();
            return false;
        }else if(pw2!=pw1) {
            pw2Check.innerHTML = "비밀번호가 같지 않습니다.";
            idCheck.innerHTML = "";
            pw1Check.innerHTML = "";
            nameCheck.innerHTML = "";
            phoneCheck.innerHTML = "";
            emailCheck.innerHTML = "";
            agreeCheck.innerHTML = "";
            totalAgreeeCheck.innerHTML = "";
            pw2.focus();
            pw2.select();
            return false;
        }else if(name == "") {
            nameCheck.innerHTML = "이름을 입력하세요.";
            idCheck.innerHTML = "";
            pw1Check.innerHTML = "";
            pw2Check.innerHTML = "";
            phoneCheck.innerHTML = "";
            emailCheck.innerHTML = "";
            agreeCheck.innerHTML = "";
            totalAgreeeCheck.innerHTML = "";
            name.focus();
            name.select();
            return false;
        }else if(!(cAName.test(name))){
            nameCheck.innerHTML = "한글로 입력하세요.";
            $("#name").focus();
            idCheck.innerHTML = "";
            pw1Check.innerHTML = "";
            pw2Check.innerHTML = "";
            phoneCheck.innerHTML = "";
            emailCheck.innerHTML = "";
            agreeCheck.innerHTML = "";
            totalAgreeeCheck.innerHTML = "";
            name = '';
            return false;
        }else if(phone1 == "" || phone2 == "") {
            phoneCheck.innerHTML = "전화번호을 입력하세요.";
            idCheck.innerHTML = "";
            pw1Check.innerHTML = "";
            pw2Check.innerHTML = "";
            nameCheck.innerHTML = "";
            emailCheck.innerHTML = "";
            agreeCheck.innerHTML = "";
            totalAgreeeCheck.innerHTML = "";
            phone1.focus();
            phone1.select();
            return false;
        }else if(!(cAPhone.test(phone1))){
            phoneCheck.innerHTML = "숫자를 입력하세요.";
            $("#phone1").focus();
            idCheck.innerHTML = "";
            pw1Check.innerHTML = "";
            pw2Check.innerHTML = "";
            nameCheck.innerHTML = "";
            emailCheck.innerHTML = "";
            agreeCheck.innerHTML = "";
            totalAgreeeCheck.innerHTML = "";
            phone1 = '';
            return false;
        }
        else if(!(cAPhone.test(phone2))){
            phoneCheck.innerHTML = "숫자를 입력하세요.";
            $("#phone2").focus();
            idCheck.innerHTML = "";
            pw1Check.innerHTML = "";
            pw2Check.innerHTML = "";
            nameCheck.innerHTML = "";
            emailCheck.innerHTML = "";
            agreeCheck.innerHTML = "";
            totalAgreeeCheck.innerHTML = "";
            phone2 = '';
            return false;
        }else if(email == "") {
            emailCheck.innerHTML = "이메일 주소를 입력하세요.";
            idCheck.innerHTML = "";
            pw1Check.innerHTML = "";
            pw2Check.innerHTML = "";
            phoneCheck.innerHTML = "";
            nameCheck.innerHTML = "";
            agreeCheck.innerHTML = "";
            totalAgreeeCheck.innerHTML = "";
            $("#email").focus();
            return false;
        }else if(!(cAEmail.test(email))){
            emailCheck.innerHTML = "이메일 주소를 확인하세요.";
            $("#email").focus();
            idCheck.innerHTML = "";
            pw1Check.innerHTML = "";
            pw2Check.innerHTML = "";
            phoneCheck.innerHTML = "";
            nameCheck.innerHTML = "";
            agreeCheck.innerHTML = "";
            totalAgreeeCheck.innerHTML = "";
            email = '';
            return false;
        }else if($("input[name='chk1']").is(":checked") == false && $("input[name='chk2']").is(":checked") == false && $("input[name='chk3']").is(":checked") == false){
            agreeCheck.innerHTML = "선택해주세요.";
            idCheck.innerHTML = "";
            pw1Check.innerHTML = "";
            pw2Check.innerHTML = "";
            phoneCheck.innerHTML = "";
            nameCheck.innerHTML = "";
            emailCheck.innerHTML = "";
            totalAgreeeCheck.innerHTML = "";
            return false;
        }else if($("input[name='chk4']").is(":checked") == false && $("input[name='chk5']").is(":checked") == false && $("input[name='chk6']").is(":checked") == false) {
            totalAgreeeCheck.innerHTML = "동의해주세요.";
            idCheck.innerHTML = "";
            pw1Check.innerHTML = "";
            pw2Check.innerHTML = "";
            phoneCheck.innerHTML = "";
            nameCheck.innerHTML = "";
            emailCheck.innerHTML = "";
            agreeCheck.innerHTML = "";
            return false;
        }else{
            idCheck.innerHTML = "";
            alert(id+"님 환영합니다!");
            window.location = 'index.html';
            id ="";
            pw ="";
        };       
    };
    
    $('.confirm1').click(function(){
        let id = document.querySelector('#id').value;
        let idCheck = document.querySelector('#idMsg');
        let cAId = /^[a-z0-9][a-z0-9_\-]{5,13}$/;

        if(cAId.test(id)){
            alert("사용가능한 아이디입니다.")
            idCheck.innerHTML = "";
        }else if(!(cAId.test(id))){
            idCheck.innerHTML = "6~12자의 영문 소문자, 숫자만 사용 가능합니다.";
            $("#id").focus();
            id = '';
            return false;
        }
    });
    $('.confirm2').click(function(){
        let email = document.querySelector('#email').value;
        let emailCheck = document.querySelector('#emailMsg');
        let cAEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

        if(cAEmail.test(email)){
            alert("사용가능한 이메일입니다.");
            emailCheck.innerHTML = "";
        }else if(email == "") {
            emailCheck.innerHTML = "이메일 주소를 입력하세요.";
            $("#email").focus();
            return false;
        }else if(!(cAEmail.test(email))){
            emailCheck.innerHTML = "이메일 주소를 확인하세요.";
            $("#email").focus();
            email = '';
            return false;
        }
    });
})