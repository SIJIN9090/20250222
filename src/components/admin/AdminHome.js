import React, { useState } from "react";
import styled from "styled-components";
import AdminUserList from "./user/AdminUserList";

import Review from "../board/review/Review";
import AdminReservationList from "./reservation/AdminReservationList";
import OnlineCounsel from "../board/onlinecounsel/OnlineCounsel";
import Review_B from "./button/Review_B";
import NoticeList_B from "./button/NoticeList_B";
import NoticeTable from "../board/notice/NoticeTable";


function AdminHome() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const data = [
    {
      title: "회원 관리",
      content: <AdminUserList />,
    },
    {
      title: "공지사항 관리",
      content: <NoticeTable />,
      button: <NoticeList_B />,
    },
    {
      title: "온라인예약 관리",
      content: <AdminReservationList />,
    },
    {
      title: "온라인상담 관리",
      content: <OnlineCounsel />,
      button: <Review_B />,
    },
    {
      title: "고객리뷰 관리",
      content: <Review />,
    },
  
   
    
  ];

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  const getHomeTitle = () => {
    return data[selectedIndex].title;
  };

  return (
    <HomeContainer>
      <HomeSection>
      <Homeva>
        <VaTitle>
          <h3>admin</h3>
        </VaTitle>
        <Vacontent>
          <ul>
            {data.map((item, index) => (
              <li
                key={index}
                className={selectedIndex === index ? "active" : ""}
                onClick={() => handleClick(index)}
              >
                <button>{item.title}</button>
              </li>
            ))}
          </ul>
        </Vacontent>
      </Homeva>
      <HomeSectionA>
        <HomeTitle>
          <h1>{getHomeTitle()}</h1>
        </HomeTitle>
      </HomeSectionA>
      <HomeSectionB>
        <div>{data[selectedIndex].content}</div>
      </HomeSectionB>
      <HomeSectionC>{data[selectedIndex].button}</HomeSectionC>
      </HomeSection>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  height: 1600px;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomeSection = styled.div`
  width: 1280px;
  height: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 200px 80px 1000px; 
  grid-template-rows: 50px 100% 150px; 

`;



const Homeva = styled.div`
  margin-top: 50px;
  background-color: #111111;
  width: 160px;
   height: 1235px;
  position: absolute;
  grid-row: span 3;
  display: flex;
  flex-direction: column; /* 세로로 정렬 */
  align-items: center; /* 가로 중앙 */
`;

const VaTitle = styled.div`
  background-color: #111111;
  color: white;
    display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 80px;
  font-size: 32px;
 font-weight: 700;
`;

const Vacontent = styled.div`
  display: flex;
  flex-direction: column; /* 세로로 정렬 */
  justify-content: center; /* 세로 중앙 정렬 */
  align-items: center; /* 가로 중앙 정렬 */
  width: 100%; /* 버튼이 가운데 정렬되도록 넓이 조정 */

  li {
 
    font-size: 20px;
    font-weight: 500;
    border: none;
    background-color: #f0f0f0;
    width: 125px;
    height: 80px;
    text-align: center;
    padding: 10px;
    cursor: pointer;
        display: flex;
  justify-content: center; /* 세로 중앙 정렬 */
  align-items: center; /* 가로 중앙 정렬 */
  }
  button{

  }
  li.active {
    background-color: #003cd2;
  }
`;
// -----------------------------------------------------------------
const HomeSectionA = styled.div`
 background-color: #111111;
 grid-column: 3;
  grid-row: 1;
  top: 50px;
  position: relative;
justify-content: center; /* 세로 중앙 정렬 */
 align-items: center; /* 가로 중앙 정렬 */

 display: flex;
  width: 1000px;
  height: 70px;
`;

const HomeTitle = styled.div`
  
  color: #ffffff;
  padding: 20px;
 font-size: 32px;
    font-weight: 700;
 display: flex;
`;
// ------------------------------------------------------------------------
const HomeSectionB = styled.div`
 position: relative;
top:-35px;
left: -110px;
  height: 1000px;
 grid-column: 3;
  grid-row: 2;
transform: scale(0.78);
 display: flex;
`;
// ------------------------------------------------------------------------------
const HomeSectionC = styled.div`
 position: relative;
top:-430px;

 height: 70px;
   width: 1000px;
 grid-column: 3;
  grid-row: 3;

  background-color: #111111;
`;


export default AdminHome;
