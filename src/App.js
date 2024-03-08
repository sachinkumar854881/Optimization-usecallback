import React from 'react'
import {useState, useCallback} from 'react'
import Another from './Another'

function App(){
    
    const[number, setNumber] = useState(0)

    function addIt(){
        setNumber(number+1)
    }

    const displayName = useCallback(function(){

    },[])

    return(
        <div>
            <Another data={displayName}/>
            <button onClick={addIt}>Add</button>
        </div>
    )
}
export default App;