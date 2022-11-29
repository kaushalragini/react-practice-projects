import data from "../fiction.json"
import BookCard from "./BookCard";

export default function Fiction() {
  let newData = data;

  return (
    <div data-testid='books-fiction'>
      <h1 data-testid='books-container-title'>{"Fictional Books"}</h1>

      <div className="books-container">
        {/* Map all Fictional Books here */}
        {newData.map((item) => {
          return (
            <BookCard img={item.img} year={item.year} title={item.title} author={item.author} price={item.price} />
          )
        })}
      </div>
    </div>
  );
}
