import React from "react";
import styled from "styled-components";

const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100vh;
  text-align: center;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImg = styled.div`
  background-image: url("images/login-background.jpg");
  height: 100%;
  background-position: top;
  background-size: cover;
  position: absolute;
  z-index: -1;
  top: 0px;
  left: 0px;
  right: 0px;
  background-repeat: no-repeat;
`;

const Box = styled.div`
  max-width: 30vw;
  width: 100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:20px;

  h1{
    color:white;
    font-weight:bolder;
  }

  button{
    width:100%;
    border-radius:20px;
    color:white;
    padding:15px;
    border:none;
    outline:none;
    background-color:blue;

  }

  input{
    width:100%;
    border-radius:20px;
    padding: 15px;
    font-size:20px;
    background-color:white;
    color:black;
    outline:none;
    font-weight:bold;
    text-align:center;


    ::placeholder{
      font-size:15px;
    }
  }
`;

const Signup = () => {
  return (
    <Container>
      <Content>
        <Box>
          <h1>Sign Up</h1>
          <input type="text" placeholder="Enter your name" />
          <input type="text" placeholder="Enter your email" />
          <input type="text" placeholder="Enter your password" />
          <button>Signup</button>
        </Box>
        <BgImg />
      </Content>
    </Container>
  );
};

export default Signup;
