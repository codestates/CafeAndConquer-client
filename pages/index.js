// fix: 카페 점령된것/점령 안된것 모양, 숫자,
// todo: 기본으로 카페 목록들 클릭이 돼서 나오게
// todo:목록 계속 더해지는 것 빼기
// todo:지도에 확대/축소 표시 붙이기, 현위치 버튼.
// todo:일단 되게 만들기 - template literal 안에서 뭘 하는게 어려운듯.
// todo:Link href와 a href 로 /register로 가게 될 때의 차이?

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Map } from './map';
import RegisterList from './registerList';

const Home = () => {
	const [list, setList] = useState([]);

	return (
		<div>
			<Head>
				<script
					type="text/javascript"
					src="//dapi.kakao.com/v2/maps/sdk.js?appkey=08621feb64d12ca619166a136815243f&libraries=services"></script>
			</Head>

			<div style={{ margin: '12px' }}>점령하실 카페를 선택해주세요</div>

			<Map setList={setList} />
			<RegisterList list={list} />
		</div>
	);
};

export default Home;
