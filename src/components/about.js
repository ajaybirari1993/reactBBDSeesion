import React, {useState} from 'react';


function About (){
    const [count, setCount]=useState(0);

    const increment = ()=>{
        setCount(count+1);
    }
    
    return(
        <div>
            <h1>About Page</h1>
            {count}
            <button onClick={()=>increment()}>Increment</button>
        </div>
    )

}


export default About;