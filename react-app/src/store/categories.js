//CONSTANTS
const LOAD_CATEGORIES = 'categories/LOAD_CATEGORIES';
const CREATE_TOPIC = "/topics/CREATE_TOPIC"
const EDIT_TOPIC = "/topics/EDIT_TOPIC"
const DELETE_TOPIC = "/topics/DELETE_TOPIC"

const load = (categories) => ({
  type: LOAD_CATEGORIES,
  categories
});

const create = (topic, category_id) => ({
  type: CREATE_TOPIC,
  topic,
  category_id
})

const edit = (topic, category_id) => ({
  type: EDIT_TOPIC,
  topic,
  category_id
})

const remove = (topic_id, category_id) => ({
  type: DELETE_TOPIC,
  topic_id,
  category_id
})

export const loadCategories = () => async (dispatch) => {
  const response = await fetch(`/api/categories/`);

  if (response.ok) {
    const data = await response.json();
    dispatch(load(data));
  }
}

export const createTopic = (topicFormValues, handleOffClick) => async (dispatch) => {
  const response = await fetch(`/api/topics/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(topicFormValues)
  })
  if (response.ok) {
    const data = await response.json();
    // console.log(">>>>>>>>><<<<<<<<", data)
    dispatch(create(data, topicFormValues.category_id))
    handleOffClick();
  }
}

export const editTopic = (topicFormValues, handleOffClick) => async (dispatch) => {
  const response = await fetch(`/api/topics/${topicFormValues.topic_id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(topicFormValues)
  })
  if (response.ok) {
    const data = await response.json();
    // console.log(">>>>>>>>><<<<<<<<", data)
    dispatch(edit(data, topicFormValues.category_id))
    handleOffClick();
  }
}

export const deleteTopic = (topicId, categoryId, handleOffClick) => async (dispatch) => {
  const response = await fetch(`/api/topics/${topicId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    dispatch(remove(topicId, categoryId))
    handleOffClick();
  }
}


let initialState = {
  all: {},
  loaded: false,
  current: null
};
const categoriesReducer = (state = initialState, action) => {

  switch (action.type) {
    case LOAD_CATEGORIES:
      return { ...state, all: action.categories, loaded: true }
    case CREATE_TOPIC:
      // const currentCategory = state.all[action.payload.category_id]
      // const topics = currentCategory.topics
      // topics[action.payload.data.id] = action.payload.data
      // const newState = {...state}
      // newState.all[action.payload.category_id].topics = topics
      // return newState;
      return {
        ...state,
        all: {
          ...state.all,
          [action.category_id]: {
            ...state.all[action.category_id],
            topics: {
              ...state.all[action.category_id].topics,
              [action.topic.id]: action.topic
            }
          }
        },

      }
    case EDIT_TOPIC:
      return {
        ...state,
        all: {
          ...state.all,
          [action.category_id]: {
            ...state.all[action.category_id],
            topics: {
              ...state.all[action.category_id].topics,
              [action.topic.id]: action.topic
            }
          }
        },
      };
    case DELETE_TOPIC:
      delete state.all[action.category_id].topics[action.topic_id]
      return {
        ...state,
        all: {
          ...state.all,
          [action.category_id]: {
            ...state.all[action.category_id],
            topics: {
              ...state.all[action.category_id].topics
            }
          }
        }
      }
    default:
      return state;
  }
}

export default categoriesReducer;
