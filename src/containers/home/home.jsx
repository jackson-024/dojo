import { useState } from "react";
import Bloglist from "../Bloglist/Bloglist";

const Home = () => {

    const [ blogs, setBlog] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlog(newBlogs)
    }

    return (  
        <div className="container p-3">
            <div className="Home">
                <Bloglist blogs={blogs} handleDelete={handleDelete}/>
             </div>
        </div>
     );
}
 
export default Home;