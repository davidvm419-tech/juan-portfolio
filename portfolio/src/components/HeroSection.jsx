// Navigation
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
    const navigate = useNavigate();
    const logos = [
        {name: "javaScript", src: "/images/javascript-logo.svg"},
        {name: "react", src: "/images/react-original.svg"},
        {name: "python", src: "/images/python-original.svg"},
        {name: "django", src: "/images/django-plain.svg"},
        {name: "tailwindcss", src: "/images/tailwindcss.svg"},
    ]; 

    return (
        <div className="relative h-screen bg-[#0c141a] overflow-hidden flex items-center justify-center px-6">
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[750px] h-[750px]
                    blur-[160px] rounded-full animate-[colorCycle_5s_ease-in-out_infinite]" />

            <div className="absolute inset-0 bg-gradient-to-b from-[#0f2433]/40 to-transparent" />

            <div className="relative text-center max-w-3xl">
            
                <h1 className="text-6xl md:text-7xl font-semibold tracking-tight text-[#e6f1ff]">
                    Juan David Vargas
                </h1>

                <p className="mt-6 text-xl text-[#a8cbe3]">
                    Full‑Stack Developer crafting clean, scalable and intentional digital experiences.
                </p>

                <div className="mt-8 flex justify-center gap-6 flex-wrap opacity-95">
                    {logos.map((logo, index) => (
                        <img key={index} className="w-12 h-12 hover:scale-110 transition"
                            src={logo.src} alt={logo.name}
                        />
                    ))}
                </div>
                <button className="mt-10 px-6 py-3 rounded-lg text-[#dfffee] 
                    animate-[buttonCycle_5s_ease-in-out_infinite] transition hover:scale-105 transition"
                    onClick={() => navigate("/main")}>
                    See my work
                </button>

            </div>
        </div>
    );
}