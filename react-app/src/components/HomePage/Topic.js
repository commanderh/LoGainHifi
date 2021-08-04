import { useHistory } from 'react-router-dom'
const Topic = ({ title, categoryName, topicId }) => {
  const history = useHistory();
  const handleTitleClick = () => {
    history.push(`/topic/${topicId}`)
  }
  return (
    <div>
      <div onClick={handleTitleClick}>{title}</div>
    </div>
  )
}

export default Topic;