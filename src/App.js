import React, {useState} from 'react'

const Mark = () => {

    const gemma = "Froilan"

    const[i, get] = useState(0)

    const btn = () =>{
        get(i + 1)
    }
    
    const[user, setUser] = useState("")

    const handleOnChange = (e) =>{
       setUser(e.target.value)
    }

    console.log('user:', user)


    return(
    <React.Fragment>
        <h1>Mark Angelo D Celoza</h1>
        <h2>{gemma}</h2>
        <div>Count:{i}</div>
        <button onClick={btn}>Click</button>

        <input onChange={handleOnChange}  value={user} />
    </React.Fragment>
    )
}

export default Mark;