import Category from './Category';

const Categories = ({categories}) => {
  // console.log(categories);
  
  return (
    <div>
      {categories.map((category, index) => (
        <Category key={index} category={category}/>
      ))}
    </div>
  )
}

export default Categories