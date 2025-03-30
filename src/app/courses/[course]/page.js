'use client'
import { useParams } from "next/navigation"

export default function Course(){
    const {course}= useParams()
    console.log(course)
    
    return(
        <div>
           {course}
        </div>
    )
}