import Categories from "./Categories";
import RecentTopics from "./RecentTopics";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { loadCategories } from '../../store/categories';
import CreateTopicModal from '../CreateTopicModal';


const HomePage = () => {
  const dispatch = useDispatch();
  // const categories = useSelector(state => Object.values(state.categories.all))
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch])

  const handleOnClick = () => {
    setShowModal(true);
  }

  const handleOffClick = () => {
    setShowModal(false);
  }

  return (
    <>
      <button id="newTopic" onClick={handleOnClick}>New Topic</button>
      {showModal && <CreateTopicModal handleOffClick={handleOffClick}/>}
      <Categories />
      <RecentTopics />
    </>
  )
}

export default HomePage;