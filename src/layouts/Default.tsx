import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import './Default.scss'

export default function Default() {
  return(
    <div className='layout'>
      <Sidebar/>
        <div className="content">
            <Outlet/>
        </div>
    </div>
  )
}