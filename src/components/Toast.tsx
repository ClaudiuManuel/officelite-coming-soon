import { AlertOctagon, CheckCircle, Icon, X } from 'react-feather';

type ToastVariant = 'success' | 'error';

const ICONS_BY_VARIANT: Record<ToastVariant, Icon> = {
    success: CheckCircle,
    error: AlertOctagon,
};

const TOAST_STYLING_BY_VARIANT: Record<ToastVariant, string> = {
    success: 'bg-green-100 text-green-800 [&_p]:text-green-800',
    error: 'bg-[#f7f2f2] text-accentRed [&_p]:text-accentRed',
};

const Toast = ({
    variant,
    dismissToast,
    children,
}: {
    variant: ToastVariant;
    dismissToast: () => void;
    children: React.ReactNode;
}) => {
    const Icon = ICONS_BY_VARIANT[variant];

    return (
        <div
            className={`relative flex items-center gap-4 rounded-2xl ${TOAST_STYLING_BY_VARIANT[variant]} w-[350px] max-w-full `}
        >
            <div className={'flex-shrink-0 p-4 pr-0 [&_svg]:block'}>
                <Icon size={24} />
            </div>
            <p className={'flex-1 px-0 py-3 font-semibold'}>{children}</p>
            <button
                className={'flex-shrink-0 cursor-pointer border-none bg-transparent p-4'}
                onClick={dismissToast}
                aria-label="Dismiss message"
                aria-live="off"
            >
                <X size={24} />
            </button>
        </div>
    );
};

export default Toast;
