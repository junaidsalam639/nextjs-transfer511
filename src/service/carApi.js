import { transferAPI } from "@/redux/createAPI";

const carApi = transferAPI.injectEndpoints({
    endpoints: (build) => ({
        addCar: build.mutation({
            query: (formValues) => {
                const formData = new FormData();
                formData.append("name", formValues.name);
                formData.append("category", formValues.category);
                formData.append("passenger_capacity", formValues.passenger_capacity);
                formValues.features.forEach((feature, index) => {
                    formData.append(`features[${index}]`, feature);
                });
                if (formValues.image) {
                    formData.append("image", formValues.image);
                }
                return {
                    url: "admin/car",
                    method: "POST",
                    body: formData,
                    formData: true,
                };
            },
            invalidatesTags: ["cars"]
        }),
        getCar: build.query({
            query: () => `admin/car`,
            providesTags: ["cars"]
        }),
        getCarSingle: build.query({
            query: (id) => `admin/car/${id}`
        }),
        editCar: build.mutation({
            query: (formValues) => {
                const formData = new FormData();
                formData.append("_method", "PUT");
                formData.append("name", formValues.name);
                formData.append("category", formValues.category);
                formData.append("passenger_capacity", formValues.passenger_capacity);
                formValues.features.forEach((feature, index) => {
                    formData.append(`features[${index}]`, feature);
                });
                if (formValues.image) {
                    formData.append("image", formValues.image);
                }
                return {
                    url: `admin/car/${formValues?.id}`,
                    method: "POST",
                    body: formData,
                    formData: true,
                };
            },
            invalidatesTags: ["cars"]
        }),
        deleteCar: build.mutation({
            query: (id) => ({
                url: `admin/car/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["cars"]
        }),
        getUserCar: build.query({
            query: () => `user/view/all/cars`,
        }),
    }),
});

export const {
    useAddCarMutation,
    useGetCarQuery,
    useGetCarSingleQuery,
    useEditCarMutation,
    useDeleteCarMutation,
    useGetUserCarQuery
} = carApi;
