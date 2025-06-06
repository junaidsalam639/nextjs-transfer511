import { transferAPI } from "@/redux/createAPI";

const bookingApi = transferAPI.injectEndpoints({
    endpoints: (build) => ({
        addMileageBooking: build.mutation({
            query: (formValues) => {
                const formData = new FormData();
                formData.append("from_location", formValues.startAddress);
                formData.append("to_location", formValues.endAddress);
                formData.append("pickup_date", formValues.pickupDate);
                formData.append("pickup_time", formValues.pickupTime);
                formData.append("trip_type", formValues.tripType);
                if (formValues?.dropoff_date && formValues?.dropoff_time) {
                    formData.append("dropoff_date", formValues.dropoff_date);
                    formData.append("dropoff_time", formValues.dropoff_time);
                }
                return {
                    url: "admin/mileage/booking",
                    method: "POST",
                    body: formData,
                    formData: true,
                };
            },
        }),
        addHourlyBooking: build.mutation({
            query: (formValues) => {
                console.log(formValues, 'formValues')
                const formData = new FormData();
                formData.append("start", formValues.startAddress);
                formData.append("pickup_date", formValues.pickupDate);
                formData.append("pickup_time", formValues.pickupTime);
                formData.append("duration", formValues.hours);

                return {
                    url: "admin/hourly/booking",
                    method: "POST",
                    body: formData,
                    formData: true,
                };
            },
        }),
    }),
});

export const {
    useAddHourlyBookingMutation,
    useAddMileageBookingMutation
} = bookingApi;
