import {useState} from 'react';

function Search(props) {

    const [inputText, setInputText] = useState('');

    const onChange = (evt) => {
        setInputText(evt.target.value);
    };

    const submitHandler = (evt) => {
        evt.preventDefault();
        if (!inputText.replace(/^\s+|\s+$/g, '')) {
            alert('검색어를 입력해주세요!');
            return
        }
        props.setPlace(inputText + ' 주차장');
        setInputText('');
    };

    return(
        <form className='search' onSubmit={submitHandler}>
            <input className='input'
            placeholder='장소를 입력해주세요.'
            onChange={onChange}
            value={inputText}>
            </ input>
            <button className='btn' type='submit'><b>검색</b></button>
            <div></div>
        </form>
    );
}

export default Search;