import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f4f3;
`;

// WrapperBody ##############################################################

const WrapperBody = styled.div`
  width: 300px;
  height: 550px;
  color: #fff;
  background-color: #06a67e;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WrapperBodyTitle = styled.h1`
  color: #fff;
  font-family: "Montserrat";
  font-weight: 700;
  margin-bottom: 30px;
`;

const WrapperBodyText = styled.p`
  color: #fff;
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  width: 80%;
  margin-bottom: 50px;
`;

const WrapperBodyButton = styled.button`
  color: #fff;
  font-size: 16px;
  padding: 10px 70px;
  background-color: #06a67e;
  border: 1px solid #fff;
  border-radius: 30px;
  cursor: pointer;
`;

// WrapperForm ##############################################################

const WrapperBlock = styled.div`
  width: 500px;
  height: 550px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
`;

const WrapperBlockTitle = styled.h1`
  font-size: 36px;
  color: #38b593;
  font-family: "Montserrat";
  font-weight: bold;
`;

const WrapperBlockText = styled.p`
color: #9A9A9A;
font-family: "Montserrat";
font-weight: 400;
width: 80%;
font-size: 14px;
text-align: center;
margin-bottom: 20px;
`;

const WrapperBlockIcons = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 25px;
`;

const WrapperBlockIconsBlock = styled.div`
width: 40px;
height: 40px;
border: 1px solid #c4c4c4;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
:hover{
  transform: scale(1.3);
}
`;

const WrapperBlockIconsBlockImg = styled.img`
width: 20px;
height:20px;
`;

const WrapperForm = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 30px;
`;

const WrapperFormInput = styled.input`
border: 0;
padding: 20px 100px 20px 20px;
background-color: #F4F8F5;
font-size: 16px;
`;


export {
  Wrapper,
  WrapperBlock,
  WrapperBody,
  WrapperBodyTitle,
  WrapperBodyText,
  WrapperBodyButton,
  WrapperBlockTitle,
  WrapperBlockText,
  WrapperBlockIcons,
  WrapperBlockIconsBlock,
  WrapperBlockIconsBlockImg,
  WrapperForm,
  WrapperFormInput,
};
