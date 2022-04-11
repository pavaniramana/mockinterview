import React,{useState} from 'react'

const Greet = () => {
    const [name,setName] = useState("");
    const [age,setAge,] = useState("");
    const [batch,setBatch] = useState("")
    const [IsToggle,SetIsToggle] = useState(true)
    const [record,setRecord] = useState([])

    const stringObj = {
        name:name,
        age:age,
        batch:batch
    }
    const submit = () => {
        setRecord([...record,stringObj])
        SetIsToggle(false)
    }
  return (
    <div>
    { IsToggle?
            
                <div>
                    <form>
                    <label type = "text">Name</label>
                    <input type = "text" value = {name} onChange = {(e)=>setName(e.target.value)} />
                    <br />
                    <label type = "text">Age</label>
                    <input type = "text" value = {age} onChange = {(e)=>setAge(e.target.value)} />
                    <br/>
                    <label type = "text">batch</label>
                    <input type = "text" value = {batch} onChange = {(e)=>setBatch(e.target.value)} />
                </form>
                <button onClick={submit}>submit</button>
                </div>

                :
               <div>
                    {
                    record.map((val,index) =>{
                        const {name,age,batch} = val
                        return(
                            <div key={index}>
                                <h1>{name}</h1>
                                <div>{age}</div>
                                <div>{batch}</div>
                            </div>
                        )
                    })
                }
               </div>
            }
        </div>
    )
        
}

export default Greet