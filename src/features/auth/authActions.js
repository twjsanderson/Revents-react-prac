import { SubmissionError, reset } from 'redux-form';
import { closeModal } from "../modals/modalActions";
import { getFirestore } from 'redux-firestore';
import { toastr } from 'react-redux-toastr';

export const login = (creds) => {
    return async (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        try {
            await firebase.auth().signInWithEmailAndPassword(creds.email, creds.password);
            dispatch(closeModal());
        } catch (error) {
            console.log(error);
            throw new SubmissionError({
                _error: error.message
            })
        }
    };
}

// if you use in a function {}, like above you need to have a return statement
// but if you don't have the {}, the return is implied
export const registerUser = user => 
    async (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        try {
            let createdUser = await firebase
            .auth()
            .createUserWithEmailAndPassword(user.email, user.password);
            console.log(createdUser);
            await createdUser.user.updateProfile({
                displayName: user.displayName
            });
            let newUser = {
                displayName: user.displayName,
                createdAt: firestore.FieldValue.serverTimestamp()
            };
            // users document is created for us
            await firestore.set(`users/${createdUser.user.uid}`, {...newUser});
            dispatch(closeModal());
        } catch (error) {
            console.log(error)
            throw new SubmissionError({
                _error: error.message
            })
        }
    }

export const socialLogin = (selectedProvider) => 
    async (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        try {
            dispatch(closeModal())
            const user = await firebase.login({
                provider: selectedProvider,
                type: 'popup'
            })
            if (user.additionalUserInfo.isNewUser) {
                await firestore.set(`users/${user.user.uid}`, {
                    displayName: user.profile.displayName,
                    photoURL: user.profile.avatarUrl,
                    createdAt: firestore.FieldValue.serverTimestamp()
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
  
export const updatePassword = (creds) => 
    async (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        const user = firebase.auth().currentUser;
        try {
            await user.updatePassword(creds.newPassword1);
            await dispatch(reset('account'));
            toastr.success('Success', 'Your password has been updated')
        } catch (error) {
            throw new SubmissionError({
                _error: error.message
            })
        }
    } 

// old action
// export const logout = () => {
//     return {
//         type: SIGN_OUT_USER
//     }
// } 

