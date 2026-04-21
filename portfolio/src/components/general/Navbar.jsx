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
<nav className="fixed top-0 left-0 w-full z-50 bg-[#0c141a]/95 backdrop-blur-sm">
  <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
    <div onClick={() => navigate("/main")} className="text-2xl font-bold text-white/90 drop-shadow-[0_0_2px_#00E5FF33]">
      Welcome!
    </div>
    {/* Social Links */}
    <ul className="flex space-x-4">
      {socialLinks.map((item, index) => (
        <li key={index}>
          <a
            className="text-white/80 hover:text-[#4fd8e9]
"
            href={item.url}
            target="__blank"
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

