import { useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Breadcrumb } from '../components/ui/Breadcrumb';

const Partners: React.FC = () => {
    useEffect(() => {
        document.title = "Partners | Netizens";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", "Partner with Netizens. Explore collaboration opportunities.");
        }
    }, []);

    return (
        <div className="bg-[#FFFAFA] min-h-screen text-black font-sans selection:bg-black selection:text-white">
            <Header />
            <Breadcrumb
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Partners' }
                ]}
                className="pt-[96px] max-w-7xl mx-auto px-4"
            />
            <main>
                {/* Content to be added */}
            </main>
            <Footer />
        </div>
    );
};

export default Partners;
