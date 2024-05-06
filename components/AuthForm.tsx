"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// libs
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// constants
import { NavigatorPath } from "@/constants";

// utils
import { authFormSchema, formatTitle } from "@/utils";

// components
import { Loader2 } from "lucide-react";
import CustomInput from "./CustomInput";
import { Button } from "./ui/button";
import { Form } from "./ui/form";

const AuthForm = ({ type }: { type: string }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const formSchema = authFormSchema(type);
    const formTitle = formatTitle(type);
    const formDescription = user ? "Link your account to get started" : "Please enter your details";
    const formFooter = type === "sign-in" ? "Don't have an account?" : "Already have an account?";
    const formFooterLink: Record<string, { path: string; description: string }> = {
        "sign-in": {
            path: NavigatorPath.SIGN_UP,
            description: "Sign Up",
        },
        "sign-up": {
            path: NavigatorPath.SIGN_IN,
            description: "Sign In",
        },
    };

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (formData: z.infer<typeof formSchema>) => {
        setIsLoading(true);
        console.log(formData);
        try {
            if (type === "sign-up") {
                const userData = {};
            }
            if (type === 'sign-in') {}
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="auth-form">
            <header className="flex flex-col gap-5 md:gap-8">
                <Link href={NavigatorPath.HOME} className="cursor-pointer flex items-center gap-1">
                    <Image src="/icons/logo.svg" width={34} height={34} alt="FamilyBank logo" />
                    <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
                        FamilyBank
                    </h1>
                </Link>
                <div className="flex flex-col gap-1 md:gap-3">
                    <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
                        {user ? "Link Account" : formTitle}
                        <p className="text-16 font-normal text-gray-600">{formDescription}</p>
                    </h1>
                </div>
            </header>
            {user ? (
                <div className="flex flex-col gap-4">{/* PlaidLink */}</div>
            ) : (
                <>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            {type === "sign-up" && (
                                <>
                                    <div className="flex gap-4">
                                        <CustomInput
                                            control={form.control}
                                            name="firstName"
                                            label="First Name"
                                            placeholder="Enter your first name"
                                        />
                                        <CustomInput
                                            control={form.control}
                                            name="lastName"
                                            label="Last Name"
                                            placeholder="Enter your last name"
                                        />
                                    </div>
                                    <CustomInput
                                        control={form.control}
                                        name="address1"
                                        label="Address"
                                        placeholder="Enter your address"
                                    />
                                    <div className="flex gap-4">
                                        <CustomInput
                                            control={form.control}
                                            name="city"
                                            label="City"
                                            placeholder="Ex: Tp. Thu Duc"
                                        />
                                        <CustomInput
                                            control={form.control}
                                            name="postalCode"
                                            label="Postal Code"
                                            placeholder="Ex: 70000"
                                        />
                                    </div>
                                    <div className="flex gap-4">
                                        <CustomInput
                                            control={form.control}
                                            name="dateOfBirth"
                                            label="Date of Birth"
                                            placeholder="YYYY-MM-DD"
                                        />
                                        <CustomInput
                                            control={form.control}
                                            name="ssn"
                                            label="SSN"
                                            placeholder="Ex: 1234"
                                        />
                                    </div>
                                </>
                            )}
                            <CustomInput
                                control={form.control}
                                name="email"
                                label="Email"
                                placeholder="Enter your email"
                            />
                            <CustomInput
                                control={form.control}
                                name="password"
                                label="Password"
                                placeholder="Enter your password"
                            />
                            <div className="flex flex-col gap-4">
                                <Button type="submit" className="form-btn" disabled={isLoading}>
                                    {isLoading ? (
                                        <>
                                            <Loader2 size={20} className="animate-spin" /> &nbsp;
                                            Loading...
                                        </>
                                    ) : (
                                        formTitle
                                    )}
                                </Button>
                            </div>
                        </form>
                    </Form>
                    <footer className="flex justify-center gap-1">
                        <p className="text-14 font-normal text-gray-600">{formFooter}</p>
                        <Link href={formFooterLink[type].path} className="form-link">
                            {formFooterLink[type].description}
                        </Link>
                    </footer>
                </>
            )}
        </section>
    );
};

export default AuthForm;
