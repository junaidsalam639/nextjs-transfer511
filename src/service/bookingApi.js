import { transferAPI } from "@/redux/createAPI";

const bookingApi = transferAPI.injectEndpoints({
    endpoints: (build) => ({
        getBooking: build.query({
            query: () => `admin/bookings`,
            providesTags: ["booking"]
        }),
        changeBookingStatus: build.mutation({
            query: ({ status, id }) => {
                const formData = new FormData();
                formData.append("_method", "PUT");
                formData.append("status", status);

                return {
                    url: `admin/bookings/${id}`,
                    method: "POST",
                    body: formData,
                    formData: true,
                };
            },
            invalidatesTags: ["booking"],
        }),
        addMileageBooking: build.mutation({
            query: (formValues) => {
                const formData = new FormData();
                formData.append("from_location", formValues.startAddress);
                formData.append("to_location", formValues.endAddress);
                formData.append("pickup_date", formValues.pickupDate);
                formData.append("pickup_time", formValues.pickupTime);
                formData.append("trip_type", formValues?.tabs === "return" ? "return" : "oneway");

                if (formValues?.tabs === "return") {
                    formData.append("dropoff_date", formValues?.dropoff_date);
                    formData.append("dropoff_time", formValues?.dropoff_time);
                }
                return {
                    url: "user/mileage/booking",
                    method: "POST",
                    body: formData,
                    formData: true,
                };
            },
        }),
    }),
});

export const {
    useAddMileageBookingMutation,
    useGetBookingQuery,
    useChangeBookingStatusMutation,
} = bookingApi;
