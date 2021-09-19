import { Link, useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import avi6 from './img/avi6.JPG';
import { Button } from '@material-ui/core';
console.log(avi6)
const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }

  return (
    <div className="blog-details">
    <img src={avi6} width="500" height="350" />
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
         
           
        <Button type='submit' variant="contained" color="primary" disableElevation onClick={handleClick}>
          Delete  </Button>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;