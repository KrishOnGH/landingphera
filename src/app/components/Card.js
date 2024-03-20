import React from 'react';

export default function Card({ image_src, heading, sub_text}) {
	return (
		<div>
			<div className="p-4 z-50">
				<div className="border border-[#595959] rounded-lg">
					<div className="relative h-40 px-6 flex flex-row items-center border-b border-[#595959] bg-[#0B0E0F] bg-no-repeat bg-cover bg-[url('/graphics/box-net.png')] overflow-hidden">
						<div className="absolute -left-4 -top-4 ">
							<img src="/graphics/card-top.png" />
						</div>
						<div className="absolute right-0 -bottom-10  ">
							<img
								src="/graphics/card-top.png"
								className="h-16"
							/>
						</div>
						<div className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#272727] to-[#6F6F6F] border border-[#8C8C8C] p-1 ">
							<img src={image_src} className="mt-1.5" />
						</div>
						<h2 className="ml-3 text-lg text-[#fff] font-medium title-font mb-2">
							{heading}
						</h2>
					</div>
					<div className="bg-[#0B0E0F] p-6">
						<p className="leading-relaxed text-[#D9D9D9] text-sm">
							{sub_text}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
