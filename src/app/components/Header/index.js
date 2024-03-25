import React from 'react';

export default function index() {
	return (
		<div>
			<header className=" text-[#8C8C8C] bg-[#030C14] body-font border-b-2 border-neutral-800 position-relative">
				<div className="bg-[#030C14]/[0.4]">
					<div className="container mx-auto flex flex-wrap py-3 md:py-5 justify-between px-5 text-sm md:px-10 flex-row items-center">
						<a className="flex items-center">
							<img src="/Logo.png" alt="logo" />
						</a>
						<nav className="md:ml-auto md:mr-auto hidden lg:flex flex-wrap items-center border-2 border-neutral-800 rounded-full py-1 px-5 justify-center">
							<a className="mr-5 text-white" href="#home">Home</a>
							<a className="mr-5 hover:text-white" href="#features">Features</a>
							<a className="mr-5 hover:text-white" href="#testimonials">
								Testimonials
							</a>
							<a className="mr-5 hover:text-white" href="#pricing">Get Access</a>
							<a className=" hover:text-white" href="#numbers">By The Numbers</a>
						</nav>
						<button className="inline-flex items-center bg-transparent border-2 border-neutral-800 rounded-lg py-1.5 px-5 focus:outline-none hover:bg-gray-700">
							Sign In
						</button>
					</div>
				</div>
			</header>
		</div>
	);
}
