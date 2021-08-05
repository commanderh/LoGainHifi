//CONSTANTS
const LOAD_CATEGORIES = 'categories/LOAD_CATEGORIES';
const CREATE_TOPIC = "/topics/CREATE_TOPIC"
const EDIT_TOPIC = "/topics/EDIT_TOPIC"

const load = (categories) => ({
  type: LOAD_CATEGORIES,
  categories
});

const create = (data, category_id) => ({
  type: CREATE_TOPIC,
  payload: {data: data, category_id:category_id}
})

const edit = (topic, category_id) => ({
  type: EDIT_TOPIC,
  topic,
  category_id
})

export const loadCategories = () => async (dispatch) => {
  const response = await fetch(`/api/categories/`);

  if(response.ok) {
    const data = await response.json();
    dispatch(load(data));
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
    dispatch(create(data, topicFormValues.category_id))
  }
}

export const editTopic = (topicFormValues) => async (dispatch) => {
  const response = await fetch(`/api/topics/${topicFormValues.topic_id}`, {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(topicFormValues)
  })
  if(response.ok) {
    const data = await response.json();
    // console.log(">>>>>>>>><<<<<<<<", data)
    dispatch(edit(data, topicFormValues.category_id))
  }
}


let initialState = {
  all: {},
  loaded: false,
  current: null
};
const categoriesReducer = (state = initialState, action) => {

  switch(action.type) {
    case LOAD_CATEGORIES:
      return {...state, all: action.categories, loaded:true}
    case CREATE_TOPIC:
      const currentCategory = state.all[action.payload.category_id]
      const topics = currentCategory.topics
      topics[action.payload.data.id] = action.payload.data
      const newState = {...state}
      newState.all[action.payload.category_id].topics = topics
      return newState;
    case EDIT_TOPIC:
      const currentCategoryEdit = state.all[action.category_id]
      const topicsEdit = currentCategoryEdit.topics
      topicsEdit[action.data.id] = action.data
      const newStateEdit = {...state}
      newStateEdit.all[action.category_id].topics = topics
      return newStateEdit;
    default:
      return state;
  }
}

export default categoriesReducer;
