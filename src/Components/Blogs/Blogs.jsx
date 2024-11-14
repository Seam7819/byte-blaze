import { useLoaderData } from "react-router-dom";

const Blogs = () => {

    const blogs = useLoaderData()
    

    return (
        <div>
            <h1>{blogs.length} </h1>
        </div>
    );
};

export default Blogs;