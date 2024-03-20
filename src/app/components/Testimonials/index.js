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
			<section className="section-blue-purple text-[#8C8C8C] body-font">
				<div className="bg-[#27335F]/[0.2] min-h-dvh pb-32 lg:p-0 flex flex-col pt-20 md:pt-40 lg:pt-1">
					<div className="container mx-auto flex items-start md:items-center justify-center flex-col max-w-screen-md px-4 lg:pt-40 lg:px-1">
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
							<div className="relative overflow-x-scroll scrollbar-hide">
								<div className="relative flex gap-1">
									{Card_list.map((item, key) => {
										return <Card key={key} {...item} />;
									})}
								</div>
							</div>
						</div>
						<div className="">
							<div className="relative overflow-x-scroll scrollbar-hide">
								<div className="relative flex gap-1">
									{Card_list.map((item, key) => {
										return <Card key={key} {...item} />;
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
