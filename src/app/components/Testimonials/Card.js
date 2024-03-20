import React from 'react';

export default function Card({image_src, heading, username, sub_text}) {
	return (
		<div>
			<div className="p-4 z-50 w-dvw md:w-96">
				<div className="flex rounded-lg h-full bg-gradient-to-b from-[#030014] to-[#201F30] bg-opacity-60 p-8 flex-col text-[#817EB5]">
					<div className="flex items-center mb-3">
						<div className="w-18 h-18 mr-3 inline-flex items-center justify-center rounded-full flex-shrink-0">
							<img src={image_src} />
						</div>
						<div>
							<h2 className="text-md title-font font-medium">
								{heading}
							</h2>
							<h5 className="text-xs italic">@{username}</h5>
						</div>
					</div>
					<div className="flex-grow">
						<p className="leading-relaxed text-sm text-[#64628C]">
							{sub_text}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
