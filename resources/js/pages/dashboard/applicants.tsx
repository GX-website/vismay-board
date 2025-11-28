import AppLayout from "@/layouts/app-layout";
import { dashboard_applicants } from "@/routes";
import { type BreadcrumbItem } from "@/types";
import { Head } from "@inertiajs/react";
import { useState } from "react";

// Button connector to this page
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Applicants',
        href: dashboard_applicants().url,
    },
];

export default function Job() {
    // const for learning
    // const [openblah, setOpenblah] = useState(false);

    // below can be used to make styles variable later
    // const styleName = '';


    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title='Applicants'>

            </Head>
        </AppLayout>
    )
}