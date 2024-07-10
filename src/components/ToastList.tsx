import { useContext } from 'react';
import { ToastContext } from './ToastProvider';
import Toast from './Toast';

const ToastList = () => {
    const { toasts, dismissToast } = useContext(ToastContext);

    return (
        <ul className="fixed bottom-0 right-0 flex list-none flex-col gap-4 p-4">
            {toasts.map(({ variant, message, id, fadingOut }) => {
                return (
                    <li key={id} className={`${fadingOut ? 'animate-fadeout' : 'animate-toast '} `}>
                        <Toast variant={variant} dismissToast={() => dismissToast(id)}>
                            {message}
                        </Toast>
                    </li>
                );
            })}
        </ul>
    );
};

export default ToastList;
