import { Button } from "@/components/ui/button";

export default function EventForm() {
    const inputCss = "border p-2 mb-2 rounded-md w-full max-w-md";

    return (
        <div className="flex flex-col space-y-3">
            <label>Event Name</label>
            <input type="text" placeholder="Event Name" className={inputCss} />

            <label>Created by</label>
            <input type="text" placeholder="Created by" className={inputCss} />

            
            <label>Start Date</label>
            <input type="date" className={inputCss} />

            <label>End Date</label>
            <input type="date" className={inputCss} />

            <Button className="mx-auto w-1/2">Create Event</Button>
        </div>
    );
}
