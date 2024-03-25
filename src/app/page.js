import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import Features from '@/app/components/Features';
import Testimonials from '@/app/components/Testimonials';
import Pricing from '@/app/components/Pricing';
import Numbers from '@/app/components/Numbers';
import Footer from '@/app/components/Footer';

export default function Home() {
	return (
		<main className="">
			<div className="">
				<div className="sticky top-0 z-50">
					<Header />
				</div>
				<div id="home">
					<Hero />
				</div>
				<div id="features">
					<Features />
				</div>
				<div id="testimonials">
					<Testimonials />
				</div>
				<div id="pricing">
					<Pricing />
				</div>
				<div id="numbers">
					<Numbers />
				</div>
				<div >
					<Footer />
				</div>
			</div>
		</main>
	);
}
