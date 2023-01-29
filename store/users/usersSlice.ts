import { FormDataLogin } from '@/app/(signup)/signin/page';
import { FormDataRegister } from '@/app/(signup)/signup/page';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface user {
    id: number;
    email: string;
    password: string;
}

interface usersState {
    users: user[];
    authorized: boolean;
    userInfo: user | null;
}

const initialState: usersState = {
    users: [{ id: 1, email: '333@gmail.com', password: '222222' }],
    authorized: false,
    userInfo: null,
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        registerUser(state, action: PayloadAction<FormDataRegister>) {
            const { email, password } = action.payload;
            const userExists = state.users.filter((item) => item.email == email);
            if (!userExists.length) {
                const newUser: user = {
                    id: state.users.length + 1,
                    email: email,
                    password: password,
                };

                state.users.push(newUser);
            }
        },
        loginUser(state, action: PayloadAction<FormDataLogin>) {
            const { email } = action.payload;
            const userExists = state.users.filter((item) => item.email == email);

            if (userExists.length) {
                state.authorized = true;
                state.userInfo = userExists[0];
            }
        },
        signOutUser(state) {
            state.authorized = false;
            state.userInfo = null;
        },
    },
});

export const { registerUser, loginUser, signOutUser } = usersSlice.actions;

export default usersSlice.reducer;