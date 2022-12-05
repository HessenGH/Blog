import BlogList from "./blogsList";
import useFetch from "./usefetch";

const Home = () => {
    const{data:blogs,isPending,error}=useFetch('http://localhost:8000/blogs');

    // const handleDelete=(id)=>{
    //     const newBlogs=blogs.filter(blog=>blog.id !== id);
    //     setBlogs(newBlogs);
    // }
   
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div> loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='mario')} title="Mario,s Blogs!"/> */}
            {/* <button onClick={()=>setName('luigis')}>click me</button>  */}
        </div>
     );
}
 
export default Home;