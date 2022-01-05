// 회원가입 버튼입니다.


import {useState} from 'react';
import Backdrop from './Backdrop';
import LoninPopup from './LoninPopup';
import SignupPopup from "../Sign_up/SignupPopup";

function Login(){

    const [flag, setFlag] = useState(false);

    function delHandler(){
        setFlag(true);
    }
    function closeHandler(){
        setFlag(false);
    }

    return(
        <div className='card'>
            <div className='actions'>
                <button className='btn' onClick={delHandler}><b>로그인</b></button>
            </div>
            {flag ? <LoninPopup flag={closeHandler}/> : null}
            {flag ? <Backdrop flag={closeHandler}/> : null}


        </div>
    );
}

export default Login;