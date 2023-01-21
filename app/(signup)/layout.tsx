import '../reset.css';
import '../globals.css';
import Providers from '../provider';
import Header from './Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head />
            <body className="h-screen bg-[#e6e9f2] text-text">
                <Providers>
                    <Header />
                    <div className=" flex items-center justify-center">{children}</div>
                </Providers>
            </body>
        </html>
    );
}
