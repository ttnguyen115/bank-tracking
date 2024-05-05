// libs
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";

// components
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";

// utils
import { authFormSchema } from "@/utils";

const formSchema = authFormSchema("sign-up");

const CustomInput = ({ control, name, label, placeholder }: CustomInputProps) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <div className="form-item">
                    <FormLabel className="form-label">{label}</FormLabel>
                    <div className="flex w-full flex-col">
                        <FormControl>
                            <Input
                                id={name}
                                placeholder={placeholder}
                                type={name === "password" ? "password" : "text"}
                                className="input-class"
                                autoComplete="false"
                                {...field}
                            />
                        </FormControl>
                        <FormMessage className="form-message mt-2" />
                    </div>
                </div>
            )}
        />
    );
};

interface CustomInputProps {
    control: Control<z.infer<typeof formSchema>>;
    name: FieldPath<z.infer<typeof formSchema>>;
    label: string;
    placeholder: string;
}

export default CustomInput;
