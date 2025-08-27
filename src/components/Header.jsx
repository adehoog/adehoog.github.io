import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <Link class="navbar-brand" to={"/"}>Home</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <Link class="nav-link" to={"/projects"}>Projects</Link>
                <Link class="nav-link" to={"/publications"}>Publications</Link>
                <a class="nav-link disabled" aria-disabled="true">CV</a>
            </div>
            </div>
        </div>
      </nav>
      <div class="container" style={{marginTop: 10}}></div>
    </>
  )
}

export default Header