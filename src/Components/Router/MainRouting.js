
import React from 'react'
import {Route,Switch,Link,BrowserRouter as Router}  from 'react-router-dom'
import SignIn from '../Users/SignIn'
import SignUp from '../Users/SignUp'

import HomePage from '../Home'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {useHistory}  from 'react-router-dom'

const MainRouting = () => {
    const history=useHistory()
// const auth = getAuth();
//     onAuthStateChanged(auth, (user) => {
//         if (user) {
      
//     const uid = user.uid;
//     const uemail= user.email;
//     history.push({
//         pathname:"/users",
//         state:{user}
//     })
  
// } else {
//     // User is signed out
//     // ...
// }
// });
    return (
<Router>
<Switch>
    <Route component={HomePage} path='/users'     />
    <Route component={SignIn} path='/' exact={true}     />
    <Route component={SignUp} path='/signUp' />


 
</Switch>




</Router>

    )


}

export default MainRouting
