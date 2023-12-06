import Portfolio from 'react';
import college from "../assets/sankara.jpg";
import school from "../assets/school.jpeg";
export function Education()
{
    return(
        <>
        <section id="Education">
        <div class="row p-5 column-gap-5 d-flex justify-content-center align-items-center">
          <h1 className='text-center text-uppercase edu-h1'>Education</h1>
       <div class="card col-lg-3 mb-sm-2 p-2 ">
  <img src={school} class="card-img-top"/>
  <div class="card-body">
    <h5 class="card-title">10th</h5>
    <p class="card-text">Kshatriya Nadar Higher Secondary School,Kamuthi,Ramanathapuram</p>
    <p class="card-text">percentage : 90.4%</p>
  </div>
</div>
<div class="card col-lg-3 p-2">
  <img src={school} class="card-img-top" alt="not found"/>
  <div class="card-body">
    <h5 class="card-title">12th</h5>
    <p class="card-text">Kshatriya Nadar Higher Secondary School,Kamuthi,Ramanathapuram</p>
    <p class="card-text">percentage : 68.3%</p>
  </div>
</div>
<div class="card col-lg-3 p-2">
  <img src={college} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">BCA</h5>
    <p class="card-text">sankara college of science and commerce,coimbatore</p>
    <p class="card-text">percentage : 76%</p>
  </div>
</div>
</div>
</section>
        </>
    );
}
