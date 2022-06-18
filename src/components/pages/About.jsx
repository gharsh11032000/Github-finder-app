import { FaGithub } from "react-icons/fa";
function About() {
  return (
    <div>
      <div className="flex">
        <FaGithub className="inline-block text-6xl mb-4 mr-4" />
        <h1 className="text-6xl mb-4">Github Finder</h1>
      </div>
      <p className="mb-4 text-2xl font-light">
        A React app to search Github profiles and see profile details.
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Developed By
        <a href="/user/gharsh11032000" className="text-white ml-1">
          Hrsh Gupta
        </a>
      </p>
    </div>
  );
}

export default About;
