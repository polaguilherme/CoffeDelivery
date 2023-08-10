import { IconWrapper, QuantityContainer } from "./style";
import { Minus, Plus } from "phosphor-react";

interface QuantityProps {
  size?: "medium" | "small";
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
}

export default function Input({
  onIncrease,
  onDecrease,
  quantity,
  size = "medium",
}: QuantityProps) {
  return (
    <QuantityContainer size={size}>
      <IconWrapper disabled={quantity <= 1} onClick={onDecrease}>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={quantity} />
      <IconWrapper onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </QuantityContainer>
  );
}
