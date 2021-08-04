import Categories from "./Categories";
import RecentTopics from "./RecentTopics";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCategories } from '../../store/categories';


const HomePage = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => Object.values(state.categories.all))
  // console.log(categories);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch])

  return (
    <>
      <Categories categories={categories}/>
      <RecentTopics categories={categories}/>
    </>
  )
}

export default HomePage;