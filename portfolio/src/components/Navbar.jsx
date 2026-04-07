

export default function Navbar() {
    const socialLinks = [
        { name: 'LinkedIn', url: "https://www.linkedin.com/in/juan-david-vargas-mendoza-456017190" },
        { name: 'GitHub', url: "https://github.com/davidvm419-tech" },
        { name: 'Email', url: "mailto:davidvm419@outlook.com" },
        { name: 'WhatsApp', url: "https://wa.me/573003101631" }
    ];
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Welcome to Juan David Page</div>
          <ul className="flex space-x-4">
          {socialLinks.map((item, index) => (
            <li key={index} className="hover:text-gray-400 transition">
              <a href={item.url} target={"__blank"} rel="noopener noreferrer">
                {item.name}
                </a>
            </li>
          ))}
          </ul>
      </div>
    </nav>
  );
}

