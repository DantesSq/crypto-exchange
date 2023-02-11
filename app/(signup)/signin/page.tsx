'use client';

import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { newPortfolio } from '@/store/portfolio/portfolioSlice';
import { loginUser } from '@/store/users/usersSlice';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';

export interface FormDataLogin {
    email: string;
    password: string;
}

const SignInPage = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const [showPass, setShowPass] = React.useState(false);

    const { authorized, userInfo } = useAppSelector((state) => state.usersSlice);
    const { usersPortfolio } = useAppSelector((state) => state.portfolioSlice);
    const usersPortfolioIds = usersPortfolio.map((item) => item.id);

    React.useEffect(() => {
        const authorization = () => {
            if (authorized && userInfo) {
                router.push('/');

                if (!usersPortfolioIds.includes(userInfo.id)) {
                    dispatch(newPortfolio(userInfo.id));
                }
            }
        };

        authorization();
    }, [authorized, userInfo]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormDataLogin>({
        mode: 'onBlur',
    });
    const onSubmit = handleSubmit(async (data) => {
        dispatch(loginUser(data));
    });

    return (
        <div className="bg-white rounded px-[40px]">
            <h1 className="text-3xl text-primaryD py-[50px]">Sign In</h1>
            <div className="flex flex-col items-center ">
                <form className="flex flex-col" onSubmit={onSubmit}>
                    <div className="my-[15px]">
                        <input
                            {...register('email', {
                                required: 'Enter Email',
                                pattern: {
                                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                    message: 'Email must contain an “@” symbol before the domain',
                                },
                            })}
                            className="bg-[#e2f2ff] w-[350px] h-[60px] py-[30px] px-[20px] rounded"
                            placeholder="Enter Email"
                        />
                        {errors.email && (
                            <h1 className="text-xs ml-[5px] text-[#FA8072]">
                                {errors.email.message}
                            </h1>
                        )}
                    </div>

                    <div className="relative text-text my-[15px]">
                        <input
                            {...register('password', {
                                required: 'Enter Password',
                                minLength: {
                                    value: 6,
                                    message: 'Password must contain at least 6 symbols',
                                },
                            })}
                            type={showPass ? 'text' : 'password'}
                            className="bg-[#e2f2ff] w-[350px] h-[60px] py-[30px] px-[20px] rounded"
                            placeholder="Enter Password"
                        />

                        {errors.password && (
                            <h1 className="text-xs ml-[5px] text-[#FA8072]">
                                {errors.password.message}
                            </h1>
                        )}

                        {!showPass ? (
                            <svg
                                className="absolute right-[10px] top-[50%] translate-y-[-50%]"
                                onClick={() => {
                                    setShowPass((prev) => !prev);
                                }}
                                fill="#6b6e7c"
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 9C10.358 9 9 10.359 9 12C9 13.642 10.358 15 12 15C13.641 15 15 13.642 15 12C15 10.359 13.641 9 12 9Z" />
                                <path d="M12 5C4.408 5 2.12632 11.617 2.10543 11.684L2 12L2.10444 12.316C2.12632 12.383 4.408 19 12 19C19.592 19 21.8737 12.383 21.8946 12.316L22 12L21.8956 11.684C21.8737 11.617 19.592 5 12 5ZM12 17C6.67774 17 4.61587 13.154 4.11657 12C4.61786 10.842 6.68072 7 12 7C17.3223 7 19.3841 10.846 19.8834 12C19.3821 13.158 17.3193 17 12 17Z" />
                            </svg>
                        ) : (
                            <svg
                                className="absolute right-[10px] top-[50%] translate-y-[-50%]"
                                onClick={() => {
                                    setShowPass((prev) => !prev);
                                }}
                                fill="#6b6e7c"
                                width="35px"
                                height="35px"
                                version="1.1"
                                viewBox="0 0 600 600"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                <g>
                                    <path d="m515.76 114.25c-4.5586-4.5586-11.941-4.5586-16.496 0l-55.156 55.156c-145.29-70.535-263.67 47.953-296.94 86.609-11.496 13.344-11.359 34.238 0.30859 47.543 28.113 32.117 57.324 57.43 87.023 75.457l-50.234 50.234c-4.5586 4.5586-4.5586 11.941 0 16.496 2.2812 2.2773 5.2656 3.418 8.25 3.418s5.9688-1.1406 8.25-3.418l314.99-315c4.5586-4.5586 4.5586-11.941 0-16.496zm-350.73 173.94c-3.9766-4.5352-4.0547-12.453-0.18359-16.953 38.273-44.461 138.44-138.66 261.73-84.301l-43.309 43.309c-9.8086-6.5625-21.285-10.23-33.258-10.23-33.086 0-59.996 26.91-59.996 59.984 0 12.07 3.543 23.586 10.125 33.375l-48.559 48.559c-29.328-16.887-58.41-41.59-86.551-73.742zm152.26 8.0312c-2.4844-4.9961-3.9414-10.473-3.9414-16.223 0-20.211 16.453-36.652 36.664-36.652 5.707 0 11.199 1.457 16.211 3.9414l-48.934 48.93zm235.55 7.7695c-30.863 35.879-105.84 108.95-204.03 108.95-18.434 0-37.664-2.5742-57.605-8.4531-6.1758-1.8242-9.707-8.3047-7.8828-14.492 1.8242-6.1641 8.3047-9.7188 14.492-7.8828 113.08 33.359 203.63-54.164 237.34-93.344 3.875-4.5 3.793-12.43-0.18359-16.977-19.516-22.285-39.605-41.164-59.688-56.125-5.1719-3.8398-6.2422-11.152-2.3945-16.316 3.8516-5.1484 11.164-6.2539 16.316-2.3945 21.41 15.926 42.711 35.934 63.324 59.461 11.668 13.34 11.793 34.238 0.30859 47.566zm-153.12-24.621c6.2773 1.4258 10.219 7.6797 8.7969 13.969-5.3672 23.617-24.246 41.586-48.102 45.766-0.68359 0.11328-11.086 1.625-13.512-9.4805-1.375-6.293 3.1328-12.395 9.4805-13.512 14.57-2.5508 26.102-13.523 29.371-27.949 1.4258-6.2891 7.6133-10.207 13.969-8.7969z" />
                                </g>
                            </svg>
                        )}
                    </div>

                    <div className="flex justify-between">
                        <p></p>
                        <Link href="/reset" className="text-[#5367fe]">
                            Forgot password?
                        </Link>
                    </div>

                    <input
                        type="submit"
                        value="Sign In"
                        className="bg-[#5367fe] text-white text-center w-[350px] h-[60px] my-[40px] rounded placeholder-white"
                    />
                </form>

                <div className="pb-[20px]">
                    <h1>
                        If you don't have an account you can
                        <Link href="/signup" className="text-[#5367fe] ml-[5px]">
                            Register Here!
                        </Link>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;
