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
		heading: 'Internet Connectivity',
		sub_text:
			"Access real-time information and insights effortlessly with Phera's seamless internet connectivity, providing users with up-to-date and relevant responses.",
	},
];

export default function index() {
	return (
		<div>
			<section className="section-blue-purple text-[#8C8C8C] bg-[#030C14] body-font z-30">
				<div className="bg-[#030C14]/[0.4] min-h-dvh px-5 md:px-1 pb-4 md:pb-28 lg:pb-5 flex flex-col pt-20 md:pt-40 lg:pt-1">
					<svg
						className="hidden lg:flex absolute top-0 -left-40"
						width="441"
						height="1497"
						viewBox="0 0 441 1497"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g opacity="0.3" filter="url(#filter0_f_130_897)">
							<ellipse
								cx="0.688132"
								cy="748.588"
								rx="448"
								ry="139.5"
								transform="rotate(-89.3353 0.688132 748.588)"
								fill="#5000B5"
							/>
						</g>
						<defs>
							<filter
								id="filter0_f_130_897"
								x="-438.901"
								y="0.615479"
								width="879.178"
								height="1495.95"
								filterUnits="userSpaceOnUse"
								color-interpolation-filters="sRGB"
							>
								<feFlood
									flood-opacity="0"
									result="BackgroundImageFix"
								/>
								<feBlend
									mode="normal"
									in="SourceGraphic"
									in2="BackgroundImageFix"
									result="shape"
								/>
								<feGaussianBlur
									stdDeviation="150"
									result="effect1_foregroundBlur_130_897"
								/>
							</filter>
						</defs>
					</svg>

					<svg
						className="hidden lg:flex absolute top-0 right-0"
						width="440"
						height="1497"
						viewBox="0 0 440 1497"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g opacity="0.3" filter="url(#filter0_f_130_896)">
							<ellipse
								cx="439.688"
								cy="748.588"
								rx="448"
								ry="139.5"
								transform="rotate(-89.3353 439.688 748.588)"
								fill="#5000B5"
							/>
						</g>
						<defs>
							<filter
								id="filter0_f_130_896"
								x="0.098877"
								y="0.615479"
								width="879.178"
								height="1495.95"
								filterUnits="userSpaceOnUse"
								color-interpolation-filters="sRGB"
							>
								<feFlood
									flood-opacity="0"
									result="BackgroundImageFix"
								/>
								<feBlend
									mode="normal"
									in="SourceGraphic"
									in2="BackgroundImageFix"
									result="shape"
								/>
								<feGaussianBlur
									stdDeviation="150"
									result="effect1_foregroundBlur_130_896"
								/>
							</filter>
						</defs>
					</svg>

					<svg
						className="hidden lg:flex absolute left-1/3 top-1/3 rounded-full"
						width="405"
						height="471"
						viewBox="0 0 405 471"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g filter="url(#filter0_f_450_16456)">
							<ellipse
								cx="687.043"
								cy="986.039"
								rx="202.5"
								ry="235.5"
								transform="rotate(-180 687.043 986.039)"
								fill="white"
								fill-opacity="0.4"
							/>
						</g>
						<defs>
							<filter
								id="filter0_f_450_16456"
								x="-265.457"
								y="0.538696"
								width="1905"
								height="1971"
								filterUnits="userSpaceOnUse"
								color-interpolation-filters="sRGB"
							>
								<feFlood
									flood-opacity="0"
									result="BackgroundImageFix"
								/>
								<feBlend
									mode="normal"
									in="SourceGraphic"
									in2="BackgroundImageFix"
									result="shape"
								/>
								<feGaussianBlur
									stdDeviation="375"
									result="effect1_foregroundBlur_450_16456"
								/>
							</filter>
						</defs>
					</svg>

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
									Phera, powered by GPT-4 technology.
									Seamlessly connect and interact with
									accelerated performance, revolutionizing
									your AI experience.
								</p>
							</div>
						</div>
					</div>
					<div className="flex justify-center mt-10 md:mt-16">
						<div className="flex flex-col z-20 sm:px-6 md:px-1 md:flex-row md:gap-x-20 gap-y-10 md:max-w-screen-lg">
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
