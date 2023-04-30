import react,{useState} from "react"
import { FormGroup,FormControl,InputLabel,Input,Typography,styled ,Button} from "@mui/material"
import { addUser } from "../service/api";

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const defaultValue = {
    name: '',
    username:"",
    email: '',
    phone: ''
}


const AddUser=()=>{
    const [user,setUser]=useState(defaultValue)

    const onValueChange=(e)=>{
     setUser({...user,[e.target.name]:e.target.value})
    }

    const addUserDetails=async()=>{
      await addUser(user)
    }
    return(
        <div>
<Container>
    <Typography variant="h4">Add User</Typography>
<FormControl>
   <InputLabel>Name</InputLabel>
   <Input onChange={(e)=>onValueChange(e)} name="name" value=""></Input>
</FormControl>

<FormControl>
   <InputLabel>UserName</InputLabel>
   <Input onChange={(e)=>onValueChange(e)} name="username" value=""></Input>
</FormControl>

<FormControl>
   <InputLabel>Email</InputLabel>
   <Input onChange={(e)=>onValueChange(e)} name="email" value=""></Input>
</FormControl>

<FormControl>
   <InputLabel>Phone</InputLabel>
   <Input onChange={(e)=>onValueChange(e)} name="phone" value=""></Input>
</FormControl>

<FormControl>
    <Button variant="contained" onClick={()=>addUserDetails()}> Add User</Button>
</FormControl>
</Container>
        </div>
    )
}

export default AddUser