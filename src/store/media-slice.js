import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_KEY } from '../hooks/useMedia';

const initialState = {
  header: {
    status: 'idle',
    data: [],
    error: null,
  },
  main: {
    status: 'idle',
    data: [],
    error: null,
  },
  details: {
    status: 'idle',
    data: null,
    error: null,
  },
};

export const fetchMedia = createAsyncThunk(
  'movies/fetch-media',
  async ({ link, dataLocation }) => {
    const res = await axios.get(link, {
      params: { api_key: API_KEY, with_backdrop: true, media_type: true },
    });
    return { data: res.data.results || res.data, dataLocation };
  }
);

export const fetchMedias = createAsyncThunk(
  'movies/fetch-medias',
  async ({ links, dataLocation }) => {
    const allData = {
      data: [],
    };

    const axiosRequests = links.map(async (link, index) => {
      const { id, link: url, title, media_type } = link;
      try {
        const res = await axios.get(url, {
          params: { api_key: API_KEY, with_backdrop: true, media_type: true },
        });
        return {
          status: 'succeeded',
          data: res.data.results,
          id,
          title,
          media_type,
        };
      } catch (error) {
        return { status: 'failed', error: error.message, id };
      }
    });

    const responses = await axios.all(axiosRequests);

    responses.forEach((response, index) => {
      allData.data[index] = response;
    });

    return { data: allData, dataLocation };
  }
);

const mediaSlice = createSlice({
  name: 'mediaSlice',
  initialState,
  reducers: {
    clearDetails: (state) => {
      state.details = {
        status: 'idle',
        data: null,
        error: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMedia.pending, (state, action) => {
        const { dataLocation } = action.meta.arg;
        state[dataLocation].status = 'loading';
      })
      .addCase(fetchMedia.fulfilled, (state, action) => {
        const { data, dataLocation } = action.payload;
        state[dataLocation].status = 'succeeded';
        state[dataLocation].data = data;
      })
      .addCase(fetchMedia.rejected, (state, action) => {
        const { dataLocation } = action.meta.arg;
        state[dataLocation].status = 'failed';
        state[dataLocation].error = action.error.message;
      })
      .addCase(fetchMedias.pending, (state, action) => {
        const { dataLocation } = action.meta.arg;
        state[dataLocation].status = 'loading';
      })
      .addCase(fetchMedias.fulfilled, (state, action) => {
        const { data, dataLocation } = action.payload;
        state[dataLocation].status = 'succeeded';
        state[dataLocation].data = data;
      })
      .addCase(fetchMedias.rejected, (state, action) => {
        const { dataLocation } = action.meta.arg;
        state[dataLocation].status = 'failed';
        state[dataLocation].error = 'One or more requests failed.';
      });
  },
});

export const actions = mediaSlice.actions;

export default mediaSlice.reducer;
