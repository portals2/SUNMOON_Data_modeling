//회원가입 팝업창

import { useState } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

function LoninPopup(props){

    const[id, setId] = useState("");
    const[date, setDate] = useState("");
    const[time, setTime] = useState("");
    const[type, setType] = useState("");
    const[weather, setWeather] = useState("");
    const[temperatuers, setTemperatuers] = useState("");
    const[lot, setLot] = useState("");


    
    const createCar = () => {
        Axios.post('http://localhost:3001/create', {
            id: id,
            date: date,
            time: time,
            type: type,
            weather: weather,
            temperatuers: temperatuers,
            lot: lot
        }).then(() => {
            alert('success');
            document.getElementById("a").value ='';
            document.getElementById("b").value ='';
            document.getElementById("c").value ='';
            document.getElementById("d").value ='';
            document.getElementById("e").value ='';
            document.getElementById("f").value ='';
            document.getElementById("g").value ='';
        });

    };



    return(
        <div className='modal-login'>
            <img className="qpImage" alt="무제-1" src="img/무제-1.png" />
            <p>ID<input className="input-in"></input></p>
            <p>PW<input className="input-in"></input></p>
            {/*버튼 클릭하면 회원가입 페이지로 이동하게 해야함*/}
            <button className='btn-in'><b>회원가입</b></button>
            {/*로그인 부분 구현 해야한 (현재 창 닫기 버튼)*/}
            <button className='btn-in'onClick={props.flag}><b>로그인</b></button>
            <p></p>
            <label>id: </label>
            <input id='a' type="text" onChange={(event) => {setId(event.target.value);}}></input>
            <p></p>
            <label>date: </label>
            <input id='b' type="text" onChange={(event) => {setDate(event.target.value);}}></input>
            <p></p>
            <label>time: </label>
            <input id='c' type="text" onChange={(event) => {setTime(event.target.value);}}></input>
            <p></p>
            <label>type: </label>
            <input id='d' type="text" onChange={(event) => {setType(event.target.value);}}></input>
            <p></p>
            <label>weather: </label>
            <input id='e' type="text" onChange={(event) => {setWeather(event.target.value);}}></input>
            <p></p>
            <label>temperatuers: </label>
            <input id='f' type="text" onChange={(event) => {setTemperatuers(event.target.value);}}></input>
            <label>lot: </label>
            <p></p>
            <input id='g' type="text" onChange={(event) => {setLot(event.target.value);}}></input>          


            <button onClick={createCar}>Add a car</button>
                
            


        
    </div>
    );
}

export default LoninPopup;