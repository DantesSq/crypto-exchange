import Link from 'next/link';
import React from 'react';

const SignIn = () => {
    return (
        <div
            className="container mx-auto px-[120px] mt-[15px] text-text text-[17px] w-full text-center
        ">
            <Link href={'/signin'} className="text-primaryL">
                Sign In
            </Link>{' '}
            to watch your portfolio!
            <p>
                Don't have an account?{' '}
                <Link href={'/signup'} className="text-primaryL">
                    Sign Up!
                </Link>
            </p>
        </div>
    );
};

export default SignIn;
