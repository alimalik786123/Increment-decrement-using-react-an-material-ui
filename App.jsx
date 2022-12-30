import React,{useState} from "react";
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
const Todolist=()=>{
    const [iplist,setlist]=useState(0)
    const inc=()=>{
        setlist(iplist+1)
    }
    const dec=()=>{
        if(iplist===0){
            alert("already at minimum")
        }
        else{
        setlist(iplist-1)
        }
    }
    
  
    return(<>
    <div className="main_div">
      <div className="main_center"> <h1>{iplist}</h1>
        <div className="button_div"><Button onClick={inc}><AddIcon/></Button>
        <Button onClick={dec}><DeleteIcon/></Button>
        </div>
        </div>
    </div>
    </>)
}
export default Todolist;

 
 