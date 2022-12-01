import styles from "./RestaurantCard.css"
function RestaurantCard({ id, name, type, image, rating, number_of_votes, price_starts_from }) {
  // const {name, type, image, rating, number_of_votes, price_starts_from} = props
  return (
    <div key={id} data-testid="restaurant-card" className={styles.container}>
      {/* display the props */}
      <img data-testid="restaurant-card-image" src={image} alt="" />
      <h1 data-testid="restaurant-card-name">{name}</h1>
      <h1 data-testid="restaurant-card-type">{type}</h1>
      <h1 data-testid="restaurant-card-price">{price_starts_from}</h1>
      <h1 data-testid="restaurant-card-rating">{rating}</h1>
      <h1 data-testid="restaurant-card-votes">{number_of_votes}</h1>

    </div>
  );
}

export default RestaurantCard;
