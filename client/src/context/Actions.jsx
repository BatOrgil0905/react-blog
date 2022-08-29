export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START"
})

export const LoginSuccess = (user)=> ({
    type: "LOGIN_SUCCESS",
    payload: user,
});

export const LoginFail = () => ({
    type: "LOGIN_FAIL"
})

export const Logout = () => ({
    type: "LOGOUT"
})