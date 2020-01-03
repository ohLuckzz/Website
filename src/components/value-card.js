import React from 'react';

export default ({ title, body }) => {
    return (
        <div className="white-bg rounded shadow border flex flex-col">
            <div className="p-4 primary-bg text-white rounded-tr rounded-tl font-bold italic">
                <h5>{title}</h5>
            </div>
            <p className="p-4">{body}</p>
        </div>
    )
}