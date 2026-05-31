// Navigation
import { useNavigate } from 'react-router-dom';

// Projects data
import projects from '../../projects';

// Components
import Navbar from '../general/Navbar'

export default function Main() {
  const navigate = useNavigate();

    return (
        <>
          <Navbar />
            <div className="min-h-screen w-full bg-[#131018] text-white pt-32 px-6">
              <h2 className="text-5xl font-bold text-center mb-12">
                Take a look at some of my work.
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {projects.map(project => (
                  // Project card 
                  <div key={project.id} className="bg-[#4B2E83] border border-[#5E148C] rounded-xl hover:border-[#8A2BE2] shadow-[0_0_25px_rgba(139,92,246,0.15) transition p-5 flex flex-col">
                    {/* Project image */}   
                    <div className="w-full rounded-lg mb-4 overflow-hidden border border-[#5E148C] bg-[#3A1F5F]">
                      <img 
                        className="w-full h-auto block"
                        src={project.image} 
                        alt={project.name} 
                      />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2 text-white">
                      {project.name}
                    </h3>

                    <p className="text-gray-200 text-sm mb-4">
                      {project.description}
                    </p>
                    {/* Project stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.stack.map((tech, index) => (
                        <span key={index} className="px-2 py-1 text-xs rounded bg-[#A65A2E] text-white">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => navigate(`/project/${project.id}`)}
                      className="mt-auto text-center py-2 rounded-lg bg-[#7A1CAC] text-gray-100 
                      hover:bg-[#8A2BE2] hover:text-[#E6A96A] transition">
                      View details
                    </button>
                  </div>
                ))}
              </div>
            </div>
        </>
    );
}