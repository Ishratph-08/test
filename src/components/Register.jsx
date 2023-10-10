import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";


const Register = () => {
    const  handleRegister = e => {
      console.log(e)
      const {createUser} = useContext(AuthContext)

        e.preventDefault();
    
        const email = e.terget.email.value;
        const password = e.terget.password.value;
        console.log(email,password)

        createUser(email,password)
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
      <h1 className="text-4xl font-bold text-[#6d28d9]">Register Now!</h1>
      <p className="py-2"> </p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit ={handleRegister} className="card-body">

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name = "email" placeholder="Your email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name = "password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover"></a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type="submit" className="btn btn-primary font-bold" value="Register"/>
        </div>
      </form>
      <p className="px-6 ">Allready have Account? Please <Link to="/login">
      <button className="btn btn-link">Login</button>
         </Link>
      </p>
    </div>
  </div>
</div>
    );
};

export default Register;