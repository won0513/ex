import React from 'react';
import { useState } from 'react';
import axios from "axios";
import LoadingModal from './loading_modal.js';
function Recommand () {
  const [userInput, setUserInput] = useState(""); //사용자 입력 내용
  const [result, setResult] = useState({}); //판례 추천 결과- [일련 번호, 판결요지]*5
const [check, setCheck] = useState("0"); //상태(서버에 post하면 submit으로 바꿈)
// 사용자 입력 내용 화면에 출력, textarea높이 조절
  const onUiChange = (e) => {
    setUserInput(e.target.value);
  };
  const handleSubmit = (e) => {
    // submit을 할 때 페이지 자체가 새로고침이 되는 것을 막음
    e.preventDefault();
    setCheck('submit');
    const formData = new FormData();
    formData.append('input', userInput)
    setResult({});
    axios.post('/recommand', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
  }).then((res)=> setResult(res.data)) 
  };
    return(
      <div>
        <header id="header">
          </header>
        <nav id="nav">&nbsp;</nav>
        <div id="section">
          <div style={{backgroundColor:'#EEEEEE', display:'flex', borderRadius: '10px 10px 10px 10px / 10px 10px 10px 10px', position: 'absolute', left:'5dvw',  width:'42.5dvw', height:'90dvh'}}>
             <form style= {{fontSize:28, margin: 'auto'}} onSubmit={handleSubmit}>
             <textarea spellcheck="false" style={{fontSize:20, margin: 'auto'}} id='recommandInput' onChange={onUiChange}  name="input" cols="40" rows="3" value={userInput} placeholder="상황을 입력해주세요"></textarea>
             <input className='b' type="submit" value="결과 보기"/>
             </form>
          </div>
          {(typeof result.pan_list === 'undefined' ? (
              <>{(check === 'submit') && <LoadingModal/>}
              <div style={{backgroundColor:'#EEEEEE', display:'flex', justifyContent: 'center', alignContent: 'center', borderRadius: '10px 10px 10px 10px / 10px 10px 10px 10px', position: 'absolute', left:'52.5dvw', width:'42.5dvw', height:'90dvh', fontSize:80}}>
                    <p style={{margin:'auto'}}>?</p>
                </div></>) : (
                <div style={{ display:'inline-block', display:'flex', flexDirection:'column', justifyContent:'space-between', position: 'absolute', left:'52.5dvw', width:'42.5dvw', height:'93dvh'}}>
                  {result.pan_list.map((r, idx) => {
                    return (
                      <p className='block'>
                            <p style={{fontSize: '14px'}}>{r.slice(0, 100)}</p>
                      </p>
                    )})}
                </div>
              ))}
        </div>
        <aside id="aside">&nbsp;</aside>
        <footer></footer>
      </div>
    )}
export default Recommand;
