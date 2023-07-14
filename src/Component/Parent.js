import Acomp from "./Parentsss/Acomp";
import { userProvider } from "./Context";
const Parent=()=>{
    return(
        <>
        <h3>i am in parent</h3>
        <userProvider value="priyanka">
            <Acomp/>
        </userProvider>
        
        </>
    );
}
export default Parent;