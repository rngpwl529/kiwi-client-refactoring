
//회원가입 필수 항목 체크
export const signUpFillCheck=(email, userName, password, passwordCheck)=>{

    if ( !email || !userName || !password || !passwordCheck ) {
        alert("모든 항목은 필수입니다");
        return false;
    }
}

//회원가입 이메일 유효성

export const emailValid=(email)=>{
    let emailValid = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
    //@는 하나만 입력가능/.은 하나만 입력가능/[A-Za-z]{1,3} 최소 한글자 최대 세글까지 입력 가능
    
    if(!emailValid.test(email)) {
        return false;
    }
    else{
        return true
    }
}

//회원가입 비밀번호 유효성

export const passwordValid=(password)=>{
    let passwordValid = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    //비밀번호 영문자+숫자+특수조합(8~25자리 입력) 정규식
    
    if(!passwordValid.test(password)) {
        return false;
    }
    else{
        return true
    }
}

// //회원가입 비밀번호, 비밀번호 확인 일치 여부
// export const pwdEqualValid=(password, passwordCheck)=>{

//     if(password !== passwordCheck){
//         return false;
//     }
// }

// //로그인 아이디 입력 체크
// export const signinIdValid=(email)=>{
//     if(email == ""){
//         console.log('a')
//     }
// }

// //로그인 비번 입력 체크
// export const signinPwdValid=(password)=>{

//     if(password == ""){
//         console.log('a')
//     }
// }

// 아이디, 비번 DB조회 맞으면 true, 아니면 false

export default module;