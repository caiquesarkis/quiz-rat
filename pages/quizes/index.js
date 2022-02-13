import axios from "axios"
import { useEffect, useState } from "react"
import Link from "next/link"
import styles from '../../styles/Quizes.module.css'
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb"


export default function Quizes() {
    const [quizes, setQuizes] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/quizes').then((res)=>{
            console.log(res.data)
            setQuizes(res.data)
        })
    },[])
    
    
    return (
        <div className={styles.quizesContainer}>
            <Breadcrumb/>
             <h1 className={styles.quizesContainerTitle}>Quizes</h1>
             <ul className={styles.quizesLinks}>
                {quizes.map((quiz)=>{
                    return (
                        <li>
                            <Link href={`/quizes/${quiz.quiz}`}>
                                <a>{quiz.quiz.replaceAll("_", " ")}</a>
                            </Link>
                            
                        </li>
                    )
                })}
             </ul>
             
        </div>
       
    )
  }
  