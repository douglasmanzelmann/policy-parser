import { useForm } from "@tanstack/react-form";

import Box from "./Box.tsx";

export default function StayUpdated() {
    const form = useForm({
        defaultValues: {
            email: ''
        },
        onSubmit: async (values) => {
            console.log(`email value ${values.value.email}`);
        }
    })
    return(
        <Box>
            <p>Stay updated with the latest legislation</p>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    form.handleSubmit();
                }}
            >
                <form.Field
                    name="email"
                    children={(field) => (
                        <div className="flex flex-wrap gap-2 w-full">
                            <input
                                className="flex-1 input"
                                id={field.name}
                                name={field.name}
                                value={field.state.value}
                                onChange={(e) => {
                                    field.handleChange(e.target.value)
                                }}
                            />
                            <button className="btn btn-primary" type="submit">Subscribe</button>
                        </div>
                    )}
                />

            </form>
{/*            <form>
                <input type="email" placeholder="Enter your email address" />
                <button className="btn btn-primary" type="submit">Subscribe</button>
            </form>*/}
        </Box>
    )
}