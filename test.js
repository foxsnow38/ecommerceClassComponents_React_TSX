



const AuthProvider = ({children}) =>{



const values ={
}


return(
 
<div>



<AuthContext.Provider    value={values} >{children}</AuthContext.Provider>

)
}

const useAuth = () =>useContext(AuthContext)

export {AuthProvider,useAuth}

