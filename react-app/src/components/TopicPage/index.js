import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { loadCategories } from "../../store/categories";
import EditTopicModal from "../EditTopicModal";
import DeleteTopicModal from "../DeleteTopicModal";
import ListOfComments from "../ListOfComments";
import { addComment } from "../../store/comments";

const TopicPage = () => {
  const dispatch = useDispatch()
  const { topicId, categoryId } = useParams();
  const topic = useSelector(state => state.categories.all[categoryId]?.topics[topicId])
  const loaded = useSelector(state => state.categories.loaded)
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [commentInput, setCommentInput] = useState("");
  const user = useSelector(state => state.session.user)

  // console.log("TOPIC",topic)
  const handleEditOnClick = () => {
    setShowEditModal(true);
  };

  const handleDeleteOnClick = () => {
    setShowDeleteModal(true);
  };

  const handleEditOffClick = () => {
    setShowEditModal(false);
  };

  const handleDeleteOffClick = () => {
    setShowDeleteModal(false);
  };

  const handleCommentChange = (e) => {
    setCommentInput(e.target.value);
  };

  const handleCommentSubmit = () => {
    const commentData = {
      topic_id: topicId,
      user_id: user.id,
      content: commentInput
    }

    dispatch(addComment(commentData))
  };

  useEffect(() => {
    if (!loaded) {
      dispatch(loadCategories())
    }
  }, [loaded, dispatch])
  return (topic || null) && (
    <>
      <div>{topic.title}</div>
      <div>{topic.body}</div>
      <div>
        <input placeholder="Add a public comment" onChange={handleCommentChange} value={commentInput}/>
        <button onClick={handleCommentSubmit}>Comment</button>
        <button>Cancel</button>
      </div>
      {user && user.id === topic.user.id && <button onClick={handleEditOnClick}><i class="fas fa-edit"></i></button>}
      {user && user.id === topic.user.id && <button onClick={handleDeleteOnClick}><i class="fas fa-trash"></i></button>}
      {showEditModal && <EditTopicModal handleOffClick={handleEditOffClick} topic={topic} />}
      {showDeleteModal && <DeleteTopicModal handleOffClick={handleDeleteOffClick} topic={topic} />}
      <ListOfComments />
    </>
  )
}

export default TopicPage;