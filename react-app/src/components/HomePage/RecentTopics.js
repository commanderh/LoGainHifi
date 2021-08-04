import Topic from "./Topic";
const RecentTopics = ({categories}) => {
  console.log("HELLO FROM RECENT TOPICS COMPONENT", categories)
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
          console.log("CATEGORY", category)
          console.log(topic, 'THIS IS TOPIC')
          const {title, name} = category.topics[topic]
          return <Topic title={title} categoryName={name} key={topic} topicId={topic}/>
        })
      })
      }
    </div>
  )
}

export default RecentTopics;