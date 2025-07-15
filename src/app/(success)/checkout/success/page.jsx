import React from "react";
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/web/header";
import SocialSidebar from "@/components/web/social-sidebar";
import Footer from "@/components/web/footer";
import Link from "next/link";
import HeroSection from "@/components/web/hero-section";

const SuccessPage = () => {
    return (
        <>
            <Header />
            <HeroSection title="Payment Successful!" subtitle="Book your transfer easily and quickly" />
            <div className="py-12 flex items-center justify-center px-4">
                <Card className="max-w-md w-full text-center shadow-xl p-6">
                    <CheckCircle className="text-green-500 w-20 h-20 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold">Payment Successful!</h2>
                    <p className="mt-2">
                        Thank you for your payment. We’ve sent you a confirmation email.
                    </p>
                    <CardContent className="mt-6">
                        <Link href="/" className="hover:bg-zinc-900 bg-orange-500 text-white py-3 px-6 rounded-lg transition-colors duration-300">
                            Go to Home
                        </Link>
                    </CardContent>
                </Card>
            </div>
            <SocialSidebar />
            <Footer />
        </>

    );
};

export default SuccessPage;
