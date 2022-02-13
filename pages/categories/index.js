import axios from "axios"
import { useEffect, useState } from "react"
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb"

export default function Categories() {
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/categories').then((res)=>{
            console.log(res.data)
            setCategories(res.data)
        })
    },[])
    
    
    return (
        <div>
            <Breadcrumb/>
             <h1>Categories</h1>
             {categories.map((category)=>{
                 return (
                     <div>
                         {category.category}
                    </div>
                 )
             })}
        </div>
       
    )
  }
  