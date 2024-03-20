import React from 'react'

export default function index() {
  return (
		<div>
			<section className="section-blue-purple text-[#8C8C8C] body-font">
				<div className="bg-[#27335F]/[0.2]  pb-20 md:pb-28 lg:pb-40 flex flex-col pt-20 md:pt-40 lg:pt-1">
					<div className="container mx-auto flex items-start md:items-center justify-center flex-col max-w-screen-md px-4 lg:pt-40 lg:px-1">
						<div className="bg-gradient-to-r p-px from-[#0500E8] to-[#7000FF] rounded-full mb-5">
							<button className="bg-[#1F1F1F] rounded-full py-2 px-8 md:px-6 text-xl ">
								<span className="bg-gradient-to-r from-[#A5A2E8] to-[#7000FF] font-bold inline-block text-transparent bg-clip-text">
									By The Numbers
								</span>
							</button>
						</div>
						<div className="md:text-center w-full">
							<div className="justify-center flex ">
								<p className="leading-relaxed mb-8 lg:w-3/5 text-sm md:text-center text-[#817EB5]">
									To prove the accelerated memory ability, we
									tested it against other popular chatbots.
									Below is the memory retention capabilities
									of various AI chatbots, measured by the
									number of queries it takes for them to
									forget information.
								</p>
							</div>
						</div>
					</div>
					<div>
						<div className="flex justify-center p-5 lg:p-1">
							<img src="/icon/numbers.png" alt="numbers" />
						</div>
					</div>
				</div>
			</section>
		</div>
  );
}
