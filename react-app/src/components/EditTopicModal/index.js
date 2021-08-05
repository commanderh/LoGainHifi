import { Modal } from "../../context/Modal";
import EditTopicForm from './EditTopicForm'
const EditTopicModal = ({handleOffClick, topic}) => {
  return (
    <>
      <Modal onClose={handleOffClick} topic={topic}>
        <EditTopicForm />
      </Modal>
    </>
  )
};

export default EditTopicModal;