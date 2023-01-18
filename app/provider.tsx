'use client';

import { Provider } from 'react-redux';
import { setupStore } from '@/store/store';

const store = setupStore();

export default function Providers({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
}
