import { Button } from '@/components/ui/button';
import { ReactNode } from 'react';

interface ModalProps {
    open: boolean;
    title?: string;
    onClose: () => void;
    children: ReactNode;
}

export default function Modal({ open, onClose, title, children}: ModalProps) {
    if (!open) return null;

    return (
        // Outside modal background
        <div className='items-center justify-center fixed inset-0 z-50 flex flex-col bg-black/50' onClick={onClose}>
            {/* Modal */}
            <div className='w-full max-w-sm max-h-[90vh] border border-gray-300 p-5 rounded-xl' onClick={(e) => e.stopPropagation()}>

                {/* Header */}
                <div className='p-5 pt-1 mb-3 rounded-xl gap-5 flex relative items-center justify-center'>
                    {title && (
                        <label className='flex text-start justify-center'>
                            {title}
                        </label>
                    )}
                    <Button className='absolute right-0' onClick={onClose}> x </Button>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
}