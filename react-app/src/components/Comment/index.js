import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import EditTopicModal from "../EditTopicModal";
import DeleteTopicModal from "../DeleteTopicModal";



const Comment = ({ comment }) => {
  const user = useSelector(state => state.session.user)
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

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

  if (!user) {
    return null;
  }
  return (
    <div>
      <div>{comment.content}</div>
      {user && user.id === comment.user.id && <button onClick={handleEditOnClick}><i class="fas fa-edit"></i></button>}
      {user && user.id === comment.user.id && <button onClick={handleDeleteOnClick}><i class="fas fa-trash"></i></button>}
      {showEditModal && <EditTopicModal handleOffClick={handleEditOffClick} comment={comment} />}
      {showDeleteModal && <DeleteTopicModal handleOffClick={handleDeleteOffClick} comment={comment} />}
    </div>
  )
};

export default Comment;