"use client"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useEffect, useState } from "react";

const languageOptions = [
    { code: "/en/en", name: "English" },
    { code: "/en/de", name: "German" },
];

const LanguageSelector = () => {
    const [currentLang, setCurrentLang] = useState("/en/en");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const detectCountry = async () => {
            try {
                const response = await fetch('https://ipapi.co/json/');
                const data = await response.json();
                const countryCode = data.country;
                localStorage.setItem('userCountry', countryCode);
                
                const defaultLang = countryCode === 'DE' ? '/en/de' : '/en/en';
                const storedLang = localStorage.getItem("googtrans") || defaultLang;
                
                setCurrentLang(storedLang);
                setIsLoading(false);
            } catch (error) {
                console.error("Country detection failed:", error);
                setIsLoading(false);
            }
        };

        detectCountry();
    }, []);

    const handleChangeLanguage = (value) => {
        document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = `googtrans=${value}; path=/; domain=.fra-transfer.de;`;
        localStorage.setItem("googtrans", value);
        setCurrentLang(value);
        window.location.reload();
    };

    if (isLoading) {
        return <div className="w-[120px] h-[40px] bg-gray-200 rounded-md animate-pulse"></div>;
    }

    return (
        <div id="lang-selector" className="language-selector font-semibold styled-select notranslate">
            <Select
                onValueChange={(value) => handleChangeLanguage(value)}
                value={currentLang}
            >
                <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                    {languageOptions?.map((lang) => (
                        <SelectItem
                            key={lang?.code}
                            value={lang?.code}
                            className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            {lang?.name}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
};

export default LanguageSelector;

