import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Slide } from "react-awesome-reveal";

import { selectCars } from "../features/cars/carSlice";
import { useSelector } from "react-redux";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const cars = useSelector(selectCars);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <Container>
      <a>
        <img src="../images/logo.svg" />
      </a>

      <Menu>
        {cars &&
          cars.map((car, index) => (
            <p key={index}>
              <a href="#">{car}</a>
            </p>
          ))}
      </Menu>

      <Divider>
        <ShopMenu>
          <a>
            <AiOutlineMenu onClick={handleToggle} />
          </a>
          <p>
            <a href="#">shop</a>
          </p>
          <p>
            <a href="#">tesla account</a>
          </p>
        </ShopMenu>

        <NavMenu visibility={toggle}>
          <Slide>
            <NavMenuDivider>
              <CloseButton onClick={handleToggle} />
            </NavMenuDivider>
            <li>
              <a> Existing Inventory</a>
            </li>
            <li>
              <a>Used Inventory</a>
            </li>
            <li>
              <a>Trade-in</a>
            </li>
            <li>
              <a>Cybertruck</a>
            </li>
            <li>
              <a>Roadaster</a>
            </li>
            <li>
              <a>Something</a>
            </li>
            <li>
              <a>Something</a>
            </li>
            <li>
              <a>Something</a>
            </li>
          </Slide>
        </NavMenu>
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
  z-index:1;
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
    white-space: nowrap;
    margin-right: 120px;
    p {
      font-size: 15px;
      margin-right: -20px;
    }
  }
`;

const Divider = styled.div`
  @media (max-width: 768px) {
    margin-left: 120px;
    float: right;
  }
`;

const NavMenu = styled.div`
  position: fixed;
  background: white;
  top: 0;
  bottom: 0;
  right: 0;
  width: 300px;
  padding: 20px 0px;
  list-style: none;
  z-index: 10;
  display: ${(props) => (props.visibility ? "flex" : "none")};
  flex-direction: column;

  a:hover {
    background-color: grey;
    padding: 10px;
    border-radius: 300px;
    opacity: 0.3;
    color: white;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 240px;
  }

  li {
    margin-bottom: 10px;
    padding: 20px 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  a {
    font-weight: 600;
  }
`;

const CloseButton = styled(AiOutlineClose)`
  font-weight: 600;
  margin-right: 10px;
  cursor: pointer;
`;

const NavMenuDivider = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default Header;
