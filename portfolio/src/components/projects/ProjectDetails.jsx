import { useParams, useNavigate } from "react-router-dom";
import { use, useState } from "react";

// Projects data
import projects from '../../projects';

// Components
import Navbar from "../general/Navbar";

export default function ProjectDetails() {
  const navigate = useNavigate();

  // Image gallery state
  const [currentImage, setCurrentImage] = useState(0);
  
  // Get project ID from URL  
  const { id } = useParams();

  // Get project data based on ID
  const project = projects.find((project) => project.id === Number(id));

  // Filter in case the project hasn't been deployed
  const projectButtons = project?.links?.filter(link => link.url !== null) || [];

  // Images slider functions
  const nextImage = () => setCurrentImage(prev => (prev === project.gallery.length - 1 ? 0 : prev + 1)); 
  const prevImage = () => setCurrentImage(prev => (prev === 0 ? project.gallery.length - 1 : prev - 1));

  // if project not found, show error message
  if (!project) {
    return (

    <>
      <Navbar />
        <div className="min-h-screen bg-[#131018] text-white flex items-center justify-center px-6">
          <div className="bg-[#1F1A24] border border-[#4B2E83]/40 rounded-2xl p-10 max-w-md text-center shadow-[0_0_20px_#4B2E83]/20">
            <h2 className="text-3xl font-bold text-[#C9A8F] mb-4">
              Project Not Found
            </h2>
            <p className="text-gray-300 mb-8">
              The project you're looking for doesn't exist or may have been moved.
            </p>
            <button
              onClick={() => navigate("/main")}
              className="mt-auto text-center px-6 py-3 rounded-lg bg-[#7A1CAC] text-gray-100 
                      hover:bg-[#8A2BE2] hover:text-[#E6A96A] transition"
            >
              Go Back Home
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full bg-[#131018] text-white pt-32 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Project name */}
          <h1 className="text-5xl font-bold mb-6">{project.name}</h1>

          {/* Images gallery slider */}
            <div className="relative w-full h-full rounded-xl overflow-hidden border border-[#5E148C] bg-[#3A1F5F] mb-10">
              {/* Images container */}
              <div className="w-full h-full flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentImage * 100}%)` }}>
                {project.gallery.map((img, index) => (
                  <img className={`w-full h-full object-contain flex-shrink-0 transition-opacity duration-500 ${currentImage === index ? "opacity-100" : "opacity-0"}`}
                    key={index}
                    src={img}
                    alt={`Screenshot ${index}`}
                  />
                ))}
              </div>
              {/* Slider buttons */}
              <button className="absolute left-4 top-1/2 -translate-y-1/2 rounded-lg bg-[#4B2E83] 
                border border-[#5E148C] hover:bg-[#8A2BE2] hover:text-[#E6A96A] text-white w-11 h-11 
                flex items-center justify-center transition-all duration-300"
                onClick={prevImage}>
                ‹
              </button>
              <button className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg bg-[#4B2E83] 
                border border-[#5E148C] hover:bg-[#8A2BE2] hover:text-[#E6A96A] text-white w-11 h-11 
                flex items-center justify-center transition-all duration-300"
                onClick={nextImage}>
                ›
              </button>
              {/* Dots */}
              <div className="absolute bottom-4 w-full flex justify-center gap-2">
                {project.gallery.map((_, index) => (
                  <div key={index} 
                    className={`h-1.5 transition-all duration-300 rounded-full ${currentImage === index ? "w-6 bg-[#8A2BE2]" : "w-2 bg-[#5E148C]"}`}>
                  </div>
                ))}
              </div>
            </div>

          {/* Tech Stack */}
          <div className="mt-10 mb-10">
            <h2 className="text-2xl font-semibold mb-3">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech, index) => (
                <span className="px-3 py-1 text-sm rounded bg-[#A65A2E] text-white border border-[#E6A96A]/40 text-gray-100"
                  key={index}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="w-full h-px my-8 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          {/* Description */}
          <h2 className="text-2xl font-semibold mb-3">Description</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-10">
            {project.longDescription}
          </p>

          <div className="w-full h-px my-8 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          {/* Buttons */}
          <div className="flex gap-4 mt-10 justify-center">
            <button className="px-6 py-3 rounded-lg bg-[#4B2E83] border border-[#5E148C] hover:bg-[#8A2BE2] hover:text-[#E6A96A] transition"
              onClick={() => navigate(-1)}>
              ← Back
            </button>

            {projectButtons.map((button, index) => (
              <a key ={index}className="px-6 py-3 rounded-lg bg-[#4B2E83] border border-[#5E148C] hover:bg-[#8A2BE2] hover:text-[#E6A96A] transition" 
                href={button.url}
                target="_blank"
                rel="noopener noreferrer">
                {button.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
