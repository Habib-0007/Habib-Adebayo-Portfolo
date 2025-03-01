import { Link } from "react-router-dom";

const ProjectsCard = () => {
	return (
		<div className="flex justify-start items-center gap-[24px] flex-col">
			<div
				className="grid grid-cols-1 md:grid-cols-2 mx-2 mt-10
            place-content-center content-center gap-[28px] md:gap-[48px] bg-white"
				data-aos="fade-up"
				data-aos-delay="200"
				data-aos-duration="1000"
				data-aos-easing="ease-in"
			>
				<div
					className="box-shad p-[20px] rounded-[14px] h-full bg-white"
					data-aos="fade-up"
					data-aos-delay="200"
					data-aos-duration="1000"
					data-aos-easing="ease-in"
				>
					<div className="flex justify-between items-center">
						<a href="https://github.com/Habib-0007/fuoyecbt" target="_blank">
							<i className="fab fa-github text-4xl text-purple-500"></i>
						</a>
						<a href="https://fuoyecbt.vercel.app/" target="_blank">
							<i className="fa fa-link text-4xl text-purple-500"></i>
						</a>
					</div>
					<h1 className="font-bold text-3xl my-4">FUOYE CBT Application</h1>
					<p className="text-xl"></p>
					<div className="flex justify-start items-center flex-wrap mt-3 gap-3 w-9/12">
						<p className="text-xl text-white px-3 py-1 bg-black font-bold">
							React
						</p>
						<p className="text-xl text-white px-3 py-1 bg-black font-bold">
							Typescript 
						</p>
						<p className="text-xl text-white px-3 py-1 bg-black font-bold">
							JavaScript 
						</p>
						<p className="text-xl text-white px-3 py-1 bg-black font-bold">
							Tailwind 
						</p>
						<p className="text-xl text-white px-3 py-1 bg-black font-bold">
							Express
						</p>
        <p className="text-xl text-white px-3 py-1 bg-black font-bold">
							MongoDB
						</p>
					</div>
				</div>
				<div
					className="box-shad p-[20px] rounded-[14px] h-full bg-white"
					data-aos="fade-up"
					data-aos-delay="200"
					data-aos-duration="1000"
					data-aos-easing="ease-in"
				>
					<div className="flex justify-between items-center">
						<a href="https://github.com/Habib-0007/Draggg-sortable" target="_blank">
							<i className="fab fa-github text-4xl text-purple-500"></i>
						</a>
						<a href="https://draggg-sortable.vercel.app/" target="_blank">
							<i className="fa fa-link text-4xl text-purple-500"></i>
						</a>
					</div>
					<h1 className="font-bold text-3xl my-4">Draggg Sortable</h1>
					<p className="text-xl"></p>
					<div className="flex justify-start items-center flex-wrap mt-3 gap-3 w-9/12">
						<p className="text-xl text-white px-3 py-1 bg-black font-bold">
							React
						</p>
						<p className="text-xl text-white px-3 py-1 bg-black font-bold">
							JavaScript
						</p>
						<p className="text-xl text-white px-3 py-1 bg-black font-bold">
							TailwindCSS
						</p>
						<p className="text-xl text-white px-3 py-1 bg-black font-bold">
							React easy sort
						</p>
						<p className="text-xl text-white px-3 py-1 bg-black font-bold">
							Auth0
						</p>
					</div>
				</div>
			</div>
			<a
				href="/projects"
				className="block bg-purple-500 text-white py-[12px] px-[28px] text-[16px] font-bold text-center rounded-[6px] hover:bg-purple-400"
			>
				See more...
			</a>
		</div>
	);
};

export default ProjectsCard;
