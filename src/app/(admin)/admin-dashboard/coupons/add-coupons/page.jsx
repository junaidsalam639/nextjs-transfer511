import { AddCouponsForm } from "@/components/(admin)/coupons/add-coupons-form";
import ChildrenSidebarProvider from "@/providers/children-sidebar-provider"

export default function AddCouponsPage() {
    return (
        <ChildrenSidebarProvider>
            <AddCouponsForm />
        </ChildrenSidebarProvider>
    );
}
