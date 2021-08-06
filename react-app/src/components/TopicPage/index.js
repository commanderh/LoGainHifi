import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { loadCategories } from "../../store/categories";
import EditTopicModal from "../EditTopicModal";
import DeleteTopicModal from "../DeleteTopicModal";
import Comments from "./Comments";

const TopicPage = () => {
  const dispatch = useDispatch()
  const { topicId, categoryId } = useParams();
  const topic = useSelector(state => state.categories.all[categoryId]?.topics[topicId]) 
  const loaded = useSelector(state => state.categories.loaded)
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
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

  useEffect(() => {
    if(!loaded) {
      dispatch(loadCategories())
    }
  }, [loaded, dispatch])
  return ( topic || null ) && (
    <>
      <div>{topic.title}</div>
      <div>{topic.body}</div>
      {user && user.id === topic.user.id && <button onClick={handleEditOnClick}><i class="fas fa-edit"></i></button>}
      {user && user.id === topic.user.id && <button onClick={handleDeleteOnClick}><i class="fas fa-trash"></i></button>}
      {showEditModal && <EditTopicModal handleOffClick={handleEditOffClick} topic={topic}/>}
      {showDeleteModal && <DeleteTopicModal handleOffClick={handleDeleteOffClick} topic={topic}/>}
    </>
  )
}

export default TopicPage;