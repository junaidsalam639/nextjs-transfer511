
import { ShowBookingTable } from "@/components/(admin)/booking/show-booking-table";
import ChildrenSidebarProvider from "@/providers/children-sidebar-provider"

export default function BookingPage() {
    return (
        <ChildrenSidebarProvider>
            <ShowBookingTable />
        </ChildrenSidebarProvider>
    );
}
