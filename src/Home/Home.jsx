import Hero from '../Hero/Hero';
import TrustStrip from '../TrustStrip/TrustStrip';
import CreatorSpotlight from '../CreatorSpotlight/CreatorSpotlight';
import Reviews from '../Reviews/Reviews';
import Features from '../Features/Features';
import HowItWorks from '../HowItWorks/HowItWorks';
import Pricing from '../Pricing/Pricing';
import FAQ from '../FAQ/FAQ';
import CTA from '../CTA/CTA';

export default function Home() {
    return (
        <main style={{ width: '100%', background: '#0c0c0e', overflowX: 'hidden' }}>
            <Hero />
            <TrustStrip />
            <CreatorSpotlight />
            <Reviews />
            <Features />
            <HowItWorks />
            <Pricing />
            <FAQ />
            <CTA />
        </main>
    );
}