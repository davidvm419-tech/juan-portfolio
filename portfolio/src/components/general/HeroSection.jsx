// Navigation
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
    const navigate = useNavigate();
    const logos = [
        {name: "javaScript", src: "/images/stackLogos/javascript-logo.svg"},
        {name: "react", src: "/images/stackLogos/react-original.svg"},
        {name: "tailwindcss", src: "/images/stackLogos/tailwindcss.svg"},
        {name: "python", src: "/images/stackLogos/python-original.svg"},
        {name: "django", src: "/images/stackLogos/django-plain.svg"},
    ]; 

    return (
        <div className="relative h-screen bg-[#0d262b] overflow-hidden flex items-center justify-center px-6">
            <div className="absolute top-1/4 left-1/2 w-[800px] h-[800px] blur-[120px] rounded-full bg-radial from-[#00E5FF44] to-[#0d262b] animate-[colorCycle_10s_ease-in-out_infinite] pointer-events-none"/>

            <div className="absolute inset-0 bg-gradient-to-b from-[#0d262b]/40 to-transparent"/>

            <div className="relative text-center max-w-3xl">
            
                <h1 className="text-6xl md:text-7xl font-semibold tracking-tight text-white">
                    Juan David Vargas Mendoza
                </h1>

                <p className="mt-6 text-xl text-gray-300">
                    Full Stack Developer crafting clean, scalable and intentional digital experiences.
                </p>

                <div className="mt-8 flex justify-center gap-6 flex-wrap opacity-95">
                    {logos.map((logo, index) => (
                        <img key={index} className="w-12 h-12"
                            src={logo.src} alt={logo.name}
                        />
                    ))}
                </div>
                
                <button className="mt-10 px-8 py-3 rounded-lg text-white border border-[#00e5ff55]
                    animate-[buttonCycle_3s_ease-in-out_infinite] hover:scale-105 transition-all duration-300"
                    onClick={() => navigate("/main")}>
                    See my work
                </button>

            </div>
        </div>
    );
}
