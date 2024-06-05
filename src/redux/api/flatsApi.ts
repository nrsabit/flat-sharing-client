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
  }),
});

export const { useShareFlatMutation } = flatsApi;
