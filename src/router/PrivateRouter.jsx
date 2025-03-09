import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"


const PrivateRouter = () => {

const {email,password}=useSelector((state)=> state.orderSlice)



  return email==="imren" && password==="1234" ? <Outlet/> : <Navigate to="/login"/>
  
}


export default PrivateRouter