import { useFetch } from '../hooks/useFetch';
import { Link, useSearchParams } from 'react-router-dom';

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { data, error, loading } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error !== '') {
    return console.log(error);
  }

  const handleChange = (event) => {
    let search = event.target.value;

    if (search) {
      setSearchParams({ search });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div>
      <h1 className="text-center">Blog</h1>
      <input
        type="text"
        className="form-control my-3"
        value={searchParams.get('search') || ''}
        onChange={handleChange}
      />

      {data
        .filter((item) => {
          let filter = searchParams.get('search');
          if (!filter) return true;
          let title = item.title.toLowerCase();
          return title.startsWith(filter.toLowerCase());
        })
        .map((item) => (
          <h4 key={item.id}>
            <Link to={`/blog/${item.id}`}>
              {item.id}. {item.title}
            </Link>
          </h4>
        ))}
    </div>
  );
};

export default Blog;
