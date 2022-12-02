function Pagination({ onChange, current, total }) {
  let arr = [];
  for (let i = 1; i <= total; i++) {
    arr.push(i)
  }
  const style = {
    border: "2px solid red",
    color:"yellow"
  }
  return (
    <div data-testid="page-container">
      {arr.map((item, i) => {
        return <button style={style} onClick={() => {
          onChange(item)
        }}>{item}</button>
      })}
    </div>

  );
}

export default Pagination;
