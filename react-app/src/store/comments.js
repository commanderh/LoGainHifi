const initialState = {};

const LOAD = "comments/LOAD";
const ADD = "comments/ADD";
const REMOVE = "comments/REMOVE";
const EDIT = "comments/EDIT";

const load = (comments) => ({
  type: LOAD,
  comments
});

const add = (comment) => ({
  type: ADD,
  comment
});

const remove = (id) => ({
  type: REMOVE,
  id
});

const edit = (comment) => ({
  type: EDIT,
  comment
});

export const loadComments = (topicId) => async (dispatch) => {
  const response = await fetch(`/api/comments/${topicId}`)
  const data = await response.json();

  if (response.ok) {
    dispatch(load(data))
  }
};

export const addComment = (comment) => async (dispatch) => {
  const response = await fetch(`/api/comments/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(comment)
  })
  const data = await response.json();
  console.log(data)
  if (response.ok) {
    dispatch(add(data))
  }
};

export const editComment = (comment) => async (dispatch) => {
  const response = await fetch(`/api/comments/${comment.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(comment)
  })
  const data = await response.json();
  console.log(data)
  if (response.ok) {
    dispatch(add(data))
  }
};

export const deleteComment = (id) => async (dispatch) => {
  const response = await fetch(`/api/comments/${id}`, {
    method: "DELETE",
  })
  if (response.ok) {
    dispatch(remove(id))
  }
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      const allComments = { ...action.comments };
      return {
        ...allComments,
      }
    }
    case ADD: {
      return { ...state, [action.comment.id]: action.comment }
    }
    case REMOVE: {
      const newState = { ...state }
      delete newState[action.id]
      return newState;
    }
    case EDIT: {
      return { ...state, [action.comment.id]: action.comment }
    }
    default:
      return state;
  }
};

export default commentsReducer;