import { useState } from 'react';
import './modal.scss';
import Head from 'next/head';
import StarRatings from 'react-star-ratings';

const Modal = ({ showModal, cafeInfo }) => {
  const [starRate, setStarRate] = useState(0);

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
          <span style={{ color: 'red' }}>{cafeInfo.name}</span> 카페에 대한
          점령을 진행합니다
        </h2>
        <div className="content">
          <div>24시간 카페인가요?</div>
          <input type="radio" name="24hr" value="true" /> 네
          <input type="radio" name="24hr" value="false" /> 아니오
          <br />
          <br />
          <div>콘센트는 풍족한가요?</div>
          <input type="radio" name="concent" value="true" /> 부족
          <input type="radio" name="concent" value="false" /> 그럭저럭
          <input type="radio" name="concent" value="true" /> 넉넉
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
