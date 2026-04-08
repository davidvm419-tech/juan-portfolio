export default function Navbar() {
  // Links
    const socialLinks = [
        { name: 'LinkedIn', url: "https://www.linkedin.com/in/juan-david-vargas-mendoza-456017190" },
        { name: 'GitHub', url: "https://github.com/davidvm419-tech" },
        { name: 'Email', url: "mailto:davidvm419@outlook.com" },
        { name: 'WhatsApp', url: "https://wa.me/573003101631" }
    ];
  return (
 <nav className="fixed top-0 left-0 w-full z-50 fixed top-0 left-0 w-full z-50 backdrop-blur-xl 
    bg-[#0c141a]/60 border-b border-[#00E5FF33] shadow-[0_0_25px_#00E5FF22]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold 
                        text-[#00E5FFCC] 
                        drop-shadow-[0_0_2px_#00E5FF55]">Welcome to Juan David Page</div>
          <ul className="flex space-x-4">
          {socialLinks.map((item, index) => (
            <li key={index}>
              <a className="text-[#A8CBE3] 
                           hover:text-[#00E5FF] 
                           transition 
                           hover:drop-shadow-[0_0_4px_#00E5FF88]" 
                href={item.url} target={"__blank"} rel="noopener noreferrer">
                {item.name}
                </a>
            </li>
          ))}
          </ul>
      </div>
    </nav>
  );
}

