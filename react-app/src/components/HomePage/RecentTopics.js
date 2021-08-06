import Topic from "./Topic";
import { useSelector } from 'react-redux';
const RecentTopics = () => {
  const categories = useSelector(state => Object.values(state.categories.all)) 
  if(!categories) {
    return null;
  }
  return (
    <div>
      {/* {categories.map(category => {
        return Object.values(category.topics).map((topic, index) => {
          console.log("TOPIC", topic)
          const id = Object.keys(category.topics)[index]; //1: {topic} 2: {topic} 3: {topic}
          console.log(id, 'THIS IS OUR ID')
          return <Topic title={topic.title} categoryName={category.name} key={index} id={index}/>
        })
      })
      } */}
      {categories.map(category => {
        return Object.keys(category.topics).map((topic, index) => {
          // console.log(topic, 'THIS IS TOPIC')
          const {title, name} = category.topics[topic]
          return <Topic title={title} categoryName={name} key={topic} topicId={topic} categoryId={category.id}/>
        })
      })
      }
    </div>
  )
}

export default RecentTopics;