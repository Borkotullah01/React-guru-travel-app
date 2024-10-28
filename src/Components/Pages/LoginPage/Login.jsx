import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider/AuthProvider';

const Login = () => {
  const navigate = useNavigate();
  const {logIn, googleLogin, githubLogin, facebookLogin} = useContext(AuthContext);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    const {email, password} = data
    logIn(email, password)
    .then(result=>{
      console.log(result.user)
      navigate("/")
    })
    .catch(error=>console.log(error.code))
  };

  const socialLoginHandler = (provider) => {
    provider()
    .then((result)=>{
      console.log(result.user);
      navigate("/top");
    })
    .catch((error)=>console.log(error.code))
  }

    return (
    <div className='bg-[#262626a3] bg-[url("https://i.ibb.co.com/LrvXs38/saintmartin.png")] h-screen bg-cover bg-blend-overlay'>
      <div  data-aos="zoom-in-up" data-aos-duration="2000" className="pt-24">
      <div className="card bg-base-100 w-full max-w-sm mx-auto rounded-md border-[1.5px] border-[#ababab9a] shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
          <h1 className='text-2xl font-bold'>Login</h1>
          </div>
          <div className="form-control">
            <input type="email" name='email' {...register("email")} placeholder="Username or Email" className="placeholder:text-black input input-bordered border-x-0 border-y-0 border-b-2 rounded-none px-0 focus:outline-none" required />
          </div>
          <div className="form-control">
            <input type="password" name='password' {...register("password")} placeholder="Passowrd" className="placeholder:text-black input input-bordered border-x-0 border-y-0 border-b-2 rounded-none px-0 focus:outline-none" required />
            <label className="label">
              <div className='flex gap-2'>
              <input className='max-w-5' type="checkbox" name="check" id="" />
              <span className='label-text-alt link text-[#F9A51A] hover:text-[#F9A51A]'>Remember Me</span>
              </div>
              <a href="#" className="label-text-alt text-[#F9A51A] hover:text-[#F9A51A] link">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#F9A51A]">Login</button>
          </div>
          <div className="form-control">
            <span className='text-center label-text-alt'>Don't have an account? <Link to={'/register'} className='text-[#F9A51A] hover:text-[#F9A51A] link'>Create an account</Link></span>
          </div>
        </form>
    </div>
    <div className="flex items-center justify-center gap-2 mx-auto mt-8 text-center text-white">
      <div className='border h-[.5px] min-w-32'></div>
      Continue with
      <div className='border h-[.5px] min-w-32'></div>
    </div>
    <div className="flex gap-2 mt-4 justify-center">
    <button onClick={()=>socialLoginHandler(facebookLogin)} className="btn bg-gradient-to-l from-slate-50 to-red-50"><FaFacebook color='#3742fa' />Facebook</button>
    <button onClick={()=>socialLoginHandler(githubLogin)} className="btn bg-gradient-to-l from-slate-50 to-red-50"><FaGithub color='#000' />Github</button>
    <button onClick={()=>socialLoginHandler(googleLogin)} className="btn bg-gradient-to-l from-slate-50 to-red-50"><FaGoogle color='#3742fa' />Google</button>
    </div>
      </div>
    </div>
    );
};

export default Login;