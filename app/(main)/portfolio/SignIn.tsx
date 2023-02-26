import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SignIn = () => {
    return (
        <div
            className="container mx-auto px-[120px] mt-[15px] text-text dark:text-white text-[17px]
        ">
            <div className="bg-white  rounded-xl w-full py-[40px] flex flex-col items-center dark:bg-secondD space-y-[20px]">
                <div>
                    <Link href={'/signin'} className="text-primaryL">
                        {'Sign In '}
                    </Link>
                    to watch your portfolio!
                    <p>
                        Don't have an account?
                        <Link href={'/signup'} className="text-primaryL">
                            {' Sign Up!'}
                        </Link>
                    </p>
                </div>
                <Image src="/laptop.png" alt="" width={500} height={500} />
            </div>
        </div>
    );
};

export default SignIn;
