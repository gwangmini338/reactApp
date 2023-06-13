import './App.css';
import { Component, useState, useEffect } from 'react';
import data from './data.js';


function App() {
  let [datas, setDatas] = useState(data);
  let [modal, setModal] = useState(false);
  let [index, setIndex] = useState(0);
  let images = [
    'img/8.png',
    'img/9.png',
    'img/10.png',
    'img/11.png',
    'img/12.png'
  ];
  let [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    let interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div className="slide-show">
        {images.map((image, index) => (
          <img
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            src={image}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>
      <div className='img'>
          <img className='process' src='img/6.png'></img>
          <div className='text-blow-img'>스마트팜 원리</div>
      </div>
      <div className="black-nav">
        <h3>스마트팜 추천 작물 소개⛅</h3>
      </div>
      {
        datas
          .filter((row) => row.id >= 0 && row.id <= 4)
          .map(function (row, i) {
            return (
              <div className="list" >
                <div className="title" onClick={() => {
                  modal ? setModal(false) : setModal(true);
                  setIndex(i);
                }}>{row.title}</div>
                <div className="contents">{row.date}</div>
              </div>

            )
          })

      }
      {
        datas
          .filter((row) => row.id >= 5 && row.id <= 8)
          .map(function (row, i) {
            if (row.id === 5) {
              return (<div className="list1" key={row.id}>
                <div className="title1" onClick={() => {
                  modal ? setModal(false) : setModal(true);
                  setIndex(row.id);
                }}>{row.title}</div>
              </div>
              )
            }
            if (row.id === 6) {
              return (<div className="list2" key={row.id}>
                <div className="title2" onClick={() => {
                  modal ? setModal(false) : setModal(true);
                  setIndex(row.id);
                }}>{row.title}</div>
              </div>
              )
            }
            if (row.id === 7) {
              return (<div className="list3" key={row.id}>
                <div className="title3" onClick={() => {
                  modal ? setModal(false) : setModal(true);
                  setIndex(row.id);
                }}>{row.title}</div>
              </div>
              )
            }
            if (row.id === 8) {
              return (<div className="list4" key={row.id}>
                <div className="title4" onClick={() => {
                  modal ? setModal(false) : setModal(true);
                  setIndex(row.id);
                }}>{row.title}</div>
              </div>
              )
            }
          })
      }

      {modal ? <Modal modal={modal}
        setModal={setModal}
        datas={datas}
        setDatas={setDatas}
        index={index}
      ></Modal> : ''}
    </div>


  );
}
function Modal(props) {
  let [modal, setModal] = useState('');
  let handleButtonClick = () => {
    let link = '';
    if(props.index ===0){
      link = 'http://nongsaro.go.kr/portal/farmTechMain.ps?menuId=PS65291&stdPrdlstCode=VC010804';
    }
    else if(props.index ===1){
      link = 'http://nongsaro.go.kr/portal/farmTechMain.ps?menuId=PS65291&stdPrdlstCode=VC010803';
    }
    else if(props.index ===2){
      link = 'http://nongsaro.go.kr/portal/farmTechMain.ps?menuId=PS65291&stdPrdlstCode=VC010806';
    }
    else if(props.index ===3){
      link = 'http://nongsaro.go.kr/portal/farmTechMain.ps?menuId=PS65291&stdPrdlstCode=VC010901';
    }
    else if(props.index ===4){
      link = 'http://nongsaro.go.kr/portal/farmTechMain.ps?menuId=PS65291&stdPrdlstCode=VC011302';
    }
    if (link !==''){
      window.location.href = link;
    }
  };
  return (
    <div className="modal">
      <div className="modal-body">
        <div className="modal-title">{props.datas[props.index].title}</div>
        <div className="modal-date">{props.datas[props.index].date}</div>
        <div className="modal-contents">{props.datas[props.index].content}</div>
        {(props.index >=0 && props.index <=4) && (
          <button className='modal-button' onClick={handleButtonClick}>
            상세정보
          </button>
        )}
        <button
          className="modal-button"
          onClick={() => {
            props.setModal(false);
          }}
        >
          확인
        </button>
      </div>
    </div>
  )
}
export default App;