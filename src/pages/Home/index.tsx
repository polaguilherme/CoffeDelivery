import CoffeesCards from "./components/Coffees";
import { Intro } from "./components/Intro";
import { HomeContainer } from "./style";

export default function Home() {
  return (
    <HomeContainer>
      <Intro />
      <CoffeesCards />
    </HomeContainer>
  );
}
