import { EditProductsForm } from "@/components/(admin)/products/edit-products-form";
import ChildrenSidebarProvider from "@/providers/children-sidebar-provider"

export default async function EditProductsPage({ params }) {
    const { id } = await params;
    return (
        <ChildrenSidebarProvider>
            <EditProductsForm id={id} />
        </ChildrenSidebarProvider>
    );
}


