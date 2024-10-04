import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";

const Loading = ({ loading, children }) => {
    return (
        <>
            {loading && (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <ClipLoader
                        size={150}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
            )}
            {!loading && children}
        </>
    );
};

export default Loading;
