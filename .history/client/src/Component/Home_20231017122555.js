import React from "react";
import { AboutUs } from "./AboutUs";

function Home() {
  return (
    <div>
      <div className="home-bg ">
        <div className="container position-relative text-white home-text-center">
          <div className="text-align-center">
            <div>
              <h1>YOUR HOME</h1>
            </div>
            <div>
              <h3>Away</h3>
            </div>
            <div>
              <h1>FROM HOME</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-5 grid-container container mb-5">
        <div class="grid-item">
        <div>
            <h4>Rooms</h4>
            <div>
                <button>View ALL</button>
            </div>
        </div>
            
        </div>
        <div class="grid-item">
            <p
        </div>
        <div class="grid-item">3</div>
      </div>
      <div>
        <AboutUs />
      </div>
    </div>
  );
}

export default Home;
