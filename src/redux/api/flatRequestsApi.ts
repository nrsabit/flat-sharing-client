import { baseApi } from "./baseApi";

export const flatRequestsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    shareFlatRequest: build.mutation({
      query: (payload) => ({
        url: "/bookings",
        method: "POST",
        data: payload,
      }),
      invalidatesTags: ["flat-requests"],
    }),
    getMyRequests: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/bookings/my-bookings",
        method: "GET",
        params: arg,
      }),
      providesTags: ["flat-requests"],
    }),
  }),
});

export const { useShareFlatRequestMutation, useGetMyRequestsQuery } =
  flatRequestsApi;
