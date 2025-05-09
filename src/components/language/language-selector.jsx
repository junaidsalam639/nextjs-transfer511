"use client"
import { useCookies } from "react-cookie";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const languageOptions = [
    { code: "/en/en", name: "English" },
    { code: "/en/de", name: "German" },
];

const LanguageSelector = () => {
    const [cookies, setCookie] = useCookies(["googtrans"]);

    const handleChangeLanguage = (value) => {
        document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        setCookie("googtrans", value, { path: "/" });
        document.cookie = `googtrans=${value}; path=/;`;
        window.location.reload();
    };

    const currentLang = cookies?.googtrans || "/en/en";

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

