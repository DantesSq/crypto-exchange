import Header from '@/app/components/Header';
import Providers from '../../provider';
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <Providers>
            <Header />
            {children}
        </Providers>
    );
}
