import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

//​d330729ae9mshfff0017125454efp1eed1bjsnbbbe8186a137


// const options = {
//     method: 'GET',
//     headers: {
//       'x-rapidapi-host': 'shazam-core.p.rapidapi.com',
//       'x-rapidapi-key': 'd330729ae9mshfff0017125454efp1eed1bjsnbbbe8186a137'
//     }
//   };
  
//   fetch('https://shazam-core.p.rapidapi.com/v1/charts/world?country_code=NG', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

export const shazamCoreApi = createApi({
    reducerPath: "shazamCoreApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('x-rapidapi-host', 'shazam-core.p.rapidapi.com');
            headers.set('x-rapidapi-key', 'eb5a28731bmshe95a7779e408612p1b0befjsnc30b2401c11f');
              console.log("headers applied:", headers);
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({query: () => '/charts/world?country_code=NG'}),
        getSongDetails: builder.query({query: ({songid}) => `https://shazam-core.p.rapidapi.com/v2/tracks/details?track_id=${songid}`}),
        // getSongRelated: builder.query({query: ({songid}) => `/tracks/related?track_id=${songid}&offset=0`}),
    })
})


export const { useGetTopChartsQuery, useGetSongDetailsQuery, useGetSongRelatedQuery } = shazamCoreApi;