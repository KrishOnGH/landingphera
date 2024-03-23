"use client";

import React from 'react';
import Card from './Card';
import { useEffect } from 'react';

const Card_list = [
	{
		image_src: '/icon/testimonial.png',
		heading: 'Krich Exe',
		username: 'krichexe',
		sub_text:
			"Discovering cypress has been a game-changer for my business. As a small business owner, I'm constantly looking for ways  ",
	},
	{
		image_src: '/icon/testimonial.png',
		heading: 'Krich Exe',
		username: 'krichexe',
		sub_text:
			"Discovering cypress has been a game-changer for my business. As a small business owner, I'm constantly looking for ways  ",
	},
	{
		image_src: '/icon/testimonial.png',
		heading: 'Krich Exe',
		username: 'krichexe',
		sub_text:
			"Discovering cypress has been a game-changer for my business. As a small business owner, I'm constantly looking for ways  ",
	},
	{
		image_src: '/icon/testimonial.png',
		heading: 'Krich Exe',
		username: 'krichexe',
		sub_text:
			"Discovering cypress has been a game-changer for my business. As a small business owner, I'm constantly looking for ways  ",
	},
	{
		image_src: '/icon/testimonial.png',
		heading: 'Krich Exe',
		username: 'krichexe',
		sub_text:
			"Discovering cypress has been a game-changer for my business. As a small business owner, I'm constantly looking for ways  ",
	},
	{
		image_src: '/icon/testimonial.png',
		heading: 'Krich Exe',
		username: 'krichexe',
		sub_text:
			"Discovering cypress has been a game-changer for my business. As a small business owner, I'm constantly looking for ways  ",
	},
	{
		image_src: '/icon/testimonial.png',
		heading: 'Krich Exe',
		username: 'krichexe',
		sub_text:
			"Discovering cypress has been a game-changer for my business. As a small business owner, I'm constantly looking for ways  ",
	},
	{
		image_src: '/icon/testimonial.png',
		heading: 'Krich Exe',
		username: 'krichexe',
		sub_text:
			"Discovering cypress has been a game-changer for my business. As a small business owner, I'm constantly looking for ways  ",
	},
];

export default function index() {
	useEffect(() => {
		const style = document.createElement('style');
		style.textContent = `
            .scrollbar-hide::-webkit-scrollbar {
                display: none;
            }
            .scrollbar-hide {
                -ms-overflow-style: none; 
                scrollbarWidth: none;
            }
        `;
		document.head.appendChild(style);

		return () => {
			document.head.removeChild(style);
		};
	}, []);
	return (
		<div>
			<section className="section-blue-purple text-[#8C8C8C] bg-[#030C14] body-font">
				<div className="bg-[#030C14]/[0.4] min-h-dvh pb-4 md:pb-28 lg:p-0 flex flex-col pt-20 md:pt-40 lg:pt-1">
					<div className="container mx-auto flex items-start md:items-center justify-center flex-col max-w-screen-md  px-8 lg:pt-40 md:px-1">
						<div className="bg-gradient-to-r p-px from-[#0500E8] to-[#7000FF] rounded-full mb-5">
							<button className="bg-[#1F1F1F] rounded-full py-2 px-8 md:px-6 text-lg md:text-2xl ">
								<span className="bg-gradient-to-r from-[#A5A2E8] to-[#7000FF] font-bold inline-block text-transparent bg-clip-text">
									Testimonials
								</span>
							</button>
						</div>
						<div className="md:text-center w-full">
							<div className="justify-center flex ">
								<p className="leading-relaxed mb-8 lg:w-3/5 text-sm md:text-center text-[#817EB5]">
									Join thousands of satisfied users who rely
									on our platform for their personal and
									professional productivity needs.
								</p>
							</div>
						</div>
					</div>
					<div>
						<div className="">
							<div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
								<ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll hover:animate-paused hover:cursor-pointer">
									{Card_list.map((item, key) => {
										return (
											<li>
												<Card key={key} {...item} />
											</li>
										);
									})}
								</ul>
								<ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll hover:animate-paused hover:cursor-pointer">
									{Card_list.map((item, key) => {
										return (
											<li>
												<Card key={key} {...item} />
											</li>
										);
									})}
								</ul>
							</div>
						</div>
						<div className="">
							<div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
								<ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-rev hover:animate-paused hover:cursor-pointer">
									{Card_list.map((item, key) => {
										return (
											<li>
												<Card key={key} {...item} />
											</li>
										);
									})}
								</ul>
								<ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-rev hover:animate-paused hover:cursor-pointer">
									{Card_list.map((item, key) => {
										return (
											<li>
												<Card key={key} {...item} />
											</li>
										);
									})}
								</ul>
							</div>
						</div>
						{/* <div className="">
							<div className="relative overflow-x-scroll scrollbar-hide">
								<div className="relative flex gap-1">
									{Card_list.map((item, key) => {
										return <Card key={key} {...item} />;
									})}
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</section>
		</div>
	);
}
