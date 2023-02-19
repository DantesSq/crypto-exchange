import React from 'react';

export default function transactionsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-[#e6e9f2] dark:bg-primaryD min-h-[100vh] pt-[50px] ">
            <div className="lg:container mx-auto 2xl:px-[120px] lg:px-[20px] px-[50px] flex justify-between flex-wrap">
                {children}
            </div>
        </div>
    );
}
