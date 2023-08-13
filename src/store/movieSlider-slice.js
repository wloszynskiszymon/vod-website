import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sliders: [],
};

const movieSliderSlice = createSlice({
  name: 'movieSlider',
  initialState,
  reducers: {
    initSlider(state, action) {
      const { sliderID, data } = action.payload;

      const existingSlider = state.sliders.find(
        (slider) => slider.sliderID === sliderID
      );

      if (existingSlider) {
        // Use immer to create a new state object with the updated slider
        existingSlider.data = data;
        existingSlider.maxPages = Math.ceil(data.length / 4);
      } else {
        const slider = {
          sliderID,
          data,
          currentPage: 0,
          maxPages: Math.ceil(data.length / 4),
        };
        state.sliders.push(slider);
      }
    },
    increment(state, action) {
      const sliderID = action.payload;
      const slider = state.sliders.find(
        (slider) => slider.sliderID === sliderID
      );
      if (slider.currentPage < slider.maxPages - 1) {
        slider.currentPage++;
      }
    },

    decrement(state, action) {
      const sliderID = action.payload;
      const slider = state.sliders.find(
        (slider) => slider.sliderID === sliderID
      );

      if (slider.currentPage > 0) {
        slider.currentPage--;
      }
    },
    setCurrentPage(state, action) {
      const { sliderID, page } = action.payload;
      console.log(sliderID, page, action);
      const slider = state.sliders.find(
        (slider) => slider.sliderID === sliderID
      );
      slider.currentPage = page;
    },
  },
});

export const { initSlider, increment, decrement, setCurrentPage } =
  movieSliderSlice.actions;

export default movieSliderSlice.reducer;
