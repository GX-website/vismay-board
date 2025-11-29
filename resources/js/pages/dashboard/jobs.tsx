import AppLayout from "@/layouts/app-layout";
import { dashboard_jobs } from "@/routes";
import { type BreadcrumbItem } from "@/types";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import JobForm from '@/components/forms/jobs';
import Modal from '@/components/ui/modal';
import { ChildProcess } from "node:child_process";

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
            <div className="flex flex-col">
                <div className="flex justify-end items-center">
                    <Button className="m-5" onClick={handleaddJob}>+ Job</Button>
                </div>
                <div>
                    
                </div>
                <Modal open={addJob} onClose={handleaddJob} title="Add Job">
                    <JobForm />
                </Modal>
            </div>
        </AppLayout>
    )
}