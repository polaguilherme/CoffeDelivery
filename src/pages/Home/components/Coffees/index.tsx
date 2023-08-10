import React from "react";
import { CoffeeContainer, CoffeeList } from "./style";
import { TitleText } from "../../../../components/Typography";
import CoffeCards from "../CoffeCards";
import { coffees } from "../../../../data/coffees";

export default function Coffees() {
  return (
    <CoffeeContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>
      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeCards key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </CoffeeContainer>
  );
}
