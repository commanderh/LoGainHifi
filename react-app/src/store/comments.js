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

const remove = (comment) => ({
  type: REMOVE,
  comment
});

const edit = (comment) => ({
  type: EDIT,
  comment
});

export const loadComments = (topicId) => async (dispatch) => {
  const response = await fetch(`/api/comments/${topicId}`)
  const data = await response.json();

  if(response.ok) {
    dispatch(load(data))
  }
};


const commentsReducer = (state = initialState, action) => {
	switch(action.type) {
		case LOAD: {
			const allComments = {...action.comments};
			return {
				...allComments,
			}
		}
		case ADD: {
			return {...state, [action.comment.id]: action.comment }
		}
		case REMOVE: {
			const newState = {...state}
			delete newState[action.comment.id]
			return newState;
		}
		case EDIT: {
			return {...state, [action.comment.id]: action.comment }
		}
		default:
			return state;
	}
};

export default commentsReducer;