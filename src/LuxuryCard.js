import { Card } from "./Card";
import cardIconLuxury from "./icon-luxury.svg";

export const LuxuryCard = () => {
  return (
    <Card
      cardClass="luxury-card-wrapper"
      image={cardIconLuxury}
      title="Luxury"
      paragraph="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
      buttonClass="luxury-card-button"
    />
  );
};
