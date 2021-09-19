import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
<div className="not-found">
<h1>
 Sorry, this page is not valid    
</h1>
<Link to='/'>back to home page</Link> 
</div>

     );
}
 
export default NotFound;