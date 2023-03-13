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
      
    }
  }
})


