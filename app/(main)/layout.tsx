import '../reset.css';
import '../globals.css';

import Header from '../components/Header';
import Providers from '../provider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="dark">
            <head />
            <body className="text-text dark:bg-primaryD">
                <Providers>
                    <Header />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
