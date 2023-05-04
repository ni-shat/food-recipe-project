import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <main>
            <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
                <div className="max-w-lg mx-auto space-y-3 text-center">
                    <h3 className="text-[#ED8B1F] font-semibold">
                        404 Error
                    </h3>
                    <p className="text-gray-800 text-4xl font-semibold sm:text-5xl">
                        Page not found
                    </p>
                    <p className="text-gray-600">
                        Sorry, the page you are looking for could not be found or has been removed.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <Link to="/" className="block py-2 px-4 text-white font-medium bg-[#ED8B1F] duration-150  rounded-lg">
                            Go back home
                        </Link>
                        <p href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-50 font-medium duration-150 active:bg-gray-100 border rounded-lg">
                            Contact support
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )

};

export default ErrorPage;