import { useState } from 'react';
import './modal.scss';
import Head from 'next/head';
import StarRatings from 'react-star-ratings';

const Modal = ({ showModal, cafeInfo, setCafeInfo }) => {
  const [starRate, setStarRate] = useState(0);

  const change = {onChange : (e)=> {
    setCafeInfo({...cafeInfo, [e.target.name]: e.target.value})}}

  return (
    <div className="modal" id="modal">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>
      <div className="content">
        <h2>
          <span style={{ color: 'red' }}>{cafeInfo.name}</span> 카페에 대한 점령을 진행합니다
        </h2>
        <div className="content">
          <div>24시간 카페인가요?</div>
            <input type="radio" name="open24Hour" value="0" {...change}/> 네
            <input type="radio" name="open24Hour" value="1" {...change}/> 아니오
            <br />
            <br />
          <div>콘센트는 풍족한가요?</div>
            <input type="radio" name="enoughOutlets" value="LACK" {...change}/> 부족
            <input type="radio" name="enoughOutlets" value="NORMAL" {...change}/> 그럭저럭
            <input type="radio" name="enoughOutlets" value="MANY" {...change}/> 넉넉
            <br />
            <br />
          <div>가장 작은 사이즈의 아이스 아메리카노 가격은 얼마인가요? 숫자만 (ex: 3000)
            <br />
            <input type="text" name="priceIceAmericano" {...change}/> 
          </div>
          <br />
          <br />
          <div>카페에 대한 종합적인 당신의 평점은?</div>
          <StarRatings
            rating={starRate}
            starRatedColor="#f9ca24"
            changeRating={setStarRate}
            numberOfStars={5}
            name="totalRate"
            starDimension="25px"
            starSpacing="0px"
          />
        </div>
        <div className="actions">
          <button
            className="conquer-button"
            onClick={() => {
              console.log('점령완료');
              showModal(false);
              //db로 정보 날리기
            }}
          >
            점령하기
          </button>
          <button
            className="cancel-button"
            onClick={() => {
              console.log('점령취소');
              showModal(false);
            }}
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
