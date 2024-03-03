
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {

  const [userDetails,setUserDetails]=useState("")
  const [randomNum,setRandomNum] = useState("1")
  const [colorBg,setColorBg]= useState()
  

  const random=()=>{
    var randomNumber = Math.floor(Math.random() * 30) + 1;
    setRandomNum(randomNumber)
  }
  var colors = ["#FF5733", "#33FF57", "#5733FF", "#FF3357", "#33FFFE"];
  function getRandomColorFromArray() {   
    var randomIndex = Math.floor(Math.random() * colors.length);
    var bgColor = colors[randomIndex]
    setColorBg(bgColor)
  }
  console.log(colorBg);

  const getUser=async ()=>{
    const response = await fetch(`https://dummyjson.com/users/${randomNum}`)
    const data = await response.json()
    setUserDetails(data)
  }
  useEffect(()=>{
    getUser()
    getRandomColorFromArray()
  },[randomNum])
  
  console.log(userDetails.address);
  return (
    <>
     <div>
      <h1 style={{alignItems:"center",justifyContent:"center",display:"flex"}}>Random User App</h1>
     </div>
     <div   className='col-lg-6'   style={{height:"600px",width:"700px",display:"flex", marginLeft:"350px"}}>
     <div className="card p-3" style={{backgroundColor:`${colorBg}`}}>
          <div className="row " style={{width:"400px"}}>
            <div className="col-lg-6" style={{display:"inline",justifyContent:"center",alignItems:"start",marginLeft:"40px"}}>
            <div className='imm pb-3'><img src={userDetails?.image} alt="" /></div>
            <h4 className='text-center'>{userDetails?.firstName} {userDetails?.maidenName} {userDetails?.lastName}</h4>
            <p><h6>Gender : </h6>{userDetails?.gender}</p>
            <div className='d-flex'><h6>Birth Date :</h6><p>{userDetails?.birthDate}</p></div>
            <div className='d-flex'><h6>Age :</h6><p>{userDetails?.age}</p></div>
            <div className='d-flex'><h6>Weight :</h6><p>{userDetails?.weight}</p></div>
            <div className='d-flex'><h6>Height :</h6><p>{userDetails?.height}</p></div>
            <button onClick={()=>random()} className='btn btn-success'>REFRESH</button>
            </div>
          </div>
          <div className="row-lg-6 " style={{width:"400px",display:"flex",marginRight:"400px",marginTop:"-400px",marginLeft:"200px",justifyContent:"right",alignItems:"end",color:"black"}}>
          <div className="col-lg-6 " style={{}}>
            <div className=''><h5>Home Address</h5><p>{userDetails?.address?.address}</p></div>
            <div className=''><h5>Mobile Phone</h5><p>{userDetails?.phone}</p></div>
            <div className=''><h5>Company</h5><p>{userDetails?.company?.address?.address}</p></div>
            <div className=''><h5>Job Title</h5><p>{userDetails?.company?.department}</p></div>
            <div className=''><h5>Email</h5><p>{userDetails?.email}</p></div>
            </div>
        </div>
     </div>
     </div>
    </>
  )
}

export default App



