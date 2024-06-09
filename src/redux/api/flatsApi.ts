import { baseApi } from "./baseApi";

export const flatsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    shareFlat: build.mutation({
      query: (payload) => ({
        url: "/flats",
        method: "POST",
        contentType: "multipart/form-data",
        data: payload,
      }),
      invalidatesTags: ["flats"],
    }),
    getAllFlats: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/flats",
        method: "GET",
        params: arg,
      }),
      providesTags: ["flats"],
    }),
    getMyFlats: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/flats/my-flats",
        method: "GET",
        params: arg,
      }),
      providesTags: ["flats"],
    }),
    getSilgleFlat: build.query({
      query: (id: string) => ({
        url: `/flats/${id}`,
        method: "GET",
      }),
      providesTags: ["flats"]
    }),
    updateFlat: build.mutation({
      query: (payload) => ({
        url: `/flats/${payload.id}`,
        method: "PUT",
        data: payload.data,
      }),
      invalidatesTags: ["flats", "flat-requests"],
    }),
    deleteFlat: build.mutation({
      query: (id) => ({
        url: `/flats/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["flats", "flat-requests"],
    }),
  }),
});

export const {
  useShareFlatMutation,
  useGetAllFlatsQuery,
  useGetMyFlatsQuery,
  useGetSilgleFlatQuery,
  useDeleteFlatMutation,
  useUpdateFlatMutation
} = flatsApi;
