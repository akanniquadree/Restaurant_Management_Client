import { Stack, Typography, Snackbar } from "@mui/material"
import react, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

export const Verify = () =>{
    const [state, setState] = useState({open: false, vertical: 'top', horizontal: 'right',});
    const { vertical, horizontal, open } = state;
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const [notFound, setNotFound] = useState(false)
    const id = useParams()
    const token = useParams()
    useEffect(()=>{
        VerifyPage()
        handleClick({ vertical: 'top', horizontal: 'right' })
    },[])
    const VerifyPage = async() =>{
        try {
            setLoading(true)
            const {data} = await axios.get(`https://restaurantmanagement-h0y1.onrender.com/api/auth/user/${id}/verify/${token}`)
            if(data){
                setNotFound(true)
                setLoading(false)
            }
        } catch (error) {
            setLoading(false)
            setError(error.message)
            setError(error.response.data.error)
        }
    }
    const handleClick = (newState) => () => {
        setState({ ...newState, open: true });
      };
    const handleClose = () => {
        setState({ ...state, open: false });
    };

    return(
        <>
        {
            loading ?
                <Stack direction="column" sx={{height:"90vh"}} spacing={1} justifyContent={"center"} alignItems={"center"}>
                    <img src="/Images/progress.gif" alt="verify" sx={{width:"200px", height:"200px"}}/>
                </Stack>
            :
            <>
                {
                    notFound  ?
                         <Stack direction="column" sx={{height:"90vh"}} spacing={1} justifyContent={"center"} alignItems={"center"}>
                            <img src="/Images/verify.gif" alt="verify" sx={{width:"200px", height:"200px"}}/>
                            <Typography variant="h5" component="p">Thank You</Typography>
                            <Typography variant="body1" component="p">You have being verified</Typography>
                            <Typography variant="body1" component="p">You can close this page and re-login now</Typography>
                        </Stack> 
                        
                    :
                    <p>Not Found</p>
                }
            </>
        }
        {
                    error &&
                    <Snackbar
                    ContentProps={{
                        sx: {
                          background: "red"
                        }
                      }}
                        anchorOrigin={{ vertical, horizontal }}
                        open={open}
                        onClose={handleClose}
                        message={error}
                        key={vertical + horizontal}
                        autoHideDuration={6000}
                    />
                }
           
        </>
    )
}