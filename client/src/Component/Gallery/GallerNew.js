import React from 'react'

import Header1 from '../Header1'

function GallerNew() {
    return (
        <div>  <Header1 />
            <div className="container mt-4">
                <img
                    className="img-responsive"
                    src={require("../../images/z.jpg.png")}
                    alt=""
                    width="100%"
                    height="50%"
                />
                </div>
                <div className="row d-flex justify-content-evenly">
          <div className="wrapper">
            <h2 className="htag">Gallery</h2>
            <div className="gallerynew col-lg-3 col-md-12" >
              <div className="child bg-gallery"></div>
            </div>
            <div className="gallerynew col-lg-3 col-md-12" >
              <div className="child bg-galleryb"></div>
            </div>
            <div className="gallerynew col-lg-3 col-md-12" >
              <div className="child bg-galleryc"></div>
            </div>
         
         
         
          </div>
        </div>
        <div className="row d-flex justify-content-evenly">
          <div className="wrapper">
            
            <div className="gallerynew col-lg-3 col-md-12" >
              <div className="child bg-galleryd"></div>
            </div>
            <div className="gallerynew col-lg-3 col-md-12" >
              <div className="child bg-gallerye"></div>
            </div>
            <div className="gallerynew col-lg-3 col-md-12" >
              <div className="child bg-galleryf"></div>
            </div>
         
         
         
          </div>
        </div>
        <div className="row d-flex justify-content-evenly">
          <div className="wrapper">
            
            <div className="gallerynew col-lg-3 col-md-12" >
              <div className="child bg-galleryg"></div>
            </div>
            <div className="gallerynew col-lg-3 col-md-12" >
              <div className="child bg-galleryh"></div>
            </div>
            <div className="gallerynew col-lg-3 col-md-12" >
              <div className="child bg-galleryi"></div>
            </div>
         
         
         
         
          </div>
        </div>
        </div>
    )
}

export default GallerNew