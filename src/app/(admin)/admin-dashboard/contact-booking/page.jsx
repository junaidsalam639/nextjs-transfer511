import { ContactBookingTable } from "@/components/(admin)/contact-booking/contact-booking-table";
import ChildrenSidebarProvider from "@/providers/children-sidebar-provider";

export default function ContactBookingPage() {
  return (
    <ChildrenSidebarProvider>
      <ContactBookingTable />
    </ChildrenSidebarProvider>
  );
}
