import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h2 className="text-9xl">404</h2>
            <Link to="/" className="text-3xl">Go back to home</Link>
        </div>
    );
};

export default ErrorPage;