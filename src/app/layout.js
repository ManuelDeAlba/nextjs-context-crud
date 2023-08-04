import './globals.css';

import { TasksProvider } from '../context/TasksContext';
import Navbar from '@/components/Navbar';
import { Toaster } from 'react-hot-toast';

export const metadata = {
    title: 'Todo CRUD Context',
    description: 'Todo app using context',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <TasksProvider>
                    <Toaster />
                    <Navbar />
                    {children}
                </TasksProvider>
            </body>
        </html>
    )
}
