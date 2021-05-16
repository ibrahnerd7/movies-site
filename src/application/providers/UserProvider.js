import React,{createContext,Component} from 'react';
import {authentication} from '../../infrastructure/services/firebase/config'

export const UserContext=createContext({user:null});

class UserProvider extends Component{
    state={
        user:null
    };

    componentDidMount(){
        authentication.onAuthStateChanged(userAuth=>{
            this.setState({user:userAuth});
        });
    };

    render(){
        return(
            <UserContext.Provider value={this.state.user}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default UserProvider;