//회원가입 팝업창
import { useState } from 'react';
import Axios from 'axios';

function SignupPopup(props){

    let divStyle = {color : 'white', fontSize: '20px'};

    const[cars, setCars] = useState([]);
    const[cars2, setCars2] = useState([]);
    const[aaa, setAaa] = useState("");
    const[bbb, setBbb] = useState("");
    const[ccc, setCcc] = useState("");

    Axios.get('http://localhost:3001/read').then((res) => {
        setCars(res.data);
    
        if (cars.length == 5){
            return (
                
                setAaa('10분 안에 빌 확률: 75% 입니다.'),
                setBbb('30분 안에 빌 확률: 100% 입니다.'),
                setCcc('1시간 안에 빌 확률: 100% 입니다.')
                
            )
        }
    
    });

    

    return(
    <div className='modal-signup'>
        <img className="qpImage" alt="무제-1" src="img/무제-1.png" />
        <h1 style={divStyle}>회원가입</h1>
        <p>아이디<input className="input-in"></input></p>
        <p>비밀번호<input className="input-in"></input></p>
        <p>비밀번호 확인<input className="input-in"></input></p>
        <button className='btn-in btn--alt'onClick={props.flag}><b>취소</b></button>
        {/*회원가입 부분 구현 해야한 (현재 창 닫기 버튼)*/}
        {/* 회원가입 버튼은 일정 조건을 만족하면 활성화 되게 */}
        <button className='btn-in'onClick={props.flag}><b>회원가입</b></button>

        {cars.length}
        <div>{aaa}</div>
        <div>{bbb}</div>
        <div>{ccc}</div>

    
    </div>

    
    );
}

export default SignupPopup;