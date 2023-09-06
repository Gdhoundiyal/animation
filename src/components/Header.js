function Header() {
  return (
    <div class="page1">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#">
          {" "}
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
              <a class="nav-link" href="#">
                Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About Us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Blogs
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact Us{" "}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Career
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div class="container p-8 contevolve">
        <div class="row align-item-center">
          <div class="col-md-12">
            <p class="evolve">Evolve with</p>
            <p class="innovation">Innovation</p>
            <p class="evolve2">
              From custom Software Development to cybersecurity ,our team of
              experts is dedicated to delivering solutions that are tailored to
              your unique needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
