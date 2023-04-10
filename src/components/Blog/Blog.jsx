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
                            <p className="card-text"><span className="fw-bold">Props</span> is immutable data that are passed from a parent component to its child component as arguments.  we use props when we want to pass data from a parent component down to its child components. <br /> <span className="fw-bold">State</span> is mutable data that is managed internally by a component. It represents the current state of the component .To update the state of a component we use state.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">What is a custom hook?</h5>
                            <p className="card-text">When we call useState with an initial value, React sets up a new state variable and assigns it the initial value. When we call the updater set function , React updates the value of the state variable and re-render of component and updates the display.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">What is useRef?</h5>
                            <p className="card-text">The useEffect  to perform side effects in functional components. Side effects are any actions or operations that have an effect outside of the scope of the component.  we can add dependency on dependency change useEffect run on every change. we can add a keyboard events to keyboard handle. Modifying the DOM.  Managing state outside of the component.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">What is useMemo?</h5>
                            <p className="card-text">React is a JavaScript library to building user interfaces.  In react  we write instructions on how the page should look and behave in a virtual version of the page. we don't have to directly change the real page  React does it.    React use a virtual DOM which is like a copy of the real DOM in memory. When you make changes to your UI, React first updates the VDOM and then figures out what changes need to be made . React also provides a way to manage the state of your components, we can update them based on user interactions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
