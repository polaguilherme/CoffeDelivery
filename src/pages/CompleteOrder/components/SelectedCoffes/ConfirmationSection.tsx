import { Button } from "../../../../components/Button";
import { RegularText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatprice";
import { ConfirmationSectionContainer } from "./style";

const DELIVERY_PRICE = 3.5;

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart();
  const cartTotal = DELIVERY_PRICE + cartItemsTotal;

  const formattedItemsTotal = formatMoney(cartItemsTotal);
  const formattedCartTotal = formatMoney(cartTotal);
  const formatDeliveryPirce = formatMoney(DELIVERY_PRICE);
  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ {formattedItemsTotal}</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ {formatDeliveryPirce}</RegularText>
      </div>
      <div>
        <RegularText weight="700" color="subtitle">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle">
          R$ {formattedCartTotal}
        </RegularText>
      </div>
      <Button
        text={"CONFIRMAR PEDIDO"}
        disabled={cartQuantity <= 0}
        type="submit"
      />
    </ConfirmationSectionContainer>
  );
}
