
import JsPDF, { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { FaDownload } from "react-icons/fa";

const Blogs = () => {


    const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

    // const generatePDF = () => {

    //     html2canvas(document.querySelector("#report")).then(canvas => {
    //         document.body.appendChild(canvas);  // if you want see your screenshot in body.
    //         const imgData = canvas.toDataURL('image/png');
    //         const pdf = new jsPDF("p", "pt", "a3");
    //         pdf.addImage(imgData, 'PNG', 0, 0);
    //         pdf.save("download.pdf");
    //     });
    // }

    const generatePDF = () => {

        const report = new JsPDF('p', 'pt', 'a3');

        // report.text("Test", 105, 10, "center"); 
        report.html(document.querySelector('#report')).then(() => {
            report.save('report.pdf');
        });
    }


    return (
        <div className="text-gray-800 w-[90%] mx-auto mt-16 md:mt-32 md:w-[80%] relative">
            <div className='flex justify-center gap-5 mb-20 absolute right-1 hover:text-slate-300'>
                <button onClick={generatePDF} disabled={isGeneratingPDF}>
                    {isGeneratingPDF ? 'Generating PDF...' : <p className='flex items-center'>Download PDF <FaDownload className='inline ml-2' /></p>}
                </button>
            </div>

            {/* blogs */}
            <div id='report' className='m-10 mb-40 w-[70%] mx-auto text-sm '>
                <div className='text-center'>
                    <h3 className='mb-3 text-2xl font-bold sm:text-xl'>React Concepts Simplified</h3>
                    <p className=''>A Comprehensive Q&A</p>
                </div>
                <div className="mb-32 mt-32 mr-0">
                    <p className=" mb-12 text-2xl font-bold sm:text-xl">
                        Differences between uncontrolled and controlled components:
                    </p>
                    <p>
                        An uncontrolled component is one where the component's state is managed internally by the component itself. The state of an uncontrolled component is typically managed using the DOM, and not through React's state management system. This means that when the user interacts with an uncontrolled component, the component's state changes are not reflected in React's virtual DOM, and React has no control over its value. Examples of uncontrolled components in React include form inputs like text fields, checkboxes, and radio buttons.
                    </p>
                    <p>
                        A controlled component, on the other hand, is one where the component's state is managed by React. The state of a controlled component is typically managed using the component's props, and the component's value is updated through callbacks that are triggered by user interactions. This means that when the user interacts with a controlled component, React's virtual DOM is updated, and the new value is passed to the component's parent. Examples of controlled components in React include form inputs that have a value prop, such as the input and textarea elements.
                    </p>
                </div>
                <div className="mb-32">
                    <p className=" mb-12 text-2xl font-bold sm:text-xl">
                        How to validate React props using PropTypes :
                    </p>
                    <p className='mb-5'>
                        React provides a library called PropTypes to validate the props passed to a component. PropTypes allow you to specify the type and shape of the props required by a component. Here's how to validate React props using PropTypes :
                    </p>
                    <p className=''>
                        <p>1. Install PropTypes package by running the following command:</p>

                        <div className="p-4 bg-slate-50 border mt-3 mb-3">
                            npm install prop-types
                        </div>
                        <p> 2. Import PropTypes in your component:</p>

                        <div className="p-4 bg-slate-50 border mt-3 mb-3">
                            import PropTypes from prop-types;

                        </div>
                        <div className='mb-3'>
                            <p>3.Define the propTypes property on your component and specify the type and shape of the props.</p>

                        </div>
                        <div>
                            <p>4. Define the type and shape of each prop.</p>

                        </div>
                    </p>

                </div>
                <div className="mb-32 ">
                    <p className=" mb-12 text-2xl font-bold sm:text-xl">
                        Tell us the difference between nodejs and express js:
                    </p>
                    <p>
                        Node.js is a runtime environment for executing JavaScript code outside of a web browser. It allows developers to write server-side applications in JavaScript, leveraging the power of a fast and efficient JavaScript engine. Node.js provides various built-in modules, such as HTTP, FS, and Path, which makes it easier to build network applications, file handling operations, and server-side web applications.
                    </p>
                    <p>
                        Express.js, on the other hand, is a web application framework for Node.js. It provides a set of features for building web applications and APIs, including routing, middleware, and templating engines. Express.js makes it easier to build robust and scalable web applications in Node.js by providing a modular and flexible architecture.


                    </p>
                    <p>
                        In summary, while Node.js is a runtime environment for executing JavaScript code outside of a web browser, Express.js is a web application framework built on top of Node.js that provides a set of features for building web applications and APIs.
                    </p>
                </div>
                <div className="mb-32">
                    <p className=" mb-12 text-2xl font-bold sm:text-xl">
                        What is a custom hook, and why will you create a custom hook?
                    </p>
                    <p>
                        Custom hook is a function that starts with the prefix "use" and allows you to reuse stateful logic between different components. Custom hooks are a way to extract and reuse some of the commonly used stateful logic from components.
                    </p>
                    <p>
                        You might create a custom hook to solve the problem of code repetition, where you find yourself copying and pasting the same code between different components. By creating a custom hook, you can encapsulate the logic in one place and reuse it wherever you need it. Custom hooks can also help make your code more readable and maintainable by abstracting away implementation details and providing a clear interface for other developers to use.
                    </p>
                    <p>
                        <ul className="list list-disc list-inside p-5 ">

                            Some examples of custom hooks you might create include:
                            <li>
                                A useFetch hook for fetching data from an API and handling loading and error states.</li>
                            <li>A useForm hook for handling form input values, validation, and submission.</li>
                            <li>A useLocalStorage hook for persisting data in local storage and updating the UI when the data changes.</li>

                        </ul>

                    </p>
                </div>
            </div>

            <hr />
        </div>
    );
};

export default Blogs;