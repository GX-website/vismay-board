import AppLayout from "@/layouts/app-layout";
import { dashboard_department } from "@/routes";
import { type BreadcrumbItem } from "@/types";
import { Head } from "@inertiajs/react";
import { useState } from "react";

// Button connector to this page
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Departments',
        href: dashboard_department().url,
    },
];

export default function Department() {
    // const for learning
    // const [openblah, setOpenblah] = useState(false);

    // below can be used to make styles variable later
    // const styleName = '';

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title='Departments'>

            </Head>
        </AppLayout>
    )
}