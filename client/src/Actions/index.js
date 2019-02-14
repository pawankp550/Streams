export const signIn = (userId) => {
    return {
        type : 'Sign_In',
        payload : userId

    }

}

export const signOut = () => {
    return {
        type : 'Sign_Out'

    }

}