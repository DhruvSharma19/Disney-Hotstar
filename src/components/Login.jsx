import React from "react";
import styled from "styled-components";

const Container = styled.section`
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
  max-width: 650px;
  width: 100%;
`;

const LogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const Button = styled.button`
  font-weight: bold;
  width: 100%;
  color: #f9f9f9;

  background-color: #0063e5;
  margin-bottom: 12px;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0483ee;
  }
`;

const Desc = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;

`;

const LogoTwo=styled.img`
    max-width: 600px;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;

`;

const Login = () => {


  



  return (
    <Container>
      <Content>
        <Box>
          <LogoOne src="images/cta-logo-one.svg" />
          <Button>GET ALL THERE</Button>
          <Desc>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Desc>
          <LogoTwo src="images/cta-logo-two.png" />
        </Box>
        <BgImg />
      </Content>
    </Container>
  );
};

export default Login;
