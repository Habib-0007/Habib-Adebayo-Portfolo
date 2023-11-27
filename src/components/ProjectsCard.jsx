import { Link } from "react-router-dom";

let ProjectsCard = () => {
	return (
		<div
			className="grid grid-cols-1 md:grid-cols-2 mx-2 mt-10
            place-content-center content-center  gap-6 md:gap-4 bg-white"
			data-aos="fade-up"
			data-aos-delay="200"
			data-aos-duration="1000"
			data-aos-easing="ease-in"
		>
			<div
				className="box-shad px-3 py-5 rounded h-full bg-white"
				data-aos="fade-up"
				data-aos-delay="200"
				data-aos-duration="1000"
				data-aos-easing="ease-in"
			>
				<div className="flex justify-between items-center">
					<a href="https://github.com/Habib-0007/RPG-Game">
						<i className="fa fa-github text-4xl text-purple-500"></i>
					</a>
					<a href="https://rpgamee.netlify.app/">
						<i
							className="fa fa-arrow-right text-2xl text-purple-500
                     py-1 px-2 border-2 border-purple-500"
						></i>
					</a>
				</div>
				<h1 className="font-bold text-3xl my-4">Rock Paper Scissors Game</h1>
				<p className="text-xl"></p>
				<div className="flex justify-start items-center flex-wrap mt-3 gap-3 w-9/12">
					<p className="text-xl text-white px-3 py-1 bg-black font-bold">
						HTML5
					</p>
					<p className="text-xl text-white px-3 py-1 bg-black font-bold">
						CSS3
					</p>
					<p className="text-xl text-white px-3 py-1 bg-black font-bold">
						JavaScript
					</p>
					<p className="text-xl text-white px-3 py-1 bg-black font-bold">
						Animate CSS
					</p>
				</div>
			</div>
			<div
				className="box-shad px-3 py-5 rounded h-full bg-white"
				data-aos="fade-up"
				data-aos-delay="200"
				data-aos-duration="1000"
				data-aos-easing="ease-in"
			>
				<div className="flex justify-between items-center">
					<a href="https://github.com/Habib-0007/Advice-generator-code-challenge-by-Frontend-mentor">
						<i className="fa fa-github text-4xl text-purple-500"></i>
					</a>
					<a href="https://advyce.netlify.app">
						<i
							className="fa fa-arrow-right text-2xl text-purple-500
                     py-1 px-2 border-2 border-purple-500"
						></i>
					</a>
				</div>
				<h1 className="font-bold text-3xl my-4">
					Advice Generator (Frontend Mentor Challenge)
				</h1>
				<p className="text-xl"></p>
				<div className="flex justify-start items-center flex-wrap mt-3 gap-3 w-9/12">
					<p className="text-xl text-white px-3 py-1 bg-black font-bold">
						HTML5
					</p>
					<p className="text-xl text-white px-3 py-1 bg-black font-bold">
						CSS3
					</p>
					<p className="text-xl text-white px-3 py-1 bg-black font-bold">
						JavaScript
					</p>
					<p className="text-xl text-white px-3 py-1 bg-black font-bold">
						FETCH
					</p>

					<p className="text-xl text-white px-3 py-1 bg-black font-bold">API</p>
				</div>
			</div>

			<Link to="/projects">
				<p
					className="block bg-purple-500 text-white py-3 px-4 text-xl font-bold
				text-center"
				>
					See more...
				</p>
			</Link>
		</div>
	);
};

export default ProjectsCard;
