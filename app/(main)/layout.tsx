import '../reset.css';
import '../globals.css';

import Header from '../components/Header';
import Providers from '../provider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head />
            <body className="text-text dark:bg-primaryD bg-secondL">
                <Providers>
                    <Header />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
