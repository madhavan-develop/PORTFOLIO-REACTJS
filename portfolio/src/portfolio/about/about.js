import Portfolio from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import me from "../assets/maadhu junior.jpg";
export function About()
{
    return(
        <>
        <section id="About">
         <h1 class=" text-center p-5 text-light about-h1">ABOUT</h1>
        <div class="row container text-center mx-lg-3">
          <div class="col-lg-6 col-12  home_Profile">
            <img src={me} class="img-fluid maadhu" width="170px"/>
          </div>
          <div class="col-lg-6 col-12 p-3  ">
            <h1 class="about-name">MADHAVAN S</h1> <br/>
            <p class="text-light text-uppercase">I am from Kamuthi,Ramanathapuram. I have completed my full stack development course in KGISL Micro College. i have completed my ug degree BCA in sankara college of science and commerce.</p>
            <button class="btn btn-primary"><FontAwesomeIcon icon={faDownload} />
            <a href="https://drive.google.com/file/d/18edNuPdgk4bvE0NP4ytyXXtypEwlhwWz/view?usp=sharing" target="_blank">download resume</a></button>
          </div>
        </div>
      </section>
      

        </>
    );
}
