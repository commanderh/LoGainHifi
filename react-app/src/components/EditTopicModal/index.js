import { Modal } from "../../context/Modal";
import EditTopicForm from './EditTopicForm'
const EditTopicModal = ({handleOffClick, topic}) => {
  return (
    <>
      <Modal onClose={handleOffClick} >
        <EditTopicForm topic={topic}/>
      </Modal>
    </>
  )
};

export default EditTopicModal;