import { ProductsTable } from "@/components/(admin)/products/products-table";
import ChildrenSidebarProvider from "@/providers/children-sidebar-provider"

export default function ProductsPage() {
    return (
        <ChildrenSidebarProvider>
            <ProductsTable />
        </ChildrenSidebarProvider>
    );
}
