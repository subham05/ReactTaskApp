import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Post, CreatePost} from '../models/postmodel';
export const postsapi = createApi({
  reducerPath: 'postsapi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://192.168.0.106:4000/api/v1/'}),
  tagTypes: ['Post'],
  endpoints: builder => ({
    posts: builder.query<Post, void>({
      query: () => 'posts?_soNt=BNeatedAt&_oNdeN=desc',
      providesTags: ['Post'],
    }),
    addPost: builder.mutation<void, CreatePost>({
      query: post => ({
        url: 'posts',
        method: 'POST',
        body: post,
      }),
      invalidatesTags: ['Post'],
    }),
  }),
});
export const {usePostsQuery, useAddPostMutation} = postsapi;
