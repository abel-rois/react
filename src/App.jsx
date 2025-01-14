import Ofertas from "./components/Ofertas"
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
        <nav className="py-2 bg-body-tertiary border-bottom">
          <div className="container d-flex flex-wrap">
            <ul className="nav me-auto">
              <li style={{marginRight: "20px"}} className="nav-item">
                <Link to="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
                <img src="./../public/vite.svg" className="bi me-2" width="40" height="32" />
                <span className="fs-4 mr-4">Vacantes</span>
            </Link></li>
              <li className="nav-item"><Link to='/' className="nav-link link-body-emphasis px-2 active" aria-current="page">Inicio</Link></li>
              <li className="nav-item"><Link to= '/' className="nav-link link-body-emphasis px-2">Ofertas</Link></li>
              <li className="nav-item"><a href="#" className="nav-link link-body-emphasis px-2">Pricing</a></li>
              <li className="nav-item"><a href="#" className="nav-link link-body-emphasis px-2">FAQs</a></li>
              <li className="nav-item"><a href="#" className="nav-link link-body-emphasis px-2">About</a></li>
            </ul>
            <ul className="nav">
              <li className="nav-item"><Link to='/login' className="nav-link link-body-emphasis px-2">Iniciar Sesión</Link></li>
              <li className="nav-item"><Link to='/register' className="nav-link link-body-emphasis px-2">Registrarse</Link></li>
            </ul>
          </div>
        </nav>

        <header className="mb-4 border-bottom">

          <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
          <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
          </div>
          <div className="carousel-inner">
      <div className="carousel-item">
        <img src="./../public/slider/slide1.jpg" className="bd-placeholder-img" width="100%" height="100%" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" />
        <div className="container">
          <div className="carousel-caption text-start">
            <h1>Example headline.</h1>
            <p className="opacity-75">Some representative placeholder content for the first slide of the carousel.</p>
            <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item active">
      <img src="./../public/slider/slide2.jpg" className="bd-placeholder-img" width="100%" height="100%" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" />
        <div className="container">
          <div className="carousel-caption">
            <h1>Another example headline.</h1>
            <p>Some representative placeholder content for the second slide of the carousel.</p>
            <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
      <img src="./../public/slider/slide3.jpg" className="bd-placeholder-img" width="100%" height="100%" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" />
        <div className="container">
          <div className="carousel-caption text-end">
            <h1>One more for good measure.</h1>
            <p>Some representative placeholder content for the third slide of this carousel.</p>
            <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
          </div>
        </div>
      </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
          </button>
          </div>

        </header>
        <div className="container">        
            <Routes>




              <Route path="/" element={ <Ofertas/> } />
              <Route path="/login" element={ <Login/> } />
              <Route path="/register" element={ <Register/> } />
            </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App