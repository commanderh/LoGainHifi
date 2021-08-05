import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { createTopic } from "../../store/categories"

const EditTopicForm = ({topic}) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const dispatch = useDispatch();
  const user_id = useSelector(state => state.session.user.id)

  const updateTitle = (e) => {
    setTitle(e.target.value);
  }

  const updateBody = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const topicFormValues = {
      title,
      body,
      user_id,
      category_id: categoryId
    }

    dispatch(createTopic(topicFormValues));
  };

  return (
    <div>
      <div>
        Edit your topic
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="title"
            value={title}
            placeholder="Please enter a title"
            onChange={updateTitle}
          />
        </div>
        <div>
          <textarea 
            name="body"
            value={body}
            placeholder="What do you want to talk about?"
            onChange={updateBody}
            rows="6"
            cols="50"
          />
        </div>
        <div>
          <label htmlFor="category-select">Select a Category</label>
          <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} id="category-select">
            <option value="1">Music Talk</option>
            <option value="2">Headphones</option>
            <option value="3">Equipment & Electronics</option>
            <option value="4">Speakers & Subwoofers</option>
            <option value="5">IEMs</option>
            <option value="6">Vintage or Vinyl</option>
            <option value="7">Off-Topic</option>
          </select>
        </div>
        <div>
          <button>Update Topic</button>
        </div>
      </form>
    </div>
  )
};

export default EditTopicForm;