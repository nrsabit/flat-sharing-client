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
  }),
});

export const { useShareFlatMutation, useGetAllFlatsQuery } = flatsApi;
