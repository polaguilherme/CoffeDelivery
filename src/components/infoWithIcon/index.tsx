import { ReactNode } from "react";
import { IconContainer, InfoWithIconContainer } from "./style";

interface InfoWithIconProps {
  icon: ReactNode;
  text: string | number;
  iconColor: string;
}

export default function InfoWithIcon({
  icon,
  text,
  iconColor,
}: InfoWithIconProps) {
  return (
    <InfoWithIconContainer>
      <IconContainer iconColor={iconColor}>{icon}</IconContainer>

      {typeof text === "string" ? <p>{text}</p> : text}
    </InfoWithIconContainer>
  );
}
