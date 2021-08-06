import { useDispatch } from "react-redux";
import { Modal } from "../../context/Modal";
import { deleteTopic } from "../../store/categories";
const DeleteTopicModal = ({handleOffClick, topic}) => {
  console.log("TOPIC", topic)
  const dispatch = useDispatch
  const topicId = topic.id
  const handleDelete = () => {
    dispatch(deleteTopic({topicId}, handleOffClick))
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