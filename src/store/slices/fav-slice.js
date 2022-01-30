import { createSlice } from "@reduxjs/toolkit";

/*items is array of objects:
each object:
{
    id: movie id,
    title:,
    poster_path:,
    overview:,
    price:,
    date:,
} */
const initialFavState = {
  items: [],
  quantity: 0,
};
const favSlice = createSlice({
  name: "favourites",
  initialState: initialFavState,
  reducers: {
    /**
     * To add the favourite movie
     * @param {*} state
     * @param {object} action
     * {
     *    id,
     *    title,
     *    overview,
     *    prive,
     *    date
     * }
     */
    toggle(state, action) {
      const newItem = action.payload;

      // check whether it is an existing Item
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        // if not existing => add it
        state.quantity++;
        // You should push items properties individually
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          poster_path: newItem.poster_path,
          overview: newItem.overview,
          price: newItem.price,
          date: newItem.date,
        });
      } else {
        state.items = state.items.filter((item) => item.id !== newItem.id);
        state.quantity--;
      }
    },
    // /* Takes the id of the movie then search for it and filter*/
    // removeFromFavourite(state, action) {
    //   const itemId = action.payload;
    //   const existingItem = state.items.filter((item) => item.id === itemId);
    //   if (existingItem) {
    //     state.items = state.items.filter((item) => item.id !== itemId);
    //     state.quantity--;
    //   }
    // },
  },
});

// EXPORT actions => dispatch
// ECPORT reducer => store
export const favActions = favSlice.actions;
export default favSlice.reducer;
