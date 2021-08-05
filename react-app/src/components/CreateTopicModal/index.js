import { Modal } from "../../context/Modal";
import CreateTopicForm from './CreateTopicForm'
const CreateTopicModal = ({handleOffClick}) => {
  return (
    <>
      <Modal onClose={handleOffClick}>
        <CreateTopicForm />
      </Modal>
    </>
  )
};

export default CreateTopicModal;