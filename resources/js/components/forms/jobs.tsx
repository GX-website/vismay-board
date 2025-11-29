import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
export default function JobForm() {
    const inputCss = 'p-2 w-full border border-gray-300 rounded-md mb-5';

    return (

            <div className='flex flex-col space-y-3'>
                <Label>Job Title</Label>
                <input type="text" placeholder='Job' className={inputCss} />

                <Label>Company Name</Label>
                <input type="text" placeholder='Company' className={inputCss} />

                <Label>Available Slot</Label>
                <input type="text" placeholder='Available slot' className={inputCss} />

                <Label>Start Date</Label>
                <input type="date" placeholder='start date' className={inputCss} />

                <Label>End Date</Label>
                <input type="date" placeholder='end date' className={inputCss} />

                <Button className='mx-auto w-1/2'>Create Job</Button>
            </div>
    )
}