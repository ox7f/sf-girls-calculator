function Nav() {
  return (
    <>
      <nav className="container-fluid">
        <ul>
          <li>
            <a href="#" className="contrast" onClick={(event) => event.preventDefault()}>
              <strong>SF Girls Calculator</strong>
            </a>
          </li>
        </ul>
        <ul>
          <li>
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
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
