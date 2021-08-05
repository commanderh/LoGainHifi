//CONSTANTS
const LOAD_CATEGORIES = 'categories/LOAD_CATEGORIES';
const CREATE_TOPIC = "/topics/CREATE_TOPIC"

const loadCategories = (categories) => ({
  type: LOAD_CATEGORIES,
  categories
});

const createATopic = (data, category_id) => ({
  type: CREATE_TOPIC,
  payload: {data: data, category_id:category_id}
})

export const getCategories = () => async (dispatch) => {
  const response = await fetch(`/api/categories/`);

  if(response.ok) {
    const data = await response.json();
    dispatch(loadCategories(data));
  }
}

export const createTopic = (topicFormValues) => async (dispatch) => {
  const response = await fetch(`/api/topics/`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(topicFormValues)
  })
  if(response.ok) {
    const data = await response.json();
    // console.log(">>>>>>>>><<<<<<<<", data)
    dispatch(createATopic(data, topicFormValues.category_id))
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
    case CREATE_TOPIC:
      const currentCategory = state.all[action.payload.category_id]
      const topics = currentCategory.topics
      topics[action.payload.data.id] = action.payload.data
      const newState = {...state}
      newState.all[action.payload.category_id].topics = topics
      return newState;
    default:
      return state;
  }
}

export default categoriesReducer;
