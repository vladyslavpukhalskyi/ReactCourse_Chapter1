import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";

const Loading = (props) => {
    return (
        <div>
            {props.loading ? (
                <p>
                    <ClipLoader
                        loading={props.loading}
                        size={150}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </p>
            ) : (
                props.children
            )}
        </div>
    );
};

export default Loading;
