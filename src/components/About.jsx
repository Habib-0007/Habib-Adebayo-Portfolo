const About = () => {
	return (
		<section
			className="mt-16 px-3"
			id="about"
			data-aos="fade-up"
			data-aos-delay="200"
			data-aos-duration="1000"
			data-aos-easing="ease-in"
		>
			<div className="flex justify-center items-center flex-col">
				<span className="block px-8 py-3 border-b-2 border-purple-500 text-black font-bold text-left text-[24px]">
					About Me
				</span>
				<p className="text-[16px] mt-[20px] leading-[1.5] font-medium text-left">
					I'm{" "}
					<span className="text-purple-500 text-center font-bold">Habib Adebayo</span>,
					a Junior Frontend Developer with a passion for crafting engaging web
					experiences. Proficient in{" "}
					<span
						className="text-purple-500
               text-center font-bold"
					>
						HTML
					</span>
					,{" "}
					<span
						className="text-purple-500
               text-center font-bold"
					>
						CSS
					</span>
					,{" "}
					<span
						className="text-purple-500
               text-center font-bold"
					>
						JavaScript
					</span>
					,{" "}
					<span
						className="text-purple-500
               text-center font-bold"
					>
						React
					</span>
					, and{" "}
					<span className="text-purple-500 text-center font-bold">
						TailwindCSS
					</span>
					, I thrive on the intersection of creativity and technology. My
					journey into web development was driven by a fascination with the
					digital world's potential. With a solid foundation in HTML and CSS, I
					ensure elegant and accessible user interfaces. JavaScript fuels my
					desire for interactivity, enabling me to create dynamic web solutions.
					React, with its component-based architecture, is my playground for
					building seamless, fast, and user-friendly web applications. Tailwind
					CSS streamlines my design process, allowing me to craft visually
					appealing layouts efficiently. I bridge the gap between aesthetics and
					functionality.
				</p>
			</div>
		</section>
	);
};

export default About;
