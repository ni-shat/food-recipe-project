
import { useContext, useState } from 'react';
import './Register.css'
import { AuthContext } from '../../../Providers/AuthProvider';
import ggl from '../../../assets/loginform-icons/google.svg';
import twitter from '../../../assets/loginform-icons/twitter.svg';
import github from '../../../assets/loginform-icons/github.svg';
import { Link, useNavigate } from 'react-router-dom';


const Register = () => {

    const { createUser, loginWithGoogle, loginWithGithub, update, setLoading } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();


    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target; console.log(form)
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(name, email, photo, password);

        setError('');

        if(password !== confirmPassword){
            setError("Passwords do not match.");
            return;
        }

        if (password.length < 6) {
            setError("Password should be at least 6 characters long.");
            return;
        }

        createUser(email, password)
            .then((userCredential) => {
                // Signed in 
                console.log(userCredential.user);
                update_user(userCredential.user, name, photo);
                navigate('/', { replace: true });
                setSuccess("Your account jas been successfully created!")
                form.reset();
            })
            .catch((error) => {
                console.log(error);
                setError("You may provided an invalid email. Please check again.");
                setLoading(false);
            });
    }

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then((result) => {
                navigate('/', { replace: true });
                console.log(result.user);
            }).catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }

    const handleGithubLogin = () => {
        loginWithGithub()
            .then((result) => {
                navigate('/', { replace: true });
                console.log(result.user);
            }).catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }

    function isImage(url) {
        return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
      }

    const update_user = (currentUser, name, photo) => {
        console.log("in update user", currentUser);

        const isValid = isImage(photo);
        if(!isValid){
            photo = "";
        }

        update(currentUser, {
            displayName: name, photoURL: photo
        })
            .then(() => {
                // console.log(currentUser);
                setLoading(false);
                navigate('/', { replace: true });
            }).catch((error) => {
                console.log(error)
            });
    }


    return (
        <div className='md:p-4 w-[95%] md:w-[84%] mx-auto'>
            <main className="w-full flex flex-col md:flex-row items-center ">

                <div className='text-gray-800 text-xl font-semibold mt-10 bg-white  rounded-md p-3 w-[88%] block md:hidden'>
                    <span className=' mb-2'><span className='text-[#ED8B1F]'>Sign up</span> and <br />Join Our Delicious Journey!</span>
                    <hr className='mt-4 -mb-2' />
                    <hr className='' />
                </div>

                <div id="gradient" className="relative flex-1 md:block hidden items-center justify-center bg-gray-100 lg:flex mt-5 md:mt-0 w-[100%] mx-auto md:w-[1000px] h-auto md:h-[700px] md:p-5 p-5">
                    <div className="relative z-10 w-full max-w-md">
                        {/* <div className='text-xl text-center font-bold block md:hidden h-[150px]'><h3>Sign up</h3></div> */}
                        <div className="mt-16 space-y-3">
                            <h3 className="text-gray-800 text-xl md:text-4xl font-bold -mt-10 -md:mt-0 md:mr-0 mr-10"> Join Our Delicious Journey!</h3>
                            <p className="text-slate-700 text-sm md:text-base font-medium md:block hidden">
                                Create an account and get access to all features for 30-days, No credit card required.
                            </p>
                            <br className='block md:hidden' />
                            <div className="flex items-center -space-x-2 overflow-hidden md:block">
                                <img src="https://randomuser.me/api/portraits/women/79.jpg" className="w-10 h-10 rounded-full border-2 border-white hidden md:inline-block" />
                                <img src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg" className="w-10 h-10 rounded-full border-2 border-white hidden md:inline-block" />
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f" className="w-10 h-10 rounded-full border-2 border-white hidden md:inline-block" />
                                <img src="https://randomuser.me/api/portraits/men/86.jpg" className="w-10 h-10 rounded-full border-2 border-white hidden md:inline-block" />
                                <img src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e" className="w-10 h-10 rounded-full border-2 border-white hidden md:inline-block" />
                                <p className="text-sm text-slate-700 font-medium translate-x-5 hidden md:inline-block">
                                    Join 5.000+ users
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <div id=""
                        className="absolute inset-0 my-auto h-[500px]"
                        style={{
                            background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)", filter: "blur(118px)"
                        }}
                    >
                    </div> */}
                </div>
                <div className="flex-1 flex flex-col items-center justify-center h-screen w-[95%] md:w-auto">
                    <div className="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0 flex flex-col-reverse md:flex-col">
                        <div className=''>
                            <div className="mt-5 space-y-2">
                                <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl text-center md:text-left md:mt-0 mt-10 md:block hidden">Sign up</h3>
                                <p className="text-center md:text-left">Already have an account? <Link to="/auth-layout/login" className="font-medium text-[#ED8B1F] hover:text-slate-300 active:text-slate-300">Log in</Link></p>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-x-3">
                            <button onClick={handleGoogleLogin} className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                                <img className='w-5 h-5' src={ggl} alt="" />
                            </button>
                            <button className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                                <img className='w-5 h-5' src={twitter} alt="" />
                            </button>
                            <button onClick={handleGithubLogin} className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                                <img className='w-5 h-5' src={github} alt="" />
                            </button>
                        </div>
                        <div className="relative">
                            <span className="block w-full h-px bg-gray-300"></span>
                            <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">Or continue with</p>
                        </div>
                        <form
                            onSubmit={handleRegister}
                            className="space-y-5 w-[100%] md:w-auto md: relative md:top-0 -top-0 md:bg-transparent md:p-0 p-3 md:pt-0 pt-6 rounded-2xl drop-shadow-lg md:drop-shadow-none bg-slate-50"
                        >
                            <div>
                                <label className="font-medium">
                                    Name
                                </label>
                                <input
                                    type="text" name='name'
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-medium">
                                    Photo URL
                                </label>
                                <input
                                    type="text" name='photo'
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-medium">
                                    Email
                                </label>
                                <input
                                    type="email" name='email'
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div className='flex gap-5 items-center'>
                                <div className='w-2/4'>
                                    <label className="font-medium">
                                        Password
                                    </label>
                                    <input
                                        type="password" name='password'
                                        required
                                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                    />
                                </div>
                                <div className='w-2/4'>
                                    <label className="font-medium">
                                        Confirm password
                                    </label>
                                    <input
                                        type="password" name='confirmPassword'
                                        required
                                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                    />
                                </div>
                            </div>

                            <button
                                className="w-full px-4 py-2 text-white font-medium bg-[#ED8B1F] hover:bg-slate-300 active:bg-slate-300 rounded-lg duration-150"
                            >
                                Create account
                            </button>
                        </form>
                        <div>
                            <p className='text-red-600'>{error}</p>
                        </div>
                    </div>
                    <div className='mt-14 md:hidden block space-y-5 w-[93%] drop-shadow-md rounded-md px-2 py-6 bg-slate-50'>
                        <p className="text-slate-700 text-sm md:text-base font-medium block md:hidden">
                            Create an account and get access to all features for 30-days, No credit card required.
                        </p>
                        <div className="flex items-center -space-x-2 overflow-hidden md:block">
                            <img src="https://randomuser.me/api/portraits/women/79.jpg" className="w-10 h-10 rounded-full border-2 border-white block md:hidden" />
                            <img src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg" className="w-10 h-10 rounded-full border-2 border-white block md:hidden" />
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f" className="w-10 h-10 rounded-full border-2 border-white block md:hidden" />
                            <img src="https://randomuser.me/api/portraits/men/86.jpg" className="w-10 h-10 rounded-full border-2 border-white block md:hidden" />
                            <img src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e" className="w-10 h-10 rounded-full border-2 border-white block md:hidden" />
                            <p className="text-sm text-slate-700 font-medium translate-x-5 block md:hidden">
                                Join 5.000+ users
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>

    )
};

export default Register;