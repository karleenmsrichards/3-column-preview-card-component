import { Card } from "./Card";
import cardIconSedan from "./icon-sedans.svg";

export const SedanCard = () => {
  return (
    <Card
      cardClass="sedan-card-wrapper"
      image={cardIconSedan}
      title="Sedans"
      paragraph="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
      buttonClass="sedan-card-button"
    />
  );
};
