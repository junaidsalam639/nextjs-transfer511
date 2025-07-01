"use client";
import { AppSidebar } from "@/components/web/app-sidebar"
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function ChildrenSidebarProvider({ children }) {
    const router = useRouter();

    const handlerLogout = () => {
        Cookies.remove("token");
        Cookies.remove("user");
        toast.success("Successfully logout");
        router.push("/admin-login");
    }
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex items-center h-16 shrink-0 justify-between gap-2 border-b px-4">
                    <div>
                        <SidebarTrigger className="-ml-1" />
                    </div>
                    <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
                    <Button onClick={handlerLogout}>
                        Logout
                    </Button>
                </header>
                {children}
            </SidebarInset>
        </SidebarProvider>
    );
}
