import { transferAPI } from "@/redux/createAPI";

const couponsApi = transferAPI.injectEndpoints({
    endpoints: (build) => ({
        addCoupons: build.mutation({
            query: (formValues) => {
                const formData = new FormData();
                formData.append("code", formValues.code);
                formData.append("discount_type", formValues.discount_type);
                formData.append("discount_amount", formValues.discount_amount);
                formData.append("expiry_date", formValues.expiry_date);
                return {
                    url: "admin/coupons",
                    method: "POST",
                    body: formData,
                    formData: true,
                };
            },
            invalidatesTags: ["coupons"]
        }),
        getCoupons: build.query({
            query: () => `admin/coupons`,
            providesTags: ["coupons"]
        }),
        getCouponsSingle: build.query({
            query: (id) => `admin/coupons/${id}`
        }),
        editCoupons: build.mutation({
            query: (formValues) => {
                const formData = new FormData();
                formData.append("_method", "PUT");
                formData.append("code", formValues.code);
                formData.append("discount_type", formValues.discount_type);
                formData.append("discount_amount", formValues.discount_amount);
                formData.append("expiry_date", formValues.expiry_date);
                return {
                    url: `admin/coupons/${formValues?.id}`,
                    method: "POST",
                    body: formData,
                    formData: true,
                };
            },
            invalidatesTags: ["coupons"]
        }),
        deleteCoupons: build.mutation({
            query: (id) => ({
                url: `admin/coupons/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["coupons"]
        }),

    }),
});

export const {
    useGetCouponsQuery,
    useGetCouponsSingleQuery,
    useAddCouponsMutation,
    useEditCouponsMutation,
    useDeleteCouponsMutation
} = couponsApi;
