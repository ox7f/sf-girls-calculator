const ThemeSwitch: React.FC = () => {
  const changeTheme = (event: React.MouseEvent<HTMLElement>) => {
    console.log('TODO', event);
  };

  return (
    <>
      <details role="list" dir="rtl">
        <summary aria-haspopup="listbox" role="link" className="secondary">
          Theme
        </summary>

        <ul role="listbox">
          <li>
            <a href="#" data-theme-switcher="auto" onClick={changeTheme}>
              Auto
            </a>
          </li>
          <li>
            <a href="#" data-theme-switcher="light" onClick={changeTheme}>
              Light
            </a>
          </li>
          <li>
            <a href="#" data-theme-switcher="dark" onClick={changeTheme}>
              Dark
            </a>
          </li>
        </ul>
      </details>
    </>
  );
};

export default ThemeSwitch;
