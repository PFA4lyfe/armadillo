import React from "react";
import '/src/scss/styles.css';
import ErrorPicture from '/src/assets/images/PFA7404.png';
 
const ErrorPage = () => {
    return (
        <div className="body" id="error-page">
            <span >
              <img className='error-img' src={ErrorPicture} />
                <h1 id="error-message">404 Error - Page Not Found</h1>
                <section className="error-details">
                    <p>Oops! It seems like the page you are looking for does not exist.</p>
                    <p>The Pink Fairy Armadillo is lost...</p>
                    <p>Maybe you can help it find its way?</p>
                </section>
            </span >
        </div>
    );
};
 
export default ErrorPage;