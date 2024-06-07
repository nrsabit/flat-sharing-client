import { baseApi } from "./baseApi";

export const usersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUsers: build.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      providesTags: ["users"],
    }),
    getMe: build.query({
      query: () => ({
        url: "/users/me",
        method: "GET",
      }),
      providesTags: ["users"],
    }),
    updateUserStatus: build.mutation({
      query: (payload) => ({
        url: `/users/update-status/${payload.id}`,
        method: "PUT",
        data: payload.data,
      }),
      invalidatesTags: ["users"],
    }),
    changePassword: build.mutation({
      query: (payload) => ({
        url: `/users/change-password`,
        method: "POST",
        data: payload,
      }),
    }),
    updateProfile: build.mutation({
      query: (payload) => ({
        url: `/users/update-profile`,
        method: "PUT",
        data: payload,
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useUpdateUserStatusMutation,
  useChangePasswordMutation,
  useUpdateProfileMutation,
  useGetMeQuery,
} = usersApi;
