
import { ShowBookingCalendar } from "@/components/(admin)/booking/calendar/show-booking-calender";
import ChildrenSidebarProvider from "@/providers/children-sidebar-provider"

export default function BookingPage() {
    return (
        <ChildrenSidebarProvider>
            <ShowBookingCalendar />
        </ChildrenSidebarProvider>
    );
}
