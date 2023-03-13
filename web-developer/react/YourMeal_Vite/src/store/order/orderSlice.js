

const initialState = {
  orderList: JSON.parse(localStorage.getItem('order') || '[]'),
}

const orderSlice = {
  name: 'order',
  initialState,
  reducer: {
    addProduct: (state, action) 
  }
}