import React from 'react'
import {Link} from "react-router-dom"

export const Componenta = () => {
  var l=[{name:"java",id:1},{name:"python",id:2},{name:"c",id:3}]
  return (
    <div>
      {l.map((e)=>{
      return <div style={{border:'2px solid red', textAlign:'center',width:'10%' }  } > <Link to={`/book/${e.id}`}  >{e.name}</Link></div>
      })}
  
    </div>
  )
}
export default Componenta