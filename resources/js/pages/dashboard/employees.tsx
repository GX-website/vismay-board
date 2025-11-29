import AppLayout from "@/layouts/app-layout";
import { dashboard_employees } from "@/routes";
import { type BreadcrumbItem } from "@/types";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

// Button connector to this page
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Employees',
        href: dashboard_employees().url,
    },
];

export default function Employees() {
    const [addJob, setAddJob] = useState(false);

    // below can be used to make styles variable later
    // const styleName = '';

    const handleaddJob = () => {
        setAddJob((prev) => !prev);
    }


    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title='Employees' />
                <div>
                    <Button onClick={handleaddJob}>+ Employees</Button>
                    
                    {addJob && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={handleaddJob} >
                            <div className="w-full max-w-md max-h-[90vh] overflow-y-auto rounded-xl p-5 relative border mx-3 bg-white dark:bg-black" onClick={(e) => e.stopPropagation()} >
                                <label className='flex justify-center'>Add Employees</label>
                                <Button className="absolute top-3 right-3" onClick={handleaddJob}> x </Button>
                            </div>
                        </div>
                    )}
                </div>

        </AppLayout>
    )
}