import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useChangeBookingStatusMutation } from "@/service/bookingApi";
import { CalendarDays, Clock, MapPin, User } from "lucide-react";
import React from "react";
import { toast } from "sonner";

const statusOptions = [
  { label: "Pending", value: "0" },
  { label: "Confirmed", value: "1" },
  { label: "Completed", value: "2" },
];

const BookingList = ({ selectedBooking }) => {
  const [changeStatus] = useChangeBookingStatusMutation();

  const getStatusColor = (status) => {
    switch (status?.toString()) {
      case "0":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "1":
        return "bg-green-100 text-green-800 border-green-200";
      case "2":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusLabel = (status) => {
    switch (status?.toString()) {
      case "0":
        return "Pending";
      case "1":
        return "Confirmed";
      case "2":
        return "Completed";
      default:
        return "Unknown";
    }
  };

  const handleStatusChange = async (value, bookingId) => {
    try {
      const response = await changeStatus({
        status: value,
        id: bookingId,
      }).unwrap();
      toast.success(response?.message || "Booking updated successfully");
    } catch (err) {
      toast.error(err?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="h-dvh md:px-14 px-4 flex flex-col">
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Bookings</CardTitle>
          <CardDescription>
            {selectedBooking?.length} booking(s) found for this date
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
            {selectedBooking?.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <CalendarDays className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No bookings found for this date</p>
              </div>
            ) : (
              selectedBooking?.map((booking) => (
                <Card
                  key={booking?.id}
                  className="cursor-pointer hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-4 space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="outline"
                          className={getStatusColor(booking?.status)}
                        >
                          {getStatusLabel(booking?.status)}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          #{booking?.id}
                        </span>
                      </div>
                      <span className="text-sm font-medium">
                        ${booking?.price_after_coupon || booking?.price || "--"}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <User className="w-4 h-4" />
                      <span>
                        {booking?.first_name || "--"}{" "}
                        {booking?.last_name || "--"}
                      </span>
                    </div>

                    <div className="space-y-1 text-sm">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 mt-0.5" />
                        <div>
                          <span className="font-medium">From:</span>{" "}
                          {booking?.from_location || "--"}
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 mt-0.5" />
                        <div>
                          <span className="font-medium">To:</span>{" "}
                          {booking?.to_location || "--"}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <CalendarDays className="w-4 h-4" />
                        <span>{booking?.pickup_date || "--"}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{booking?.pickup_time || "--"}</span>
                      </div>
                    </div>

                    <div className="flex gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <CalendarDays className="w-4 h-4" />
                        <span>{booking?.dropoff_date || "--"}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{booking?.dropoff_time || "--"}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-muted-foreground">
                      <p>
                        <strong>Email:</strong> {booking?.email || "--"}
                      </p>
                      <p>
                        <strong>Phone:</strong> {booking?.phone || "--"}
                      </p>
                      <p>
                        <strong>Type:</strong> {booking?.trip_type || "--"}
                      </p>
                      <p>
                        <strong>Booking:</strong>{" "}
                        {booking?.booking_type || "--"}
                      </p>
                      <p>
                        <strong>Category:</strong> {booking?.category || "--"}
                      </p>
                      <p>
                        <strong>Distance:</strong>{" "}
                        {booking?.distance_km?.toFixed(2) || "--"} km
                      </p>
                      <p>
                        <strong>Estimated Time:</strong>{" "}
                        {booking?.estimated_travel_time || "--"}
                      </p>
                      <p>
                        <strong>Rate/km:</strong> $
                        {booking?.rate_per_km || "--"}
                      </p>
                    </div>

                    <div className="w-[160px]">
                      <Select
                        defaultValue={booking?.status?.toString()}
                        onValueChange={(value) =>
                          handleStatusChange(value, booking?.id)
                        }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          {statusOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingList;
