import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <a>
        <img src="../images/logo.svg" />
      </a>

      <Menu>
        <p>
          <a href="#">Model s</a>
        </p>
        <p>
          <a href="#">Model 3</a>
        </p>
        <p>
          <a href="#">Model x</a>
        </p>
        <p>
          <a href="#">Model y</a>
        </p>
      </Menu>
      <Divider>
        <ShopMenu>
          <p>
            <a href="#">shop</a>
          </p>
          <p>
            <a href="#">tesla account</a>
          </p>
          <Menubar>
            <div></div>

            <div></div>

            <div></div>
          </Menubar>
        </ShopMenu>
      </Divider>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  height: 40px;
  padding: 20px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-left:20px;
  margin-right:20px
  top: 0;
  left: 0;
  right: 0;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  flex:1;

  p {
    padding: 15px;
    flex-wrap:nowrap
    font-size: 18px;
    text-transform: uppercase;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const ShopMenu = styled(Menu)`
  p {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: flex;
    margin-right: 20px;
    white-space: nowrap;
    p {
      font-size: 15px;
    }
  }
`;

const Menubar = styled.div`
  margin-left: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: black;
    margin: 3.5px 0;
  }
`;

const Divider = styled.div`
  @media (max-width: 768px) {
    margin-left: 120px;
    float: right;
  }
`;

export default Header;
