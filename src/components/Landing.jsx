import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate=useNavigate()

const handleClicked=(e)=>{
e.preventDefault();
navigate('/signup')
}

const handleLogin=(e)=>{
  e.preventDefault()
  navigate('/login')

}

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 ">
        <div className="w-375 h-192 max-w-sm bg-gray-200 p-6 rounded-lg shadow-md text-center border border-gray">

        <div className="flex flex-col mt-110">

        <h1 className="text-2xl   font-semibold mb-2">Welcome to PopX</h1>
          <p className="text-gray-500 mb-6">
            Lorem ipsum dolor sit amet,<br />
            consectetur adipiscing elit,
          </p>
  
          <button onClick={handleClicked} className="w-full py-3 text-white bg-violet-600 hover:bg-violet-700 rounded-lg font-medium mb-3 transition">
            Create Account
          </button>
          <button onClick={handleLogin} className="w-full py-3 text-violet-600 bg-violet-100 hover:bg-violet-200 rounded-lg font-medium transition">
            Already Registered? Login
          </button>
  
          {/* Pagination Dots */}
          <div className="mt-10 flex items-center justify-center gap-4 text-sm text-gray-500">
            <span className="text-lg">🏠</span>
            <span>1 of 4</span>
            <span className="text-lg">➡️</span>
          </div>
        </div>


        </div>
      </div>
    );
  };
  
  export default Landing;
  