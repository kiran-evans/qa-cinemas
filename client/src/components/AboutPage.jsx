import React from 'react';
import qaLogo from './Images/qaLogo.png';
const AboutPage = () => {
    return (
      <div>
              <div class="row">
                  <div class="col">
                      <center>
                          <h1 className='subtitle'> QA Cinema </h1>
  
                          <p className= 'primary'> QA Cinemas is one of the world's leading cinema operators, spanning ten countries, over 280 sites and over 2,400 screens.
  
                         </p> <br />
                          <br />
                          <div className="column">
                            <img src={qaLogo} alt="logo" width="300" />
                          </div>
  
                          <p className='primary'> Here at QA Cinemas we aim to provide the customers with the best viewing experience.
                          
  
                          </p> <br />
                          <br />
                      </center><br /><br />
                  </div>
              </div>
          </div>
    )
  }
  
  export default AboutPage