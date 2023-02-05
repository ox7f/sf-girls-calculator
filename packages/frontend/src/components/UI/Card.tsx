interface CardInterface {
  header: string;
  body: string;
  footer: string;
}

function Card({ header, body, footer }: CardInterface) {
  return (
    <article>
      <header>
        <h2>{header}</h2>
      </header>

      <p>{body}</p>

      <footer>
        <small>{footer}</small>
      </footer>
    </article>
  );
}

export default Card;
