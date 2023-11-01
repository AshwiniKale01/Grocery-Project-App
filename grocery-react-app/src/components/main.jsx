import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">Shop groceries online now!</h5>
              <p className="card-text fs-5 d-none d-sm-block ">
                Explore our wide range of products, add to cart and order. Easy...
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
