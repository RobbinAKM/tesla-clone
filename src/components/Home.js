import React from "react";
import styled from "styled-components";
import Section from "./Section";
import axios from "axios";
import data from "../carInfo";

import Header from "./Header";

console.log(data);

const Home = () => {
  return (
    <Container>
      {data.map((item) => {
        return (
          <Section
            key={item.id}
            title={item.title}
            des={item.description}
            img={item.image}
            leftTx={item.leftBtnText}
            rightTx={item.rightBtnText}
          />
        );
      })}
      <Section
        title="Lowest Cost Solar Panels in America"
        des="Money-back gurantee"
        img="solar-panel.jpg"
        leftTx="Order now"
        rightTx="Learn more"
      />
      <Section
        title="Solar For New Roofs"
        des="Solar Roof Costs Less Than a New Roof"
        img="solar-roof.jpg"
        leftTx="Order now"
        rightTx="Learn more"
      />
      <Section title="Accessories" img="accessories.jpg" leftTx="Shop now" />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
`;

export default Home;
