import AppLayout from "@/layouts/app-layout";
import { dashboard_jobs } from "@/routes";
import { type BreadcrumbItem } from "@/types";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

// Button connector to this page
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Job Post',
        href: dashboard_jobs().url,
    },
];

export default function Job() {
    const [addJob, setAddJob] = useState(false);

    // below can be used to make styles variable later
    // const styleName = '';

    const handleaddJob = () => {
        setAddJob((prev) => !prev);
    }


    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title='Job Post' />
                <div>
                    <Button onClick={handleaddJob}>+ Job</Button>
                    
                    {addJob && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={handleaddJob} >
                            <div className="w-full max-w-md max-h-[90vh] overflow-y-auto rounded-xl p-5 relative border mx-3 bg-white dark:bg-black" onClick={(e) => e.stopPropagation()} >
                                <label className='flex justify-center'>Add Job Post</label>
                                <Button className="absolute top-3 right-3" onClick={handleaddJob}> x </Button>
                            </div>
                        </div>
                    )}
                </div>

        </AppLayout>
    )
}