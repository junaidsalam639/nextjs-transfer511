import { transferAPI } from "@/redux/createAPI";

const authApi = transferAPI.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation({
            query: ({ email, password }) => {
                const formData = new FormData();
                formData.append("login_identifier", email);
                formData.append("password", password);
                return {
                    url: `admin/login`,
                    method: "POST",
                    body: formData,
                    formData: true,
                }
            },
        }),
    }),
});

export const { useLoginMutation } = authApi;



