import { AddProductsForm } from "@/components/(admin)/products/add-products-form";
import ChildrenSidebarProvider from "@/providers/children-sidebar-provider"

export default function AddProductsPage() {
    return (
        <ChildrenSidebarProvider>
            <AddProductsForm />
        </ChildrenSidebarProvider>
    );
}
