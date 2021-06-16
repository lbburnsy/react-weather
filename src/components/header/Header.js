import "./Header.css";

function Header() {
  return (
    <nav
      className="navbar is-flex is-align-content-center"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a href="/" className="nvabar-item">
          <h1 className="title">React Weather</h1>
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <input className="input" type="text" />
          <button class="button is-info is-rounded ml-2">
            <i class="fas fa-search-location"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
