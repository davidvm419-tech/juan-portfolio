// Navigation
import { useParams, useNavigate } from "react-router-dom";

// Projects data
import projects from '../../projects';

// Components
import Navbar from "../general/Navbar";

export default function ProjectDetails() {
  const navigate = useNavigate();
  
  // Get project ID from URL  
  const { id } = useParams();

  // Get project data based on ID
  const project = projects.find((project) => project.id === Number(id));

  // if project not found, show error message
  if (!project) {
    return (
      <>
        <Navbar />
          <div className="min-h-screen bg-[#0d262b] text-white flex items-center justify-center">
            <h2 className="text-3xl">Project not found</h2>
          </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full bg-[#0d262b] text-white pt-32 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Project name */}
          <h1 className="text-5xl font-bold mb-6">{project.name}</h1>
          {/* Images gallery */}
          <div className="w-full h-96 rounded-xl overflow-x-auto flex gap-4 border border-[#2e555b] bg-[#24474d] p-4 mb-10">
            {project.gallery.map((img, index) => (
              <img 
                key={index}
                className="h-full w-auto object-cover rounded-lg flex-shrink-0"
                src={img}
                alt={`Screenshot ${index}`}
              />
            ))}
          </div>
          {/* Tech Stack */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech, index) => (
                <span className="px-3 py-1 text-sm rounded bg-[#2e555b] text-gray-100"
                  key={index}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
          {/* Description */}
          <p className="text-gray-300 text-lg leading-relaxed mb-10">
            {project.longDescription}
          </p>
          {/* Buttons */}
          <div className="flex gap-4 mt-10 justify-center">
            <button className="px-6 py-3 rounded-lg bg-[#2e555b] hover:bg-[#3b6a72] transition"
              onClick={() => navigate(-1)}>
              ← Back
            </button>

            {project.live === null ? 
              <span className="px-6 py-3 rounded-lg bg-[#1c3a3f] hover:bg-[#2e555b] transition">
                Coming soon!
              </span> : 
              <a className="px-6 py-3 rounded-lg bg-[#1c3a3f] hover:bg-[#2e555b] transition" 
                href={project.live}
                target="_blank">
                View Live
              </a>
            }

            <a className="px-6 py-3 rounded-lg bg-[#1c3a3f] hover:bg-[#2e555b] transition" 
              href={project.code}
              target="_blank">
              View Code
            </a>

            <a className="px-6 py-3 rounded-lg bg-[#1c3a3f] hover:bg-[#2e555b] transition" 
              href={project.demo}
              target="_blank">
              View Demo video
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
