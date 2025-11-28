import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard, events } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';    
import { Button } from '@/components/ui/button';
import { useState } from 'react';

// Button connector to this page
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Events',
        href: events().url,
    },
];



export default function Index() {
    // Modal state (setting it to "false" initially to hide it)
    const [open, setOpen] = useState(false);
    
    const eventcss = 'border p-2 mb-2 rounded-md w-full max-w-md';
    
    const handleOpenModal = () => {
        setOpen((prev) => !prev);
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Events" />
            <div>
                <div className='flex'>
                    {/* Main Display */}
                    <div className='flex flex-col items-center z-0'>

                    </div>

                    {/* Add Button */}
                    <Button className='m-5 float-right' variant={'default'} onClick={handleOpenModal}>Add Event</Button>
                </div>

                {/* Modal Section */}
                {open && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={handleOpenModal} >
                        <div className="w-full max-w-md max-h-[90vh] overflow-y-auto rounded-xl p-5 relative border mx-3 bg-white dark:bg-black" onClick={(e) => e.stopPropagation()} >
                            <label className='flex justify-center'>Add Event</label>
                            <Button className="absolute top-3 right-3" onClick={handleOpenModal}> x </Button>

                            <div className="flex flex-col space-y-3 mt-8">
                                <label>Event Name</label>
                                <input type="text" placeholder="Event Name" className={eventcss} />

                                <label>Created by</label>
                                <input type="text" placeholder="Created by" className={eventcss} />

                                <label>Start Date</label>
                                <input type="date" className={eventcss} />

                                <label>End Date</label>
                                <input type="date" className={eventcss} />

                                <Button className="mx-auto w-1/2">Create Event</Button>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </AppLayout>
    );
}