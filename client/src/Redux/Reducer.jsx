const initialState = {
  productos: [
    {
      nombre: "producto1",
    },
    {
      nombre: "producto2",
    },
    {
      nombre: "producto3",
    },
    {
      nombre: "producto4",
    },
    {
      nombre: "producto5",
    },
    {
      nombre: "producto6",
    },
    {
      nombre: "producto7",
    },
    {
      nombre: "producto8",
    },
    {
      nombre: "producto9",
    },
    {
      nombre: "producto10",
    },
    {
      nombre: "producto11",
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default rootReducer;
