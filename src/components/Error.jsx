import { useState, useEffect } from 'react';

const Error = ({ children }) => {
    return (
        <div
            className="bg-red-500 rounded-sm text-white text-center mb-3 p-2 font-bold uppercase">
            {children}
        </div>
    )
}

export default Error;