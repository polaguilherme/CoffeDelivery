import { HeaderButton, HeaderButtonContainer, HeaderContainer } from "./style";
import logo from "../../assets/coffe-delivery.svg";
import { MapPin, ShoppingCartSimple } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export default function Header() {
  const { cartQuantity } = useCart();
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to={"/"}>
          <img src={logo} alt="" />
        </NavLink>
        <HeaderButtonContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Criciuma, SC
          </HeaderButton>
          <NavLink to={"/completeOrder"}>
            <HeaderButton variant="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCartSimple size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonContainer>
      </div>
    </HeaderContainer>
  );
}
