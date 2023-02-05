// TODO:implement store and apply dark/light data-theme
function ThemeSwitch() {
  return (
    <>
      <details role="list" dir="rtl">
        <summary aria-haspopup="listbox" role="link" className="secondary">
          Theme
        </summary>

        <ul role="listbox">
          <li>
            <a href="#" data-theme-switcher="auto">
              Auto
            </a>
          </li>
          <li>
            <a href="#" data-theme-switcher="light">
              Light
            </a>
          </li>
          <li>
            <a href="#" data-theme-switcher="dark">
              Dark
            </a>
          </li>
        </ul>
      </details>
    </>
  );
}

export default ThemeSwitch;
