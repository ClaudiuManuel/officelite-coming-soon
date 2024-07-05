import { createContext, useState } from 'react';

export type Toast = {
    variant: 'success' | 'error';
    id: string;
    message: string;
};

type ToastContextType = {
    toasts: Toast[];
    setToasts: (toasts: Toast[]) => void;
    dismissToast: (id: string) => void;
    addToast: (toast: Omit<Toast, 'id'>) => void;
};

export const ToastContext = createContext<ToastContextType | Record<string, never>>({});

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const addToast = (toast: Omit<Toast, 'id'>) => {
        const toastToBeAdded = { ...toast, id: crypto.randomUUID() };
        setToasts((prevState) => [...prevState, toastToBeAdded]);
    };

    const dismissToast = (id: string) => {
        setToasts((prevState) => prevState.filter((toast) => toast.id !== id));
    };

    return (
        <ToastContext.Provider value={{ toasts, setToasts, dismissToast, addToast }}>{children}</ToastContext.Provider>
    );
};

export default ToastProvider;
