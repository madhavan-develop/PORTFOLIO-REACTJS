import Portfolio from 'react';
import {Link} from 'react-router-dom';
export function Menu()
{
    return(
        <>
         {/* <!-- nav bar start --> */}
   <nav class="navbar navbar-expand-lg bg-dark fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand text-light" href="#">Maadhu</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-2">
             <Link to="/"> <li class="nav-item">
                <a class="nav-link text-light home" aria-current="page" href="#home" >Home</a>
              </li></Link>
             <Link to="/about"><li class="nav-item">
                <a class="nav-link text-light" aria-current="page" href="#About">About</a>
              </li></Link> 
             <Link to="/certificate"><li class="nav-item">
                <a class="nav-link text-light" aria-current="page" href="#Certificates">Certificate</a>
              </li></Link>
              <Link to="/skills"><li class="nav-item">
                <a class="nav-link text-light" aria-current="page" href="#Skills">Skills</a>
              </li></Link>
              <Link to="/education"><li class="nav-item">
                <a class="nav-link text-light" aria-current="page" href="#Education">Education</a>
              </li></Link>
              <Link to="/contact"><li class="nav-item">
                <a class="nav-link text-light" aria-current="page" href="#Contact">Contact</a>
              </li></Link>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- navbar end --> */}
        </>
    
    );

}