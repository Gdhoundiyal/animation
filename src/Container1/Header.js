function Header() {
  return (
    <div class="navigationbar navfor2">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="hs">
          EvolTech
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="hs">
                Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="hs">
                About Us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="hs">
                Blogs
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="hs">
                Contact Us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="hs">
                Career
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
