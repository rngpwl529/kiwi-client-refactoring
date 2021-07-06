
//회원가입 필수 항목 체크
function signUpFillCheck(){

    if ( !email || !nickname || !password || !password2 ) {
        alert("모든 항목은 필수입니다");
        return false;
    };
}

//회원가입 이메일 유효성

function emailValid(){
    let emailValid = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
    //@는 하나만 입력가능/.은 하나만 입력가능/[A-Za-z]{1,3} 최소 한글자 최대 세글까지 입력 가능
    
    if(!emailValid.test(email.value)) {
        alert('이메일 형식이 맞지 않습니다');
        return false;
    }
}

//회원가입 비밀번호 유효성

function passwordValid(){
    let passwordValid = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    //비밀번호 영문자+숫자+특수조합(8~25자리 입력) 정규식
    
    if(!passwordValid.test(password.value)) {
        alert('비밀번호 영문자+숫자+특수조합을 하여 8~25자리를 입력해주세요');
        return false;
    }
}

//회원가입 비밀번호, 비밀번호 확인 일치 여부
function pwdEqualValid(){

    if(password.value !== password2.value){
        alert('비밀번호가 일치하지 않습니다');
        return false;
    }
}

//로그인 아이디 입력 체크
function signinIdValid(){
    if(email.value == ""){
        alert("아이디를 입력하세요");
    }
}

//로그인 비번 입력 체크
function signinPwdValid(){

    if(password.value == ""){
        alert("비밀번호를 입력하세요.");
    }
}

// 아이디, 비번 DB조회 맞으면 true, 아니면 false

export default module;