import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import { loadComments } from "../../store/comments";
import Comment from "../Comment";
const ListOfComments = () => {
  const { topicId } = useParams();
  const dispatch = useDispatch();
  const comments = useSelector(state => Object.values(state.comments));

  useEffect(() => {
    dispatch(loadComments(topicId));
  }, [dispatch, topicId]);

  return (
    <div>
      {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
    </div>
  )
};

export default ListOfComments;