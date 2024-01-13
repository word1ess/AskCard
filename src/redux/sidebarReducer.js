let initialState = {
  friends: [
    {
      id: 1,
      img: "https://cdn1.iconfinder.com/data/icons/business-charts/512/customer-1024.png",
      name: "Андрей",
    },
    {
      id: 2,
      img: "https://cdn1.iconfinder.com/data/icons/business-charts/512/customer-1024.png",
      name: "Женя",
    },
    {
      id: 3,
      img: "https://cdn1.iconfinder.com/data/icons/business-charts/512/customer-1024.png",
      name: "Слава",
    },
  ],
};

const sidebarReducer = (state = initialState, action) => {
  // let copyState = JSON.parse(JSON.stringify(state));
  return state;
};

export default sidebarReducer;
