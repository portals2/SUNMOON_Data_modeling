// 회원가입 버튼입니다.

import {useState} from 'react';
import Backdrop from './Backdrop';
import SignupPopup from './SignupPopup';

function Sign_up(){

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
            <button className='btn' onClick={delHandler}><b>회원가입</b></button>
        </div>
        {flag ? <SignupPopup flag={closeHandler}/> : null}
        {flag ? <Backdrop flag={closeHandler}/> : null}
    </div>
    );
}

export default Sign_up;

