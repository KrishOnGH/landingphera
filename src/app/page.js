import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import CompanyLogo from "@/app/components/CompanyLogo";
import Features from "@/app/components/Features";
import Testimonials from "@/app/components/Testimonials";
import Pricing from "@/app/components/Pricing";
import Numbers from '@/app/components/Numbers';
import Footer from '@/app/components/Footer';


export default function Home() {
  return (
		<main className="">
			<Header />
			<Hero />
			<CompanyLogo />
			<Features />
			<Testimonials />
			<Pricing />
			<Numbers />
			<Footer />
		</main>
  );
}
