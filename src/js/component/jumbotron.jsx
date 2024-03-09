import React from "react";
import './jumbotron.css'




function Jumbotron () {
  return(

    <div class="jumbotron ">
       <h1 class="display-4 container-fluid">A warm Welcome!</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  
        <p class="lead">It uses utility classes for typography and spacing to space content out within the larger container.
        </p>
        <p class="lead">
    <a class="btn btn-primary btn-lg"  role="button">Learn more</a>
  </p>
</div>


  )
}

export default Jumbotron;