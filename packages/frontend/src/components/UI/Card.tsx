interface CardInterface {
  header: string;
  body: string;
  footer: string;
  checked: boolean;
  disabled: boolean;
  onChange?: () => void;
}

const Card: React.FC<CardInterface> = ({ header, body, footer, checked, disabled = false, onChange }: CardInterface) => {
  return (
    <article>
      <header>
        <h2>
          <input type="checkbox" name="select" onChange={onChange} checked={checked} disabled={disabled} />
          {header}
        </h2>
        <fieldset></fieldset>
      </header>

      <p>{body}</p>

      <footer>
        <small>{footer}</small>
      </footer>
    </article>
  );
};

export default Card;
