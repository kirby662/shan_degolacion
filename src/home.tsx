import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-[700px]">

        <h1 className="text-4xl font-bold text-center text-gray-800">
          Carmela Authentico
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Welcome to my personal portfolio.
        </p>

        <div className="text-center mt-6">
          <Link to="/About">
            <button className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900">
              Learn More
            </button>
          </Link>
        </div>

        <div className="mt-8 rounded-xl p-5 bg-blue-50 border-l-4 border-blue-500">
          <h2 className="text-xl font-semibold text-gray-800">
            About Me
          </h2>
          <p className="text-gray-600 mt-2">
            I am currently learning React and building simple web applications.
          </p>
          <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg">
            Read
          </button>
        </div>

        <div className="mt-5 rounded-xl p-5 bg-green-50 border-l-4 border-green-500">
          <h2 className="text-xl font-semibold text-gray-800">
            Skills
          </h2>
          <p className="text-gray-600 mt-2">
            HTML, CSS, JavaScript, React, and Tailwind CSS.
          </p>
          <button className="mt-3 bg-green-500 text-white px-4 py-2 rounded-lg">
            View
          </button>
        </div>

        <div className="mt-5 rounded-xl p-5 bg-purple-50 border-l-4 border-purple-500">
          <h2 className="text-xl font-semibold text-gray-800">
            Contact
          </h2>
          <p className="text-gray-600 mt-2">
            Feel free to connect with me for collaboration or projects.
          </p>
          <button className="mt-3 bg-purple-500 text-white px-4 py-2 rounded-lg">
            Contact
          </button>
        </div>

      </div>
    </div>
  );
}