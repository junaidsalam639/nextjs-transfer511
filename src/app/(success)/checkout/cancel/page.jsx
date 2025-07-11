import React from "react";
import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/web/header";
import SocialSidebar from "@/components/web/social-sidebar";
import Footer from "@/components/web/footer";
import Link from "next/link";
import HeroSection from "@/components/web/hero-section";

const CancelPage = () => {
    return (
        <>
            <Header />
            <HeroSection title="Payment Canceled!" subtitle="Book your transfer easily and quickly" />
            <div className="py-20 flex items-center justify-center px-4">
                <Card className="max-w-md w-full text-center shadow-xl p-6">
                    <XCircle className="text-red-500 w-20 h-20 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold">Payment Canceled</h2>
                    <p className="mt-2">
                        It seems like your payment did not go through. You can try again later.
                    </p>
                    <CardContent className="mt-6">
                        <Link href="/">
                            <Button variant="destructive" className="w-full">
                                Try Again
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
            <SocialSidebar />
            <Footer />

        </>
    );
};

export default CancelPage;
