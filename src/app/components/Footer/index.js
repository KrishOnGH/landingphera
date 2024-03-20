import React from 'react';

export default function index() {
	return (
		<div>
			<div className="bg-[#0B0A0C] flex justify-center">
				<div className="w-full xl:w-5/6 divide-y px-2 sm:px-0">
					<div className="flex flex-row flex-wrap w-full lg:px-3 px-5 xl:px-2 py-12">
						<div className="w-full md:w-1/2 lg:w-3/12 xl:w-4/12">
							<img src="/logos/footer-logo.png" />
							<p className="text-base my-3 mb-8 text-[#FFFFFFB2]">
								Elevating your AI experience.
							</p>
						</div>
						<div className="md:w-1/2 lg:w-3/12  xl:w-3/12 w-full">
							<h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">
								Useful Links
							</h2>
							<nav className="list-none mb-10 text-[#FFFFFFB2] text-base ">
								<li className="my-1.5">
									<a className="hover:text-white">
										Landing Page
									</a>
								</li>
								<li className="my-1.5">
									<a className="hover:text-white">About</a>
								</li>
								<li className="my-1.5">
									<a className="hover:text-white">
										Terms & Services
									</a>
								</li>
								<li className="my-1.5">
									<a className="hover:text-white">
										Blogs & Info
									</a>
								</li>
							</nav>
						</div>
						<div className="md:w-1/2 lg:w-3/12 xl:w-3/12 w-full">
							<h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">
								Authentication
							</h2>
							<nav className="list-none mb-10 text-[#FFFFFFB2] text-base ">
								<li className="my-1.5">
									<a className="hover:text-white">Sign In</a>
								</li>
								<li className="my-1.5">
									<a className="hover:text-white">Sign Up</a>
								</li>
								<li className="my-1.5">
									<a className="hover:text-white">
										Reset Password
									</a>
								</li>
								<li className="my-1.5">
									<a className="hover:text-white">
										Newsletters
									</a>
								</li>
							</nav>
						</div>
						<div className="md:w-1/2 lg:w-3/12 xl:w-2/12 w-full">
							<h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">
								Help
							</h2>
							<nav className="list-none mb-10 text-[#FFFFFFB2] text-base ">
								<li className="my-1.5">
									<a className="hover:text-white">Contact</a>
								</li>
								<li className="my-1.5">
									<a className="hover:text-white">
										For Developers
									</a>
								</li>
								<li className="my-1.5">
									<a className="hover:text-white">
										Have an Idea?
									</a>
								</li>
							</nav>
						</div>
					</div>
					<div>
						<p className="text-lg text-[#FFFFFF99] my-8 px-5">
							Copyright @ 2024 Phera. All Rights Reserved.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
