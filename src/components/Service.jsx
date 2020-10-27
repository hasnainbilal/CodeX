import React, { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import Code from '../components/Code';

const Service =  () => {
    const [data,setData]=useState(false);
    setTimeout(()=>setData(true),1000);

    return (
        <React.Fragment>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            {data ? <Code /> : <Spinner /> }
        </React.Fragment>
    );
}

export default Service;