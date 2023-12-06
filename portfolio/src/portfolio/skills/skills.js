import React from 'react';
import StarRatings from 'react-star-ratings';
export function Skills()
{
    return(
        <>
<section id="Skills">
        <h1 class="text-center p-5 text-light text-uppercase skill-h1">Skills</h1>
        <div className='container'>
        <div class="row text-light text-uppercase">
          <div class="col-lg-6">
            <label class="p-2 m-3 text-center fw-bold">html</label>
            <div className='ms-5'>
                <StarRatings
                rating={4.8}
                starRatedColor="yellow"
                numberOfStars={5}
                starDimension='17px'
                starSpacing='20px'
              />
            </div>
          </div>
        <div class="col-lg-6 col-12">
          <label class="p-2 m-3 text-center text-uppercase fw-bold">css</label>
          <div className='ms-5'>
                <StarRatings
                 rating={4.6}
                starRatedColor='yellow'
                numberOfStars={5}
                starDimension='17px'
                starSpacing='20px'
              />
            </div>
        </div>
      </div>
    <div class="row text-light container">
      <div class="col-lg-6 col-12">
        <label class="p-2 m-3 text-uppercase fw-bold">Java Script</label>
        <div className='ms-5'>
                <StarRatings
                 rating={4.3}
                starRatedColor='yellow'
                numberOfStars={5}
                starDimension='17px'
                starSpacing='20px'
              />
            </div>
      </div>
    <div class="col-lg-6 col-12">
      <label class="p-2 m-3 text-uppercase fw-bold">ReactJs</label>
      <div className='ms-5'>
                <StarRatings
                 rating={5}
                starRatedColor='yellow'
                numberOfStars={5}
                starDimension='17px'
                starSpacing='20px'
              />
            </div>
    </div>
  </div>  
<div class="row text-light container">
  <div class="col-lg-6 col-12">
    <label class="p-2 m-3 text-uppercase fw-bold">MYSql</label>
        <div className='ms-5'>
                <StarRatings
                rating={4.7}
                starRatedColor='yellow'
                numberOfStars={5}
                starDimension='17px'
                starSpacing='20px'
                />
        </div>
  </div>
<div class="col-lg-6 col-12">
  <label class="p-2 m-3 text-uppercase fw-bold">Mongo DB</label>
  <div className='ms-5'>
                <StarRatings
                 rating={3.8}
                starRatedColor='yellow'
                numberOfStars={5}
                starDimension='17px'
                starSpacing='20px'
              />
            </div>
            </div>
</div>
<div class="row text-light container">
  <div class="col-lg-6 col-12">
    <label class="p-2 m-3 text-uppercase fw-bold">Node js</label>
        <div className='ms-5'>
                <StarRatings
                rating={5}
                starRatedColor='yellow'
                numberOfStars={5}
                starDimension='17px'
                starSpacing='20px'
                />
        </div>
  </div>
<div class="col-lg-6 col-12">
  <label class="p-2 m-3 text-uppercase fw-bold">express js</label>
  <div className='ms-5'>
                <StarRatings
                 rating={5}
                starRatedColor='yellow'
                numberOfStars={5}
                starDimension='17px'
                starSpacing='20px'
              />
            </div>
            </div>
</div>
</div>
</section>
</>
    );
}