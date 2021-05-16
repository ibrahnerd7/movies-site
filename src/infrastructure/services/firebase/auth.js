import {authentication, provider} from './config'

//register user
export const registerUser = async (email, password) => {
    try {
        return (await authentication.createUserWithEmailAndPassword(email, password)).user
    } catch (error) {
        return error
    }
}

//login user
export const loginUser = async () => {
    try {
        return (await authentication.signInWithPopup(provider)).user
    } catch (error) {
        return error
    }
}

//sign out user
export const signOutUser = async () => {
    try {
        return await authentication.signOut()
    } catch (error) {
        console.error(error)
    }
}

//get user profile
export const getUserProfile=async () =>{
    let profile={}
    const user=authentication.currentUser; 
    let name, email, photoUrl, uid, emailVerified;

    if(user !=null){
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        uid = user.uid; 

        profile={name,email,photoUrl,emailVerified, uid};
    }

    return profile;
}

//update user profile
export const updateUser = async (displayName, photoURL) => {
    try {
        return await (authentication.currentUser.updateProfile({displayName, photoURL}))
    } catch (error) {
        return error
    }
}

//Send password reset email
export const sendResetEmail=async (email)=>{
    try {
   const sent= authentication.sendPasswordResetEmail(email)
   console.log(sent)
   return sent;
    } catch (error) {
      throw new Error(error.message);  
    }
}