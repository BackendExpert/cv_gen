import { FaFacebook, FaLinkedin, FaGithub, FaGlobe, FaServer } from "react-icons/fa";

const Footer = () => {
    const currentdata = new Date().getFullYear()
  return (
    <footer className="bg-gray-900 text-white py-4 text-center">
      <p className="flex justify-center items-center gap-4">
        &copy; {currentdata} ATS Friendly CV Gen. All Rights Reserved. Developed and Maintained by <a href="https://www.linkedin.com/in/jehanweerasuriya/" target="_blank">jehankandy</a>
        <a href="https://www.facebook.com/kandy.jehan/" target="_blank" className="text-white hover:text-blue-500"><FaFacebook /></a>
        <a href="https://www.linkedin.com/in/jehanweerasuriya/" target="_blank" className="text-white hover:text-blue-700"><FaLinkedin /></a>
        <a href="https://github.com/BackendExpert" target="_blank" className="text-white hover:text-gray-400"><FaGithub /></a>
        <a href="https://rapidapi.com/user/jehankandy" target="_blank" className="text-white hover:text-yellow-500"><FaServer /></a> 
        <a href="https://jehanweerasuriya.vercel.app/" target="_blank" className="text-white hover:text-green-400"><FaGlobe /></a>
      </p>
    </footer>
  );
};

export default Footer;
