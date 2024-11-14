import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        
             <div className="bg-black h-screen flex flex-col justify-center items-center">
            <h2 className="text-center text-yellow-200 font-bold">OPoSSS!!</h2>
            <img src="https://i.pinimg.com/236x/8c/bc/d2/8cbcd2a7db315f9d4235a45d5226a596.jpg" alt="" />
            <Link className='text-orange-300 font-bold' to="/">Go Back To Home</Link>
        </div>
        
    );
};

export default ErrorPage;