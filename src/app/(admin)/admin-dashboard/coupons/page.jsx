import { CouponsTable } from "@/components/(admin)/coupons/coupons-table";
import ChildrenSidebarProvider from "@/providers/children-sidebar-provider"

export default function CouponsPage() {
  return (
    <ChildrenSidebarProvider>
      <CouponsTable />
    </ChildrenSidebarProvider>
  );
}
