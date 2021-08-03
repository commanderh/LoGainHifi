import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCategories } from '../../store/categories';
import Category from './Category';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => Object.values(state.categories.all))
  console.log(categories);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch])
  return (
    <div>
      {categories.map((category, index) => (
        <Category key={index} category={category}/>
      ))}
    </div>
  )
}

export default Categories