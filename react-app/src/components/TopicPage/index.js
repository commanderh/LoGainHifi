import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { loadCategories } from "../../store/categories";
import EditTopicModal from "../EditTopicModal";

const TopicPage = () => {
  const dispatch = useDispatch()
  const { topicId, categoryId } = useParams();
  const topic = useSelector(state => state.categories.all[categoryId]?.topics[topicId]) 
  const loaded = useSelector(state => state.categories.loaded)
  const [showModal, setShowModal] = useState(false);
  const user = useSelector(state => state.session.user)

  // console.log("TOPIC",topic)
  const handleOnClick = () => {
    setShowModal(true);
  }

  const handleOffClick = () => {
    setShowModal(false);
  }

  useEffect(() => {
    if(!loaded) {
      dispatch(loadCategories())
    }
  }, [loaded, dispatch])
  return ( topic || null ) && (
    <>
      <div>{topic.title}</div>
      <div>{topic.body}</div>
      {user && user.id === topic.user.id && <button onClick={handleOnClick}><i class="fas fa-edit"></i></button>}
      {showModal && <EditTopicModal handleOffClick={handleOffClick} topic={topic}/>}
    </>
  )
}

export default TopicPage;