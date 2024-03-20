import React from 'react';

export default function index() {
	return (
		<div>
			<section className="section-blue-purple text-[#8C8C8C] body-font">
				<div className="hidden md:flex absolute right-0">
					<img src="/graphics/first-right-ellipse.png" />
				</div>
				<div className="absolute inset-x-0 top-0 left-1/3 md:w-96">
					<img src="/graphics/first-top-ellipse.png" />
				</div>
				<div className="absolute inset-x-0 top-20 left-0 md:w-96">
					<img src="/graphics/first-left-ellipse.png" />
				</div>
				<div className="absolute top-0 left-0 md:w-96">
					<img src="/graphics/first-left-rect-top.png" />
				</div>
				<div className="absolute top-5 left-0 md:w-96">
					<img src="/graphics/first-left-rect-top2.png" />
				</div>

				<div className="bg-[#27335F]/[0.2] pb-32 lg:pb-2 lg:min-h-dvh flex flex-col pt-20 md:pt-40 lg:pt-1 lg:justify-center items-center">
					<div className="container mx-auto flex items-start md:items-center justify-center flex-col max-w-screen-md px-4 lg:px-1">
						<div className="bg-gradient-to-r p-px from-[#0500E8] to-[#7000FF]  rounded-full">
							<button className="bg-[#1F1F1F] rounded-full py-2 px-5 text-[#C4C1FF]">
								Try For Free
							</button>
						</div>
						<div className="md:text-center w-full">
							<h1 className="md:leading-[64px] text-[#A5A2E8] text-3xl md:text-5xl font-bold my-8">
								<span className="bg-gradient-to-r from-[#B6B5CE] via-[#589BFF] to-[#9643FF] inline-block text-transparent bg-clip-text">
									Unlock
								</span>{' '}
								the True Power of AI in your day with Phera
							</h1>
							<div className="justify-center flex ">
								<p className="leading-relaxed mb-8 lg:w-3/4 text-xs">
									Welcome to Phera! You’ve made the correct
									choice coming here, and now it’s our turn to
									show you that. Using Phera, you can talk to
									a chatbot that is personalized for you, by
									you with fast and relevant access to the
									internet and accelerated memory to never
									forget.
								</p>
							</div>
							<div className="flex md:justify-center">
								<div className="bg-gradient-to-r p-px from-[#7000FF] via-[#5C79E1] to-[#1205B4]  rounded-lg">
									<button className="bg-[#1F1F1F] rounded-lg py-2 px-5 text-sm text-[#C4C1FF]">
										GET STARTED
									</button>
								</div>
								<button className="ml-4 bg-[#A5A2E8] rounded-lg py-2 px-5 text-sm text-neutral-950">
									HOW IT WORKS
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
