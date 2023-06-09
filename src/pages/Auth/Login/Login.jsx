import ggl from '../../../assets/loginform-icons/google.svg';
import twitter from '../../../assets/loginform-icons/twitter.svg';
import github from '../../../assets/loginform-icons/github.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import b from '../../../assets/loginform-icons/b-6.jpg';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const Login = () => {

    const { login, loginWithGoogle, loginWithGithub, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [error, setError] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setError('');

        login(email, password)
            .then((result) => {
                console.log(result.user);
                // const photoUrl = result.user.photoURL;
                navigate(from, { replace: true });
                form.reset();
            })
            .catch((error) => {
                console.log(error.message);
                setError("Email address or password doesn't match.");
                setLoading(false);
            });

    }

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then((result) => {
                console.log(result.user);
                navigate(from, { replace: true });
            }).catch((error) => {
              console.log(error);
              setLoading(false);
            });
    }

    const handleGithubLogin = () => {
        loginWithGithub()
            .then((result) => {
                navigate(from, { replace: true });
                console.log(result.user);
            }).catch((error) => {
              console.log(error);
              setLoading(false);
            });
    }

    return (
        <main className="w-full md:mb-60 mb-64 h-auto flex flex-col items-center pt-16 bg-gray-50 sm:px-4">
            <div className='relative mb-[390px] w-[83%] opacity-5'>
                <img className='mx-auto w-full' src={b} alt="" />
            </div>
            <div className="w-full absolute space-y-6 text-gray-600 sm:max-w-md">
                <div className="text-center mb-14">
                    <div className="mt-14 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Log in to your account</h3>
                        <p className="">Don't have an account?
                            <Link to="/auth-layout/register" className="font-medium text-[#ED8B1F] hover:text-slate-300"> Sign up</Link></p>
                    </div>
                </div>
                <div className="bg-white md:w-full w-[90%] mx-auto shadow p-4 py-6 space-y-8 sm:p-6 sm:rounded-lg">
                    <form
                        onSubmit={handleLogin}
                        className="space-y-5"
                    >
                        <div>
                            <label className="font-medium">
                                Email
                            </label>
                            <input
                                type="email" placeholder='enter email' name='email'
                                required
                                className="w-full mt-2 px-3 py-3 text-gray-500 outline-none border-0 bg-slate-100 focus:border-[#ED8B1F] shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Password
                            </label>
                            <input
                                type="password" placeholder='enter password' name='password'
                                required
                                className="w-full mt-2 px-3 py-3 text-gray-500 outline-none border-0 bg-slate-100 focus:border-[#ED8B1F] shadow-sm rounded-lg"
                            />
                        </div>
                        <button
                            className="w-full px-4 py-2 text-white font-medium bg-[#ED8B1F] hover:bg-slate-300 active:bg-slate-300 rounded-lg duration-150"
                        >
                            Sign in
                        </button>
                        <div>
                            <p className='text-red-600'>{error}</p>
                        </div>
                    </form>
                    <div className="relative">
                        <span className="block w-full h-px bg-gray-300"></span>
                        <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">Or continue with</p>
                    </div>
                    <div className="grid grid-cols-3 gap-x-3">
                        <button onClick={handleGoogleLogin} className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                            <img className="w-5 h-5" src={ggl} alt="" />
                        </button>
                        <button className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                            <img className="w-5 h-5" src={twitter} alt="" />
                        </button>
                        <button onClick={handleGithubLogin} className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                            <img className="w-5 h-5" src={github} alt="" />
                        </button>
                    </div>
                </div>
                <div className="text-center">
                    <a href="javascript:void(0)" className="hover:text-indigo-600">Forgot password?</a>
                </div>
            </div>
        </main>
    )

};

export default Login;