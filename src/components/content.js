import React from 'react';
import './main.css';




const Content =()=>{

  return (
    <main id="main">
      {/** Section A */}
      <section id="section-a" className="grid">
        <div className="content-wrap">
          <h2 className="content-title"> Web & Development</h2>

            <div className="content-text">
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, laudantium. Voluptate perferendis quasi, laboriosam culpa aut nihil modi ducimus ratione blanditiis distinctio dolore. Eveniet commodi laboriosam, minima reprehenderit corporis unde?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, laudantium. Voluptate perferendis quasi, laboriosam culpa aut nihil modi ducimus ratione blanditiis distinctio dolore. Eveniet commodi laboriosam, minima reprehenderit corporis unde?</p>
            </div>
        </div>

      </section>


      {/** Section B*/}
      {/**This section will be generated with various list items  */}
        <section id="section-b" className="grid">
          <ul>
            <li>
              <div class="card">
                <img src="../image/access-cellphone-connection-265620.jpg"/>
                <div className="card-content">
                  <h3 className="card-title"> Web Development</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, laudantium. Voluptate perferendis quasi, laboriosam culpa aut nihil modi ducimus ratione blanditiis distinctio dolore. Eveniet commodi laboriosam, minima reprehenderit corporis unde?</p>
                </div>
              </div>
            </li>

            <li>
              <div class="card">
                <img src="../image/access-cellphone-connection-265620.jpg"/>
                <div className="card-content">
                  <h3 className="card-title"> Mobile Applicatons</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, laudantium. Voluptate perferendis quasi, laboriosam culpa aut nihil modi ducimus ratione blanditiis distinctio dolore. Eveniet commodi laboriosam, minima reprehenderit corporis unde?</p>
                </div>
              </div>
            </li>


            <li>
              <div class="card">
                <img src="../image/access-cellphone-connection-265620.jpg"/>
                <div className="card-content">
                  <h3 className="card-title">Tech Marketing</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, laudantium. Voluptate perferendis quasi, laboriosam culpa aut nihil modi ducimus ratione blanditiis distinctio dolore. Eveniet commodi laboriosam, minima reprehenderit corporis unde?</p>
                </div>
              </div>
            </li>
          </ul>

        </section>


      

        {/** Section C */}

        <section id="section-c" className="grid">
          <div className="content-wrap">
            <h2 className="content-title"> We Handle all off your digital needs</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, laudantium. Voluptate perferendis quasi, laboriosam culpa aut nihil modi ducimus ratione blanditiis distinctio dolore. Eveniet commodi laboriosam, minima reprehenderit corporis unde?</p>

          </div>
        </section>

        {/** Section D */}
        <section id="section-d" className="grid">
         
          <div className="box">
            <h2 className="content-title">Contact Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, laudantium. Voluptate perferendis quasi, laboriosam culpa aut nihil modi ducimus ratione blanditiis distinctio dolore. </p>
            <p>contct@gmail.com</p>
          </div>

          <div className="box">
            <h2 className="content-title">About us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, laudantium. Voluptate perferendis quasi, laboriosam culpa aut nihil modi ducimus ratione blanditiis distinctio dolore. </p>
          </div>

        </section>

    </main>
  )
}


export default Content;