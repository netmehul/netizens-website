import { useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Breadcrumb } from '../components/ui/Breadcrumb';

const Careers: React.FC = () => {
    useEffect(() => {
        document.title = "Careers | Netizens";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", "Join the Netizens team. Explore open roles and grow with us.");
        }
    }, []);

    return (
        <div className="bg-[#FFFAFA] min-h-screen text-black font-sans selection:bg-black selection:text-white">
            <Header />
            <Breadcrumb
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Careers' }
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

export default Careers;
