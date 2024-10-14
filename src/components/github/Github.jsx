import React,{useEffect,useState} from 'react'
//yaha github ke followers tab chaiye jab github componrnt call ho aur yeh hoga useeffect se
import { useLoaderData } from 'react-router-dom'
function Github (){
    const data=useLoaderData()
    /*const [data, setdata] = useState([])
    useEffect(() => {
      fetch('https://api.github.com/users/divyanshucodes20')
      .then(response=>response.json())
      .then(data=>{
        console.log(data);
        setdata(data)
      })
    }, [])*/
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white text-4xl'>
      Github Followers:{data.followers}
      <img src={data.avatar_url} alt="Github Profile Pic" width={300}/>
    </div>
  )
}

export default Github
export const githubInfoLoader=async()=>{
    const response=await fetch('https://api.github.com/users/divyanshucodes20')
    return response.json()
}
//this function is use in loader in main.jsx and it is more optimization of above useeffect
