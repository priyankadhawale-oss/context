const Ecomp=()=>{
    return(
        <>
        <h2>ecomp comp</h2>
        <userConsumer>
            {
                user=>{
                    return(
                        <>
                        username={user}
                        </>
                    )
                }
            }
        </userConsumer>
        </>
    );
}
export default Ecomp;