// fix: 카페 점령된것/점령 안된것 모양, 숫자,
// todo: 기본으로 카페 목록들 클릭이 돼서 나오게
// todo:지도에 확대/축소 표시 붙이기, 현위치 버튼.
// todo:일단 되게 만들기 
// todo:Link href와 a href 로 /register로 가게 될 때의 차이?
// 노란 라인 없애기
// 카카오 맵 구조 다시한번 보기 
// prettier가 안되는 이유?? 
//  console이 서버에 떴다가 , 클라이언트쪽에 떴다가 왔다갔다 뜨는건 왜 그러나

// https://github.com/zeit/next-plugins/tree/master/packages/next-css 깃헙 설명에 css module이 있다는 것과 없다는 것의 차이가 뭔지 모르겠음. 
// css 파일을 map에만 import하니까 안됨. 오히려 index.js에만 넣으면 됨. 


import React, { useEffect, useState, useMemo, useCallback } from 'react';

import Link from 'next/link';
import { Map } from './map';
import RegisterList from './registerList';
import "../style.css"

const Home = () => {
  const [list, setList] = useState([]);
  const changeList = useCallback((data) => {
    setList(data);
  }, [])

  console.log('index')

	return (
		<div>
      <Map setList={changeList} />
			<RegisterList list={list} />
		</div>
	);
};

export default Home;
