export const Card = ({ cardClass, image, title, paragraph, buttonClass }) => {
  return (
    <div className={cardClass}>
      <div>
        <img className="card-image" src={image} alt="" />
      </div>
      <h2 className="card-title">{title}</h2>
      <p className="card-paragraph">{paragraph}</p>
      <button className={buttonClass}>Learn More</button>
    </div>
  );
};
