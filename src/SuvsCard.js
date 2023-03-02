import { Card } from "./Card";
import cardIconSuvs from "./icon-suvs.svg";

export const SuvsCard = () => {
  return (
    <Card
      cardClass="suvs-card-wrapper"
      image={cardIconSuvs}
      title="SUVs"
      paragraph="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
      buttonClass="suvs-card-button"
    />
  );
};
