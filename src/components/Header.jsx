import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
	const [navIcon, setNavIcon] =
		useState("fa-bars");
	const [showNav, setShowNav] =
		useState(false);

 const handleNav = () => {
		if (navIcon == "fa-bars") {
			setNavIcon("fa-times");
			setShowNav(true);
		} else if (navIcon == "fa-times") {
			setNavIcon("fa-bars");
			setShowNav(false);
		}
	};

	return (
		<header className="flex justify-between items-center px-3 py-4">
			<h1 className="font-extrabold text-4xl">
				<span className="text-purple-500">
					Ha
				</span>
				bib
			</h1>
			<div
				className="md:hidden"
				onClick={handleNav}
			>
				<i
					className={`fa ${
						navIcon == "fa-bars"
							? "fa-bars"
							: "fa-times"
					} text-3xl`}
				></i>
			</div>

			<ul
				className=" justify-center items-start hidden md:flex gap-x-4
            flex-row"
			>
				<li className="text-xl px-5 py-3 text-purple-500">
					<Link to="/"> Home </Link>
				</li>
				<li className="text-xl px-5 py-3 text-purple-500">
					<Link to="/projects">
						{" "}
						Projects{" "}
					</Link>
				</li>
				<li className="text-xl px-5 py-3 text-purple-500">
					<a href="#contact">
						{" "}
						Contact{" "}
					</a>
				</li>
			</ul>

			<div
				className={`h-52 absolute z-50 top-16 right-0 blurry ${
					showNav ? "w-2/3" : "hidden"
				}`}
			>
				<ul
					className="flex justify-center items-start md:gap-x-2
            md:flex-row flex-col gap-y-3"
				>
					<li
						className="text-xl px-5 py-3 text-purple-500"
						onClick={handleNav}
					>
						<Link to="/"> Home </Link>
					</li>
					<li
						className="text-xl px-5 py-3 text-purple-500"
						onClick={handleNav}
					>
						<Link to="/projects">
							{" "}
							Projects{" "}
						</Link>
					</li>
					<li
						className="text-xl px-5 py-3 text-purple-500"
						onClick={handleNav}
					>
						<a href="#contact">
							{" "}
							Contact{" "}
						</a>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
