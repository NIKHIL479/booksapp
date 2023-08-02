import React from 'react'
import { useParams } from 'react-router'
import {Link} from "react-router-dom"

export const Element = () => {
    var l=[{name:"python",id:2},{name:"c",id:3},{name:"java",id:1}]
    const params=useParams()
    const id=params.id
    var name="nothing";
    for (let k of l) {
        console.log(k.name);
        if(k["id"]==id)
        {
            name=k.name
        }
   
    }

    
  return (
    <div>{name}
        
        <Link to="/book">Books</Link>


    </div>
  )
}
export default Element