import React from 'react';
import "./../HomePage/Home.css";

const Destination = () => {
    return (
    <div className="bg-[#272727b3] bg-[url('https://i.ibb.co.com/m5SxrGm/coxbazar.png')] bg-cover bg-center bg-blend-overlay">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col gap-20 font- items-start lg:flex-row">
            <div data-aos="fade-right" data-aos-duration="2000" className="text-center lg:text-left text-white max-w-2xl mt-10">
              <h1 className="text-7xl font-bold cinzel">Cox's bazar</h1>
              <p className="py-6 poppins">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
              </p>
            </div>
            <div data-aos="fade-left" data-aos-duration="2000" className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Origin</span>
                  </label>
                  <input type="text" placeholder="Your location" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Destination</span>
                  </label>
                  <input type="text" placeholder="Where to go" className="input input-bordered" required />
                </div>
                <div className="flex justify-between">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Form</span>
                  </label>
                  <input type="date" placeholder="Where to go" className="input input-bordered w-full" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">To</span>
                  </label>
                  <input type="date" placeholder="Where to go" className="input input-bordered w-full" required />
                </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Start Booking</button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
    );
};

export default Destination;