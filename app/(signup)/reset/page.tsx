'use client';

import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
    email: string;
    password: string;
    confirmPassword: string;
}

const ResetPasswordPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();
    const onSubmit = handleSubmit((data) => console.log(data));

    return (
        <div className="bg-white rounded px-[40px]">
            <h1 className="text-3xl text-primaryD py-[50px]">Reset Your Password</h1>
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

                    <input
                        type="submit"
                        value="Reset"
                        className="bg-[#5367fe] text-white text-center w-[350px] h-[60px] my-[40px] rounded placeholder-white"
                    />
                </form>

                <div className="pb-[40px]">
                    <h1>
                        <Link href="/signin" className="text-[#5367fe]">
                            Sign in
                        </Link>
                        <Link href="/signup" className="text-[#5367fe] ml-[15px]">
                            Register
                        </Link>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default ResetPasswordPage;
