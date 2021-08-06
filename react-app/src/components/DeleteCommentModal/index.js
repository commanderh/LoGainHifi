import { useDispatch } from "react-redux";
import { Modal } from "../../context/Modal";
import { deleteComment } from "../../store/comments";

const DeleteCommentModal = ({handleOffClick, comment}) => {
  const dispatch = useDispatch();
  const commentId = comment.id;

  const handleDelete = async () => {
    await dispatch(deleteComment(commentId))
    handleOffClick();
  };

  return (
    <>
      <Modal onClose={handleOffClick} >
        <div>
          <h1>Are you sure?</h1>
          <div>
            <button onClick={handleDelete}><i class="fas fa-check"></i></button>
            <button onClick={handleOffClick}><i class="fas fa-times"></i></button>
          </div>
        </div>
      </Modal>
    </>
  )
};

export default DeleteCommentModal;