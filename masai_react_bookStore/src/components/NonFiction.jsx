import data from "../nonfiction.json"
import BookCard from "./BookCard";
export default function NonFiction() {
  let newData = data
  return (
    <div data-testid='books-nonfiction'>
      <h1 data-testid='books-container-title'>{"Non-Fiction Books"}</h1>

      <div className="books-container">
        {/* Display all Non-Fiction books here */}
        {newData.map((item) => {
          return (
            <BookCard img={item.img} year={item.year} title={item.title} author={item.author} price={item.price} />
          )
        })}

      </div>
    </div>
  );
}
