const { createSlice } from '@redux/toolkit';

const initialState = {
  orderList: JSON.parse(
    localStorage.getItem('order') || '[]';
  )
};

const orderSlice = createslice({
  name: 'order',
  initialState,
  reducer: {
    addProduct: (state, action) => {
      const product = state.orderList.find(
        item => item.id === action.payload.id
      );

      if (product) {
        product.count += 1;
      } else {
        state.orderList.push({...action.payload, count: 1}); 
      }
    }
  }
})


export const {addProduct} = orderSlice.actions;

export default orderslice.reducer;

