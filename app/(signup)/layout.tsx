import '../reset.css';
import '../globals.css';
import Providers from '../provider';
import Header from './Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="dark">
            <head />
            <body className=" h-screen bg:white dark:bg-secondD md:bg-secondL md:dark:bg-primaryD text-text dark:text-white">
                <Providers>
                    <Header />
                    <div className=" flex items-center justify-center">{children}</div>
                </Providers>
            </body>
        </html>
    );
}
