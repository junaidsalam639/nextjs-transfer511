import { EditCouponsForm } from "@/components/(admin)/coupons/edit-coupons-form";
import ChildrenSidebarProvider from "@/providers/children-sidebar-provider"

export default async function EditCouponsPage({ params }) {
    const { id } = await params;
    return (
        <ChildrenSidebarProvider>
            <EditCouponsForm id={id} />
        </ChildrenSidebarProvider>
    );
}


