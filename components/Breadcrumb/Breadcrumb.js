import Link from 'next/link'
import styles from  './Breadcrumb.module.css'
import { useState, useEffect } from 'react';

export default function Breadcrumb(){
    const [pages, setPages] = useState([]);
    const [links, setLinks] = useState([]);
    useEffect(()=>{
        setPages(window.location.pathname.split("/"))
        let link = ""
        let linksList = []
        window.location.pathname.split("/").map((page)=>{
            link += page + "/"
            linksList.push(link)
        })
        setLinks(linksList)
        console.log(links)
        
    },[])


    return(
        <div>
            <ul className={styles.breadcrumbList}>
                <li key={0}>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                
                {pages.map((page, index)=>{
                    return (
                        <>
                        {index != 0?
                        <img src="/right-arrow.png"/>
                        :<></>}
                        {page != ""? 
                        <li  key={index}>
                            <Link href={`${links[index]}`}>
                                <a>{page.replaceAll("_"," ")}</a>
                            </Link>
                        </li>:<></>}
                        </>
                        
                    )
                })}
            </ul>
        </div>
    )
}