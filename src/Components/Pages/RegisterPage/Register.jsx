import React, { useContext } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa6';
import { Link, useNavigate, } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../../Firebase/Firebase-init';

const Register = () => {

    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault();
      const name = e.target.name.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      
      createUser(email, password)
      .then(result=>{
        updateProfile(auth.currentUser, {
          displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
        })
        .then(()=>{
          console.log("Profile updated");
          navigate("/")
          location.reload()
        })
        .catch((error)=>console.log(error.code))
        
      })
      .catch((error)=>{
        const errorMessage = error.code;
        console.log(errorMessage);
      })
      
    }
    

    return (
        <div className='bg-[#262626a3] bg-[url("https://i.ibb.co.com/M5G1JNC/khgrasori.png")] bg-cover bg-blend-overlay'>
          <div data-aos="zoom-in-up" data-aos-duration="2000" className="pt-24 pb-10">
        <div className="card bg-base-100 w-full max-w-sm mx-auto rounded-md border-[1.5px] border-[#ababab9a] shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
              <h1 className='text-2xl font-bold'>Create an account</h1>
              </div>
              <div className="form-control">
                <input type="text" name='name' placeholder="First Name" className="placeholder:text-black input input-bordered border-x-0 border-y-0 border-b-2 rounded-none px-0 focus:outline-none" />
              </div>
              <div className="form-control">
                <input type="text" name='lastName' placeholder="Last Name" className="placeholder:text-black input input-bordered border-x-0 border-y-0 border-b-2 rounded-none px-0 focus:outline-none" />
              </div>
              <div className="form-control">
                <input type="email" name='email' placeholder="Username or Email" className="placeholder:text-black input input-bordered border-x-0 border-y-0 border-b-2 rounded-none px-0 focus:outline-none" required />
              </div>
              <div className="form-control">
                <input type="password" name='password' placeholder="Passowrd" className="placeholder:text-black input input-bordered border-x-0 border-y-0 border-b-2 rounded-none px-0 focus:outline-none" required />
              </div>
              <div className="form-control">
                <input type="password" name='confirmPassword' placeholder="Confrim Passowrd" className="placeholder:text-black input input-bordered border-x-0 border-y-0 border-b-2 rounded-none px-0 focus:outline-none" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#F9A51A]">Create an account</button>
              </div>
              <div className="form-control">
                <span className='text-center label-text-alt'>Already have an account? <Link to={'/login'} className='text-[#F9A51A] hover:text-[#F9A51A] link'>Login</Link></span>
              </div>
            </form>
        </div>
        <div className="flex items-center justify-center gap-2 mx-auto mt-8 text-center text-white">
          <div className='border h-[.5px] min-w-32'></div>
          Continue with
          <div className='border h-[.5px] min-w-32'></div>
        </div>
        <div className="flex gap-2 mt-4 justify-center">
        <button className="btn bg-gradient-to-l from-slate-50 to-red-50"><FaFacebook color='#3742fa' />Facebook</button>
        <button className="btn bg-gradient-to-l from-slate-50 to-red-50"><FaGithub color='#000' />Github</button>
        <button className="btn bg-gradient-to-l from-slate-50 to-red-50"><FaGoogle color='#3742fa' />Google</button>
        </div>
        </div>
        </div>
        );
};

export default Register;