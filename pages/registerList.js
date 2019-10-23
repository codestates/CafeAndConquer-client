import Link from 'next/link';
import styled from 'styled-components'

// confirm 팝업의 디자인을 변경할 수 있나? 아님 confirm 말고, 다른 팝업 써야 하나? 
// li 태그 칸 차지하는 block -> inline 변경 ..... 좀 더 세련된 방식으로 변경해야 할듯. 


// 저 위의 ../components/modal.js 여기 페이지에 components가 2개인데 어떻게 뜨나? 기본 export default로 설정한 애만 나가나? 

const registerList = ({ list, confirmRegister }) => {

  // console.log('register');
	const cafeList = list.map((elm, key) => {
		return (
      <Link href="/" key={key} >
        <LiName key={key} id='one-list'>
          <div className="grid-container">
            <DivList>
              <UL>
                <LiName>
                    {key + 1}. {elm.place_name}
                </LiName >
                {elm.phone? <LiPhone>
                  {elm.phone}
                </LiPhone>  : null }
                <LiAddress >
                  {elm.address_name}
                </LiAddress>
              </UL>
            </DivList>
            <DivButtons>
              <div> 
                <ConquerButton onClick={()=> {confirmRegister(elm.place_name, elm.phone, elm.address_name)}}>점령하기</ConquerButton>
              </div>
              <div>
                <button onClick={()=> {confirmRegister(elm.place_name, elm.phone, elm.address_name)}}>수정하기</button>
              </div>
              <div>
                <button onClick={()=> {confirmRegister(elm.place_name, elm.phone, elm.address_name)}}>삭제하기</button>
              </div>
            </DivButtons>
          </div>


        </LiName>
      </Link>
		);
	});

	return (
		<div>
      <br />
			<UL className="cafe-list">{cafeList}</UL>
		</div>
	);
};

const UL = styled.ul`
  padding-left: 10px;
  list-style: none;
`
const LiName = styled.li`
  list-style: none;
`
const LiPhone = styled.li`
  font: 13px solid gray;
  padding-left: 12px;
  list-style: none;
`
const LiAddress = styled.li`
  font: 13px solid gray;
  padding-left: 12px;
  list-style: none;
`
const DivList = styled.div`
  grid-column: 1;
`
const DivButtons = styled.div`
  grid-column: 2;
`
const ConquerButton = styled.button`
  background-color: #eccc68;
`

// 신기하게 ul에 display: inline; 붙이니까 점이 사라짐. 
// <style jsx >global로 해야하는 이유? global로 해야 뿌려진 다음것도 다 바꿔주게 되는건가? 

export default registerList;
