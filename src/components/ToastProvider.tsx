import { createContext, useEffect, useRef, useState } from 'react';
import { BaseToast, Toast, ToastContextType } from '@/types';

export const ToastContext = createContext<ToastContextType | Record<string, never>>({});

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);
    const timeouts = useRef<Record<string, NodeJS.Timeout>>({});

    const addToast = (toast: BaseToast) => {
        const toastToBeAdded = { ...toast, id: crypto.randomUUID(), fadingOut: false };
        setToasts((prevState) => [...prevState, toastToBeAdded]);

        // set a timeout to fade out the toast after 3 seconds
        timeouts.current[toastToBeAdded.id] = setTimeout(() => {
            setToasts((prevState) =>
                prevState.map((toast) => (toast.id === toastToBeAdded.id ? { ...toast, fadingOut: true } : toast))
            );

            setTimeout(() => {
                dismissToast(toastToBeAdded.id);
            }, 500); // wait for the animation to finish
        }, 3000);
    };

    const dismissToast = (id: string) => {
        setToasts((prevState) => prevState.filter((toast) => toast.id !== id));

        if (timeouts.current[id]) {
            clearTimeout(timeouts.current[id]);
            delete timeouts.current[id];
        }
    };

    useEffect(() => {
        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            Object.values(timeouts.current).forEach(clearTimeout);
        };
    }, []);

    return (
        <ToastContext.Provider value={{ toasts, setToasts, dismissToast, addToast }}>{children}</ToastContext.Provider>
    );
};

export default ToastProvider;
