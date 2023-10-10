import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from 'react';


const Login = () => {
  const  handleLogin = e => {
  const {signInUser} = useContext(AuthContext);
    e.preventDefault();
    

    
    const email = e.terget.email.value;
    const password = e.terget.password.value;
    console.log(email,password)

    signInUser(email,password)
    .then(result=>{
      console.log(result.user)
    })
    .catch(error =>{

      console.error(error)
    })
   }

    return (
        <div className="hero min-h-screen bg-base-100">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-4xl font-bold text-[#701a75]">Login now!</h1>
      <p className="py-2"> </p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit ={handleLogin} className="card-body box-border">

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name = "email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name = "password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className=" w-full h-8 rounded-lg bg-purple-700 text-white font-bold ">Login</button>
        </div>
      </form>
      <p className="px-6 ">New Here? Please <Link to="/register">
      <button className="btn btn-link"> Register </button>
         </Link>
      </p>
    </div>
  </div>
</div>

    );
};

export default Login;