const Book = (props) => {
  // destructuring methods in react
  const { image, title, author, number } = props;
  console.log(number);
  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      {/* <button>click title</button> */}
      <h4>{author}</h4>
      <span className="number">{`# ${number + 1}`}</span>
    </article>
  );
};
export default Book;
