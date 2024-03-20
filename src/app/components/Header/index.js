import React from 'react';
import Image from 'next/image';

export default function index() {
	return (
		<div>
			<header className="text-[#8C8C8C] bg-[#1F1F1F] body-font border-b-2 border-neutral-800 position-relative">
				<div className='bg-[#27335F]/[0.2]'>
					<div className="hidden md:flex absolute inset-x-0 top-12 left-1/3 w-96">
						<img src="/graphics/first-top-ellipse.png" />
					</div>
					<div className="container mx-auto flex flex-wrap py-3 md:py-5 justify-between px-5 text-sm md:px-10 flex-row items-center">
						<a className="flex items-center mt-4 md:mt-0 md:mb-0">
							<Image
								src="/Logo.png"
								width="93"
								height="23"
								alt="logo"
							/>
						</a>
						<nav className="md:ml-auto md:mr-auto hidden lg:flex flex-wrap items-center border-2 border-neutral-800 rounded-full py-1 px-3 justify-center">
							<a className="mr-5 text-white">Home</a>
							<a className="mr-5 hover:text-white">Features</a>
							<a className="mr-5 hover:text-white">Testimonials</a>
							<a className="mr-5 hover:text-white">Get Access</a>
							<a className="mr-5 hover:text-white">By The Numbers</a>
						</nav>
						<button className="inline-flex items-center bg-transparent border-2 border-neutral-800 rounded-lg py-1.5 px-5 focus:outline-none hover:bg-gray-700 mt-4 md:mt-0">
							Sign In
						</button>
					</div>
				</div>
			</header>
		</div>
	);
}
