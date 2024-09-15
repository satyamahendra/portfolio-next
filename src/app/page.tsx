import Navbar from "@/components/Navbar";
import About from "@/components/Page/About";
import Experience from "@/components/Page/Experience";
import Projects from "@/components/Page/Projects";
import Skills from "@/components/Page/Skillls";
import Sidebar from "@/components/Sidebar";

export default function Home() {
	return (
		<div className="w-screen sm:h-screen flex justify-center items-center font-sans">
			<div className="sm:w-2/5 sm:h-4/5 flex sm:flex-row flex-col">
				<div className="border-r sm:w-[30%] sm:block hidden">
					<Sidebar />
				</div>
				<Navbar />
				<div className="border-r sm:w-[70%] flex-1 overflow-auto">
					<section id="about" className="flex-1 min-h-full">
						<About />
					</section>
					<section id="skills" className="flex-1 min-h-full">
						<Skills />
					</section>
					<section id="projects" className="flex-1 min-h-full">
						<Projects />
					</section>
					<section id="experience" className="flex-1 min-h-full">
						<Experience />
					</section>
				</div>
			</div>
		</div>
	);
}
