//팝업의 배경

function Backdrop(props){
    return(
        <div className= 'backdrop' onClick={props.flag}></div>
    );
}


export default Backdrop;