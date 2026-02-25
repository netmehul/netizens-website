import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
    useEffect(() => {
        document.title = "Netizens | Main Website";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", "Welcome to the Netizens main website.");
        }
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 pt-20">
            <div className="max-w-3xl w-full text-center space-y-8">
                <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Welcome to Netizens
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    This is the main placeholder index page. Navigate to our specialized service pages below.
                </p>

                <div className="grid gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
                    <Link
                        to="/mvp-development"
                        className="group block p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all text-left"
                    >
                        <div className="h-12 w-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">MVP Development</h3>
                        <p className="text-gray-500">From idea to scalable product. Launch your MVP faster without cutting corners.</p>
                    </Link>

                    <Link
                        to="/staff-augmentation"
                        className="group block p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all text-left"
                    >
                        <div className="h-12 w-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Staff Augmentation</h3>
                        <p className="text-gray-500">Add vetted engineers to your team in days, not months.</p>
                    </Link>

                    <div className="group block p-6 bg-white rounded-2xl shadow-sm border border-gray-100 opacity-60 cursor-not-allowed text-left">
                        <div className="h-12 w-12 bg-gray-50 text-gray-400 rounded-xl flex items-center justify-center mb-4">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Web Development</h3>
                        <p className="text-gray-500">Coming soon.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
