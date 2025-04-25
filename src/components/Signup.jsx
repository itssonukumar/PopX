import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [isAgency, setIsAgency] = useState(null);
  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: handle signup logic here
    alert("Signup form submitted!");
    navigate('/login')
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      
     

      {/* Main Body */}
      <div className="flex flex-grow items-center justify-center">
        <div className="flex flex-col justify-center bg-white border border-black p-6 rounded-lg shadow-md w-full max-w-sm h-auto">

          <div className="text-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-800">Create your PopX account</h1>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
              required
            />
            <input
              type="text"
              placeholder="Company Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
            />

            {/* Agency Selection */}
            <div>
              <p className="text-sm text-gray-700 mb-1">Are you working in an agency?</p>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="agency"
                    value="yes"
                    checked={isAgency === "yes"}
                    onChange={() => setIsAgency("yes")}
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="agency"
                    value="no"
                    checked={isAgency === "no"}
                    onChange={() => setIsAgency("no")}
                  />
                  No
                </label>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-semibold transition"
            >
              Create Account
            </button>
          </form>

          {/* Go back link */}
          <p className="mt-6 text-sm text-gray-600 text-center">
            Already have an account?{" "}
            <a href="/" className="text-violet-600 hover:underline">
              Go back
            </a>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Signup;
