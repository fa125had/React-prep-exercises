const Guarantee = ({imgUrl, title, description}) => {
  return (
    <div className="guarantee">
      <img src={imgUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Guarantee