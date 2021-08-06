import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DeleteCommentModal from "../DeleteCommentModal";
import { editComment } from "../../store/comments";



const Comment = ({ comment }) => {
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditComment, setShowEditComment] = useState(false);
  const [newComment, setNewComment] = useState(comment.content);



  const handleDeleteOnClick = () => {
    setShowDeleteModal(true);
  };

  const handleDeleteOffClick = () => {
    setShowDeleteModal(false);
  };

  const handleEditComment = (e) => {
    setNewComment(e.target.value)
  };

  const openEditComment = () => {
    setShowEditComment(true);
  };

  const closeEditComment = () => {
    setShowEditComment(false);
  }

  const submitEditComment = async () => {
    comment.content = newComment;
    await dispatch(editComment(comment))
    setShowEditComment(false)
  }

  if (!user) {
    return null;
  }
  return (
    <div>
      {!showEditComment ? <div>{comment.content}</div> : <textarea value={newComment} onChange={handleEditComment}></textarea>}
      {showEditComment ? <button onClick={submitEditComment}>Submit</button> : null}
      {showEditComment ? <button onClick={closeEditComment}><i className="far fa-times-circle"></i></button> : null}
      {user && user.id === comment.user.id && <button onClick={openEditComment}><i className="fas fa-edit"></i></button>}
      {user && user.id === comment.user.id && <button onClick={handleDeleteOnClick}><i className="fas fa-trash"></i></button>}
      {showDeleteModal && <DeleteCommentModal handleOffClick={handleDeleteOffClick} comment={comment} />}
    </div>
  )
};

export default Comment;