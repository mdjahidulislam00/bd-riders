export default function FromValidation (userInfo, isNewUser) {
    const fromError ={};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(isNewUser && userInfo.name === ' '){
        fromError.name = 'name is required *';
    }
    if(userInfo.email === ' '){
        fromError.email = 'email is required *';
    } else if(!email_pattern.test(userInfo.email)){
        fromError.email = 'email is not invalid';
    }
    if(userInfo.password === ' '){
        fromError.password = 'password is required *';
    } else if(userInfo.password.length < 6){
        fromError.password='password must be at least 6 characters';
    }

    return fromError;
}