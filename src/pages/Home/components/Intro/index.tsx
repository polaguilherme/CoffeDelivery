import {
  BenefitsContainer,
  IntroContainer,
  IntroContent,
  IntroTitle,
} from "./style";
import introImg from "../../../../assets/imageIntro.png";
import { RegularText } from "../../../../components/Typography";
import InfoWithIcon from "../../../../components/infoWithIcon";
import { ShoppingCart, Clock, Package, Coffee } from "phosphor-react";
import { useTheme } from "styled-components";

export function Intro() {
  const { colors } = useTheme();

  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>
            <RegularText size="l" color="subtitle" as="h3">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </RegularText>
          </section>

          <BenefitsContainer>
            <InfoWithIcon
              iconColor={colors["brand-yellow-dark"]}
              icon={<ShoppingCart weight="fill" />}
              text="compra simples e segura"
            />
            <InfoWithIcon
              iconColor={colors["base-text"]}
              icon={<Package weight="fill" />}
              text="Embalagem mantém o café intacto"
            />
            <InfoWithIcon
              iconColor={colors["brand-yellow"]}
              icon={<Clock weight="fill" />}
              text="Entrega rápida e rastreada"
            />
            <InfoWithIcon
              iconColor={colors["brand-purple"]}
              icon={<Coffee weight="fill" />}
              text="O café chega fresquinho até você"
            />
          </BenefitsContainer>
        </div>
        <img src={introImg} alt="intro image" />
      </IntroContent>
    </IntroContainer>
  );
}
