import axios from "axios"
import { useEffect, useState } from "react"
import styles from '../../styles/Quiz.module.css'
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb"

export default function Quiz({quiz}) {
    const [questions, setQuestions] = useState([])
    useEffect(()=>{
    axios.get(`http://localhost:5000/quizes/${quiz}`).then((res)=>{
            console.log(res.data)
            setQuestions(res.data)
        })
    },[])
    return (
        <div>
            <Breadcrumb/>
             <h1>{quiz.replaceAll("_"," ")}</h1>
                <ul className={styles.questionsList}>
                    {questions.map((question)=>{
                        return(
                            <li className={styles.questionContainer}>
                                <div className={styles.questionTitleContainer}>
                                    <h2>
                                        {question.question}
                                    </h2>
                                </div>
                                    <ul className={styles.alternativesList}>
                                        {question.alternatives.map((alternative)=>{
                                            return(
                                                    <li>
                                                        <div>
                                                            
                                                        </div>
                                                        <p>{alternative}</p>
                                                    </li>
                                            )
                                        })}
                                    </ul>
                            </li>
                        )
                    })}
                </ul>
            

        </div>
       
    )
  }
  

export async function getServerSideProps(params){
    let quiz = params.params.quiz[0]

    return{
        props:{quiz}
    }
}