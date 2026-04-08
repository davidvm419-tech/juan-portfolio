// Components
import Navbar from '../components/Navbar'

export default function Main() {
    return (
        <>
            <Navbar />

    <div className="min-h-screen bg-[#0c141a] text-white flex flex-col items-center justify-center px-6">
      <h2 className="text-5xl font-bold mb-6">Projects</h2>
      <p className="text-lg text-gray-300 max-w-2xl text-center">
        Here goes more things lol
      </p>
    </div>

        </>
    );
}