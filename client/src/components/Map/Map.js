import React, { useEffect } from "react";
import {useState} from 'react';
import Backdrop from "./Backdrop";
import descPopup from "./descPopup";
import Axios from "axios";

const { kakao } = window;

const Map = ({ Search }) => {

    const [flag, setFlag] = useState(false);

    function delHandler(){
        setFlag(true);
    }
    function closeHandler(){
        setFlag(false);
    }

    const[cars, setCars] = useState([]);
    const[cars2, setCars2] = useState([]);
    const[aaa, setAaa] = useState("");
    const[bbb, setBbb] = useState("");
    const[ccc, setCcc] = useState("");

    Axios.get('http://localhost:3001/read').then((res) => {
        setCars(res.data);
    
        if (cars.length == 10){
            return (
                
                setAaa('10분 안에 빌 확률: 25% 입니다.'),
                setBbb('30분 안에 빌 확률: 50% 입니다.'),
                setCcc('1시간 안에 빌 확률: 100% 입니다.')
                
            )
        }
    
    });

    useEffect(() => {
        const container = document.getElementById('myMap');
        const options = {
            center: new kakao.maps.LatLng(37.5543169, 126.9711254), //지도 중심좌표
            level: 3 //지도 확 레벨, 높아질수록 높고 넓게 봄
        };

        const map = new kakao.maps.Map(container, options);

        //검색
        const ps = new kakao.maps.services.Places();

        ps.keywordSearch(Search, placesSearchCB);

        function placesSearchCB(data, status) {
            if (status === kakao.maps.services.Status.OK) {
               
                let bounds = new kakao.maps.LatLngBounds();
               
                for (let i = 0; i < data.length; i++) {
                    displayMarker(data[i]);
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                }

                map.setBounds(bounds);
            } 
            else if (status === kakao.maps.services.Status.ZERO_RESULT) {
                alert('검색 결과가 존재하지 않습니다.');
                return;
            }
            else if (status === kakao.maps.services.Status.ERROR) {
                alert('검색 결과 중 오류가 발생했습니다.');
                return;
            }
        }

        
        //마커
        let imageSrc = 'img/Marker_green.png';
        let imageSize = new kakao.maps.Size(54, 54);
        let imageOption = {offset: new kakao.maps.Point(30, 60)};
        let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

        function displayMarker(place) {
            let marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.y, place.x),
                image: markerImage
            });

            let overlayPosition = new kakao.maps.LatLng(36.79657052114158, 127.10582971907283);

            let overlay = new kakao.maps.CustomOverlay({
            content: document.getElementById('wrap'),
            position: overlayPosition
            });

            kakao.maps.event.addListener(marker, 'click', function() {
                overlay.setMap(map);
            });

            function closeOverlay() {
                overlay.setMap(null)
            }
        }
    }, [Search]);

    return(
        <div id='myMap'>
            <div id="wrap">
                <div className="info">
                    <img className="tag" src="img/Tag.png"></img>
                    <img className="close" src="img/x_mark.png"></img>
                        <div className="body">
                            <div className="capacity">{cars.length}/10</div>
                            <div className="title">이마트트레이더스 천안아산점 야외주차장</div>
                            <div className="title">{aaa}</div>
                            <div className="title">{bbb}</div>
                            <div className="title">{ccc}</div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Map;