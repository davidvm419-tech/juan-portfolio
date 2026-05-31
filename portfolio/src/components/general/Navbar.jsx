// Navigation
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  // Links
    const socialLinks = [
        { name: 'LinkedIn', url: "https://www.linkedin.com/in/juan-david-vargas-mendoza-456017190" },
        { name: 'GitHub', url: "https://github.com/davidvm419-tech" },
        { name: 'Email', url: "mailto:davidvm419@outlook.com" },
        { name: 'WhatsApp', url: "https://wa.me/573003101631" }
    ];
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#1F1A24]/80 backdrop-blur-lg border-b border-[#4B2E83]/30">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <img className="w-28 h-12 object-contain cursor-pointer 
             rounded-xl border border-[#4B2E83]/40 
             hover:scale-105 transition-all duration-300"
            src="../../images/logo.png" 
            alt="JD brand logo" 
            onClick={()=> navigate("/main")}
          />
          <span className="text-lg font-bold text-[#E6A96A] transition-all duration-300">
            Welcome!
          </span>
        </div>
        {/* Social Links */}
        <ul className="flex space-x-6">
          {socialLinks.map((item, index) => (
            <li key={index}>
              <a className="text-gray-400 hover:text-[#E6A96A] transition-colors duration-300 text-sm font-medium"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
