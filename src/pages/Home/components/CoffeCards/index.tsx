import { useState } from "react";
import {
  CardPrice,
  CoffeeCardContainer,
  AddCartWrapper,
  DescriptionCoffe,
  NameCoffe,
  Tags,
} from "./style";
import coffeImage from "../../../../assets/Image.png";
import { RegularText, TitleText } from "../../../../components/Typography";
import Input from "../../../../components/QuantityInput";
import { ShoppingCart } from "phosphor-react";
import { formatMoney } from "../../../../utils/formatprice";
import { useCart } from "../../../../hooks/useCart";

export interface Coffe {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeeProps {
  coffee: Coffe;
}

export default function CoffeCards({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1);
  const { addCoffeInCart } = useCart();

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    setQuantity((state) => state - 1);
  }

  function handleAddInCart() {
    const coffeToAdd = {
      ...coffee,
      quantity: 1,
    };
    addCoffeInCart(coffeToAdd);
  }

  const formattedPrice = formatMoney(coffee.price);

  return (
    <CoffeeCardContainer>
      <img src={`/coffees/${coffee.photo}`} alt="" />

      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>

      <NameCoffe>{coffee.name}</NameCoffe>
      <DescriptionCoffe>{coffee.description}</DescriptionCoffe>

      <CardPrice>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {formattedPrice}
          </TitleText>
        </div>

        <AddCartWrapper>
          <Input
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={handleAddInCart}>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CardPrice>
    </CoffeeCardContainer>
  );
}
