import { useHistory } from 'react-router-dom'
const Topic = ({ title, categoryName, topicId, categoryId }) => {
  const history = useHistory();
  const handleTitleClick = () => {
    history.push(`/categories/${categoryId}/topics/${topicId}`)
  }
  return (
    <div>
      <div onClick={handleTitleClick}>{title}</div>
    </div>
  )
}

export default Topic;