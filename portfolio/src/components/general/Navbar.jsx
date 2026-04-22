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
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0d262b]/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div onClick={() => navigate("/main")} 
          className="text-2xl font-bold text-white/90 cursor-pointer hover:text-[#00E5FF] transition-all duration-300">
          Welcome!
        </div>
        {/* Social Links */}
        <ul className="flex space-x-6">
          {socialLinks.map((item, index) => (
            <li key={index}>
              <a className="text-gray-400 hover:text-[#00E5FF] transition-colors duration-300 text-sm font-medium"
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
