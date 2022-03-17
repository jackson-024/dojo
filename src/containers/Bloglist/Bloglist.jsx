const Bloglist = ({blogs, handleDelete}) => {

    // const blogs = props.blogs

    // const handleDelete = () => {
    //     console.log('Clicked.....Bitch!!')
    // }

    return ( 
        <div className="blog-list">
            {blogs.map( blog =>(
                    <div className="blog-preview" key={blog.id}>
                        <h4>{ blog.title }</h4>
                        <p>{ blog.author }</p>
                        <button onClick={ () =>  handleDelete(blog.id) } className="button">Delete </button>
                    </div>
            ))}
        </div>
     );
}
 
export default Bloglist;