import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { Modal } from "../../context/Modal";
import { deleteTopic } from "../../store/categories";
const DeleteTopicModal = ({handleOffClick, topic}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const topicId = topic.id;
  const categoryId = topic.category_id;
  const handleDelete = () => {
    dispatch(deleteTopic(topicId, categoryId, handleOffClick))
    history.push('/')
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

export default DeleteTopicModal;