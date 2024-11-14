import { Link } from "react-router-dom";
import wave from "../../assets/wave.svg"


const Home = () => {
    return (
        <div className=" min-h-96">
            <div className="hero">
                <div className="hero-content text-center">
                    <div>
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">Welcome to ByteBlaze</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. <br /> In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <div className="flex gap-5 justify-center">
                            <button className="btn btn-outline btn-warning"><Link to="/blogs" >Blogs</Link></button>
                            <button className="btn btn-outline btn-warning"><Link to="/bookmarks">Bookmarks</Link></button>
                        </div>
                    </div>
                </div>
                
                    <img className="w-full mt-[405px]" src={wave} alt="" />
                


            </div>
        </div>
    );
};

export default Home;