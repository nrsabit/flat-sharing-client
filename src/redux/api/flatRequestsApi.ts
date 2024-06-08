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
    getAllRequests: build.query({
      query: () => ({
        url: "/bookings",
        method: "GET",
      }),
      providesTags: ["flat-requests"],
    }),
    changeBookingStatus: build.mutation({
      query: (payload) => ({
        url: `/bookings/${payload.id}`,
        method: "PUT",
        data: payload.data,
      }),
      invalidatesTags: ["flat-requests"],
    }),
  }),
});

export const {
  useShareFlatRequestMutation,
  useGetMyRequestsQuery,
  useGetAllRequestsQuery,
  useChangeBookingStatusMutation,
} = flatRequestsApi;
