import {useState} from "react";
import {useHistory} from 'react-router-dom';

const Create = () => {
    const [title,setTitle]=useState('');
    const[body,setBody]=useState('');
    const[author,setAuthor]=useState('mario');
    const[likes,setLikes]=useState(0);
    const history=useHistory();
    function randomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    
        const handleClick = () => {
            setLikes(randomNumberInRange(1, 100));
          };
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        
        const blog={title,body,author,likes};
        
        fetch('http://localhost:8000/blogs/',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            // history.go(-1);
            history.push('/');
        })
    }

    return ( 
        <div className="create">
            <h2>Add A New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label for="title">Blog Title:</label>
                <input 
                type="text"
                id="title"
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                <label for="body">Blog Body:</label>
                <textarea 
                required
                id="body"
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                >
                </textarea>
                <label for="author">Blog Author:</label>
                <select 
                id="author"
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                    <option value="luigi">Luigi</option>
                    <option value="tom">Tom</option>
                    <option value="george">George</option>
                </select>
                <button onClick={handleClick}>Add Blog</button>
            </form>
        </div>
     );
}
// 
export default Create;