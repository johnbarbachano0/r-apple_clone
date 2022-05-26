import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const headers = {
  "Content-Type": "application/json",
};

export const testApi = createApi({
  reducerPath: "emailApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_EMAIL_SERVER,
  }),
  tagTypes: ["Email"],
  endpoints: (builder) => ({
    postEmail: builder.mutation({
      query: ({ data }) => ({
        url: `/send`,
        method: "post",
        headers,
        body: JSON.parse(JSON.stringify(data)),
      }),
      invalidatesTags: ["Maintenance"],
    }),
  }),
});

export const { usePostEmailMutation } = testApi;
