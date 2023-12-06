import Portfolio from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons'; 
import img from "../assets/computer.png";
import { Link } from 'react-router-dom';
import  Typewriter  from 'typewriter-effect';
export function Home()
{
    return(
        <>
        <section id="home" class="d-flex justify-content-lg-center align-items-lg-center">
        <div class="row container home_cont">
          <div class="col-lg-6 col-12 p-5 mt-5">
            <h1 class="text-uppercase home_Header"><Typewriter
            options={{
              strings:["hi there" , "I'm"],
              autoStart:true,
              loop:true
            }}></Typewriter><br/></h1>
            <p class="text-uppercase fw-bold"><Typewriter
            options={{
              strings:[" Aspiring Fullstack Developer"],
              autoStart:true,
              loop:true
            }}></Typewriter></p><br/>
            <p class="text-uppercase"> I am a MERN Stack Developer.I like to code things from scratch,and enjoy bringing ideas to life in the browser</p><br/>
            <Link to="/about"><button className='btn btn-warning rounded me-2 text-center'>More Info</button></Link>
            <Link to="/contact"><button className='btn btn-warning rounded'>Contact</button></Link>
          </div>
          <div class="col-lg-6 col-12 mt-5">
            <img src={img} class="img-fluid" width="500px"/>
          </div>
        </div>
        </section>
        </>
    );
}
