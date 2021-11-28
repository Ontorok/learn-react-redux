import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {

            username: 'nasir',
            email: 'nasir@mail.com'
        },
        isPending: false,
        hasError: false,
        errorMessage: ''
    },
    reducers: {
        onUpdateStart: state => {
            state.isPending = true;
            state.hasError = false;
            state.errorMessage = ''
        },
        onUpdateSuccess: (state, action) => {
            const { payload } = action
            state.isPending = false;
            state.hasError = false;
            state.errorMessage = ''
            state.user = payload;
        },
        onUpdateFailed: (state, action) => {
            const { payload } = action
            state.isPending = false;
            state.hasError = true;
            state.errorMessage = payload
        }
    }
})

export const { onUpdateStart, onUpdateSuccess, onUpdateFailed } = userSlice.actions
export default userSlice.reducer