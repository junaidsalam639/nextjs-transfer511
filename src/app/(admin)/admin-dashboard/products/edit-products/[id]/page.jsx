import { EditProductsForm } from "@/components/(admin)/products/edit-products-form";
import ChildrenSidebarProvider from "@/providers/children-sidebar-provider"

export default function EditProductsPage({ params }) {
    const { id } = params;
    return (
        <ChildrenSidebarProvider>
            <EditProductsForm id={id} />
        </ChildrenSidebarProvider>
    );
}


