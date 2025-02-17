import { useForm } from "@tanstack/react-form";
// import type { FieldApi } from "@tanstack/react-form";

import Box from "./Box.tsx";

const DEFAULT_SEARCH_TEXT = "Search for legislation...";

export default function Search() {
    const form = useForm({
        defaultValues: {
            search: DEFAULT_SEARCH_TEXT
        },
        onSubmit: async (values) => {
            console.log(`search value ${values.value.search}`);
        }
    });

    return (
            <Box bottomMargin="mb-5">
            <p>Track and analyze legislation in real time</p>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    form.handleSubmit();
                }}
            >
                <form.Field
                    name="search"
                    children={(field) => (
                        <div className="flex flex-wrap gap-2 w-full">
                            <input
                                className="flex-1 input"
                                id={field.name}
                                name={field.name}
                                value={field.state.value}
                                onBlur={() => {
                                    if (field.state.value === "") {
                                        field.handleChange(DEFAULT_SEARCH_TEXT);
                                    }
                                }}
                                onFocus={() => field.handleChange("")}
                                onChange={(e) => {
                                    field.handleChange(e.target.value)
                                }}
                            />
                            <button className="btn btn-primary" type="submit">Search</button>
                        </div>
                    )}
                />

            </form>
        </Box>
    )
}