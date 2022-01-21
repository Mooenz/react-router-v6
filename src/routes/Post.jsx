import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const Post = () => {
  const { id } = useParams();

  const { data, error, loading } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  const { title, body } = data;
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error !== '') {
    return console.log(error);
  }

  return (
    <>
      <h1 className='fw-bold'>
        {id}. {title}
      </h1>
      <p className='fw-light'>{body}</p>
    </>
  );
};

export default Post;
