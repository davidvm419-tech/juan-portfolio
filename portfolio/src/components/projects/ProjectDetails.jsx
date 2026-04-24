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
          <div className="min-h-screen bg-[#0a1c22] text-white flex items-center justify-center">
            <h2 className="text-3xl">Project not found</h2>
          </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full bg-[#0a1c22] text-white pt-32 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Project name */}
          <h1 className="text-5xl font-bold mb-6">{project.name}</h1>

          {/* Images gallery slider */}
            <div className="relative w-full h-full rounded-xl overflow-hidden border border-[#2e555b] bg-[#1a2f33] mb-10">
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
              <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#0a1c22]/90 border border-[#00E5FF]/30 
                hover:border-[#00E5FF] text-[#00E5FF] w-11 h-11 flex items-center justify-center rounded-full transition-all"
                onClick={prevImage}>
                ‹
              </button>
              <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#0a1c22]/90 border border-[#00E5FF]/30 
                hover:border-[#00E5FF] text-[#00E5FF] w-11 h-11 flex items-center justify-center rounded-full transition-all"
                onClick={nextImage}>
                ›
              </button>
              {/* Dots */}
              <div className="absolute bottom-4 w-full flex justify-center gap-2">
                {project.gallery.map((_, index) => (
                  <div key={index} 
                    className={`h-1.5 transition-all duration-300 rounded-full ${currentImage === index ? "w-6 bg-[#00E5FF]" : "w-2 bg-[#2e555b]"}`}>
                  </div>
                ))}
              </div>
            </div>

          {/* Tech Stack */}
          <div className="mt-10 mb-10">
            <h2 className="text-2xl font-semibold mb-3">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech, index) => (
                <span className="px-3 py-1 text-sm rounded bg-[#00e5ff22] border border-[#00e5ff55] text-gray-100"
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
            <button className="px-6 py-3 rounded-lg bg-[#00e5ff33] border border-[#00e5ff77] hover:bg-[#00e5ff55] transition"
              onClick={() => navigate(-1)}>
              ← Back
            </button>

            {projectButtons.map((button, index) => (
              <a key ={index}className="px-6 py-3 rounded-lg bg-[#00e5ff33] border border-[#00e5ff77] hover:bg-[#00e5ff55] transition hover: <p>load can take up 60 seconds</p>" 
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
