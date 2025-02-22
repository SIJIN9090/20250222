import React from "react";
import styled from "styled-components";
import KakaoMap from "../map/KakaoMap";
import Sub from "./imgs/sub.jpg";

function Directions() {
  return (
    <DirectionsContainer>
      <DirectionSection>
        <DirectionTitle>
          <h1>오시는 길</h1>
        </DirectionTitle>

        <MapWrapper>
          <MapBox>
            <KakaoMap />
          </MapBox>
        </MapWrapper>

        <InfoWrapper>
          <InfoBox>
            <InfoImage src="/images/building.png" alt="건물 위치" width="100px" height="100px" />
            <InfoText>
              <h2>건물 위치</h2>
              <p>서울특별시 구로구 시흥대로 163길 33 2층, 3층 (주호타워)</p>
            </InfoText>
          </InfoBox>

          <InfoBox>
            <InfoImage src="/images/bus.png" alt="버스 노선" width="100px" height="100px" />
            <InfoText>
              <h2>버스 노선</h2>
              <p>구로디지털단지역 앞 정류장에서 5536번, 5620번, 5625번, 5630번 버스 탑승 →  
                  "SK V1센터 정류장"에서 하차 →  
                  구트코딩 학원까지 도보 이동 (약 3분 소요)</p>
            </InfoText>
          </InfoBox>

          <InfoBox>
            <InfoImage src={Sub} alt="지하철" width="500px" height="300px" />
            <InfoText>
              <h2>지하철</h2>
              <p>지하철 2호선 구로디지털단지역에서 하차 →  
                  3번 출구로 나와 직진 →  
                  150m 정도 이동 후 SK V1센터 방향으로 좌회전 →  
                  약 3분 정도 직진하면 구트코딩 학원 도착!</p>
            </InfoText>
          </InfoBox>
        </InfoWrapper>
      </DirectionSection>
    </DirectionsContainer>
  );
}

const DirectionsContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DirectionSection = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DirectionTitle = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 100px;
  text-align: left;
  h1 {
    font-weight: bold;
    font-size: 36px;
    font-family: "Noto Sans KR", serif;
  }
`;

const MapWrapper = styled.div`
  margin-top: 30px;
  width: 1000px;
  display: flex;
  justify-content: center;
`;

const MapBox = styled.div`
  width: 100%;
  height: 350px;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoWrapper = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.15);
  }
`;

const InfoImage = styled.img`
  width: ${(props) => props.width || "80px"};
  height: ${(props) => props.height || "80px"};
  margin-right: 20px;
  object-fit: contain;
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
  }
  p {
    font-size: 16px;
    color: #555;
    line-height: 1.6;
    max-width: 600px;
  }
`;

export default Directions;
