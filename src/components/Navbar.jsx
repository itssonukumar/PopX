import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate=useNavigate()
    const handlePage=(e)=>{
        e.preventDefault()
        navigate('/')

    }

    const handleSigniIn=(e)=>{
        e.preventDefault()
        navigate('/login')

    }
    const handleComment=(e)=>{
        e.preventDefault()
        navigate('/dashboard')

    }
    return (
      <nav className="bg-white border-b border-gray-300 shadow-md px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-violet-700 cursor-pointer">PopX</div>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li onClick={handlePage} className="hover:text-violet-600 cursor-pointer transition">Home</li>
          <li onClick={handleComment}  className="hover:text-violet-600 cursor-pointer transition">Comments</li>
          <li onClick={handleSigniIn} className="hover:text-violet-600 cursor-pointer transition">SignIn</li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
  