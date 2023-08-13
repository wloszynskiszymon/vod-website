import { configureStore } from '@reduxjs/toolkit';
import mediaSlice from './media-slice';
import movieSliderSlice from './movieSlider-slice';

const store = configureStore({
  reducer: { mediaSlice, movieSliderSlice },
});

export default store;
