import { transferAPI } from "@/redux/createAPI";

const contactBookingApi = transferAPI.injectEndpoints({
  endpoints: (build) => ({
    getLeads: build.query({
      query: () => `admin/get/all/leads`,
    }),
    addLeads: build.mutation({
      query: ({ formData }) => {
        return {
          url: "user/leads",
          method: "POST",
          body: formData,
          formData: true,
        };
      },
    }),
  }),
});

export const { useGetLeadsQuery, useAddLeadsMutation } = contactBookingApi;
