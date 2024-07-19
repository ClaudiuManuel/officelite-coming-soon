import { CountdownTileProps } from '@/types';
import { AnimatePresence, motion } from 'framer-motion';

const variants = {
    hidden: { opacity: 0, y: '50%' },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: '-50%' },
};

const CountdownTile: React.FC<CountdownTileProps> = ({ digitPair, timeUnit, isLightVariant }) => {
    return (
        <div
            className={`flex w-[100px] flex-col items-center justify-center rounded-xl py-4 overflow-hidden ${
                isLightVariant ? 'bg-lightBlue/25' : 'bg-dark'
            }`}
        >
            <AnimatePresence mode={'wait'}>
                <motion.h1
                    key={digitPair}
                    className={isLightVariant ? 'text-accentBlue' : 'text-white '}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={variants}
                    transition={{ duration: 0.35 }}
                >
                    {digitPair}
                </motion.h1>
            </AnimatePresence>
            <p className="font-KumbhBold text-base">{timeUnit}</p>
        </div>
    );
};

export default CountdownTile;
