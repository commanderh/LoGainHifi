//CONSTANTS
const LOAD_CATEGORIES = 'categories/LOAD_CATEGORIES';

const loadCategories = (categories) => ({
  type: LOAD_CATEGORIES,
  categories
});


export const getCategories = () => async (dispatch) => {
  const response = await fetch(`/api/categories`);

  if(response.ok) {
    const data = await response.json();
    dispatch(loadCategories(data));
  }
}



let initialState = {
  all: {},
  current: null
};
const categoriesReducer = (state = initialState, action) => {

  switch(action.type) {
    case LOAD_CATEGORIES:
      return {...state, all: action.categories}
    default:
      return state;
  }
}

export default categoriesReducer;
