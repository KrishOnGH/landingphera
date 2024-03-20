import React from 'react';
import Card from '../Card';

const TWO_CARD = [
	{
		image_src: '/icon/gpt.png',
		heading: 'GPT-4 Integration',
		sub_text:
			'Leverage the cutting-edge GPT-4 technology to enable advanced language understanding and generation, ensuring seamless interactions with Phera.',
	},
	{
		image_src: '/icon/memory.png',
		heading: 'GPT-4 Integration',
		sub_text:
			'Leverage the cutting-edge GPT-4 technology to enable advanced language understanding and generation, ensuring seamless interactions with Phera.',
	},
];

export default function index() {
	return (
		<div>
			<section className="section-blue-purple text-[#8C8C8C] body-font">
				<div className='bg-[#27335F]/[0.2] min-h-dvh pb-32 lg:pb-5 flex flex-col pt-20 md:pt-40 lg:pt-1'>
					<div className="absolute top-0 left-0 md:w-96">
						<img src="/graphics/second-left-ellipse.png" />
					</div>
					<div className="absolute top-0 right-0 md:w-96">
						<img src="/graphics/second-right-ellipse.png" />
					</div>

					<div className="container mx-auto flex items-start md:items-center justify-center flex-col max-w-screen-md px-4 lg:pt-40 lg:px-1">
						<div className="bg-gradient-to-r p-px from-[#0500E8] to-[#7000FF] rounded-full mb-3">
							<button className="bg-[#1F1F1F] rounded-full py-2 px-8 md:px-6 text-xl ">
								<span className="bg-gradient-to-r from-[#A5A2E8] to-[#7000FF] font-bold inline-block text-transparent bg-clip-text">
									Features
								</span>
							</button>
						</div>
						<div className="md:text-center w-full">
							<h3 className="text-[#A5A2E8] text-lg md:text-3xl font-bold my-3">
								Phera: Turbocharged AI
							</h3>
							<div className="justify-center flex ">
								<p className="leading-relaxed mb-8 lg:w-3/5 text-sm md:text-center text-[#817EB5]">
									Experience the extraordinary capabilities of
									Phera, powered by GPT-4 technology. Seamlessly
									connect and interact with accelerated
									performance, revolutionizing your AI experience.
								</p>
							</div>
						</div>
					</div>
					<div className="flex justify-center mt-10 md:mt-16">
						<div className="flex flex-col sm:px-6 md:px-1 md:flex-row md:gap-x-20 gap-y-10 md:max-w-screen-lg">
							{TWO_CARD.map((item, key) => {
								return <Card key={key} {...item} />;
							})}
						</div>
					</div>
					<div className="flex justify-center mt-10 md:mt-16">
						<div className="flex sm:px-6 md:px-1 flex-row  md:max-w-lg">
							<Card
								image_src="/icon/memory.png"
								heading="Accelerated Memory"
								sub_text="Experience lightning-fast performance and efficient data processing with Phera's accelerated memory technology, ensuring swift responses to user queries."
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
