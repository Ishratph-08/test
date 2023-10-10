import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";


const Navbar = () => {

    const { user,logOut } = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
              .then(() => console.log('User logged successfully'))
              .catch(error => console.error(error))
  
}
    return (
    
       <nav className='flex justify-between  py-3 px-8 items-center bg-purple-50'>
        <div> 
        <Logo></Logo>
        </div>
        
      
        <div className="flex">   
           <ul className='flex gap-10 font-semibold text-normal mr-10'>
                <li> <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-600 " : ""
                        }
                        >
                        Home
                      </NavLink>  
                </li>
                <li> <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-600  " : ""
                        }
                        >
                       Login
                      </NavLink>  
                </li>
                <li> <NavLink
                        to="/register"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-600  " : ""
                        }
                        >
                        Register
                      </NavLink>  
                </li>
                <li> <NavLink
                        to="/services"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-600  " : ""
                        }
                        >
                       Services
                      </NavLink>  
                </li>
                <li> <NavLink
                        to="/about us"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-600  " : ""
                        }
                        >
                       AboutUs
                      </NavLink>  
                </li>
                <li> <NavLink
                        to="/orders"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-600  " : ""
                        }
                        >
                        Orders
 
                      </NavLink>  
                </li>
            </ul>
            <div className="navbar-end"> 
                {
                    user ? <>
                    <div>{user.email}</div>
            

                <a onClick = {handleLogOut} className =" btn btn-sm bg-purple-500 text-white">
                Sign Out
                </a>
                </>
                :
                <Link to ="/login">

                    <button className="btn btn-sm bg-orange-200">Login</button>
                </Link>
                }
        
            </div>
        </div>


   

      </nav>


 );
};

export default Navbar;