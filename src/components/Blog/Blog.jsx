import React from "react";

const Blog = () => {
    return (
        <div className="container mt-5">
            <h1>Q&A</h1>
            <div className="row">
                <div className="col-sm-6 mb-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">When should you use context API?</h5>
                            <p className="card-text">The React Context API is useful when we have data or state that needs to be accessed by multiple components throughout our application. It can simplify our code and make it more modular by avoiding prop drilling. It's particularly helpful for global state management, such as user authentication, theme settings, and language preferences. However, it should be used judiciously to avoid unnecessary complexity.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">What is a custom hook?</h5>
                            <p className="card-text">A custom hook is a function in React that allows us to reuse stateful logic between different components without duplicating code. It follows the naming convention of starting with "use" and can use built-in React hooks as well as other custom hooks. Custom hooks are useful for creating reusable and composable logic, such as fetching data from an API, that can be used in multiple components throughout our application.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">What is useRef?</h5>
                            <p className="card-text">useRef is a hook in React that returns a mutable ref object to hold a reference to a DOM element or a value that persists between renders. It allows us to access and modify component properties without triggering a re-render, and manipulate DOM elements directly without relying on event listeners.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">What is useMemo?</h5>
                            <p className="card-text">useMemo is a React hook that can help optimize performance by memoizing the result of a function and reusing it between renders. It allows you to avoid unnecessary computations and improve rendering speed, but should be used with care to avoid excessive memory usage and complexity.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
