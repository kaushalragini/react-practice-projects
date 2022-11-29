export default function BookCard({ img,title,  year, author, price}) {
  return (
    <div data-testid='book-card'>
      <img src={img} alt={img} />
      <b><div data-testid='book-card-title'>{title}<span>({year})</span></div></b>
      <div data-testid='book-card-author'>{author}</div>
      <div data-testid='book-card-price'>{price}</div>
    </div>
  )
}

