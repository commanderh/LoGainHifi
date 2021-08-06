import Category from './Category';
import { useSelector } from 'react-redux';

const Categories = () => {
  // console.log(categories);
  const categories = useSelector(state => Object.values(state.categories.all)) 
  if(!categories) {
    return null;
  }
  return (
    <div>
      {categories.map((category, index) => (
        <Category key={index} category={category}/>
      ))}
    </div>
  )
}

export default Categories