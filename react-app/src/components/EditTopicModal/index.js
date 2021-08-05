import { Modal } from "../../context/Modal";
import EditTopicForm from './EditTopicForm'
const EditTopicModal = ({handleOffClick, topic}) => {
  return (
    <>
      <Modal onClose={handleOffClick} >
        <EditTopicForm topic={topic} handleOffClick={handleOffClick}/>
      </Modal>
    </>
  )
};

export default EditTopicModal;