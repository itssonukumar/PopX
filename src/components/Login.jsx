// src/components/Login.jsx
const Login = () => {
    const handleLogin = (e) => {
      e.preventDefault();
      alert("Login form submitted!");
    };
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-40 ">
        <div className="w-375 h-192 max-w-sm bg-gray-200 p-6 rounded-lg shadow-md text-center border border-gray">


         <div className="">
         <h2 className="text-4xl font-semibold text-gray-800 mb-4 text-center pr-40">Signin to Your PopX account</h2>
         <p className="text-gray-500 mb-6 pr-30 ">
            Lorem ipsum dolor sit amet,<br />
            consectetur adipiscing elit,
          </p>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email Address"
              required
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
            />
            <button
              type="submit"
              className="py-3 bg-gray-400 hover:bg-gray-700 text-white rounded-lg font-semibold transition"
            >
              Log In
            </button>
          </form>
         </div>
         


        </div>

        
      </div>
    );
  };
  
  export default Login;
  