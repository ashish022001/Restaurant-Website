import {z} from "zod"
export const userSignupSchema = z.object({
    fullName:z.string().min(1, "Full Name is required"),
    email:z.string().email("Invalid email address"),
    password:z.string().min(6,"Password must be 6 character"),
    contact:z.string().min(10,"Contact number must be can digit")
});

export type SignupInputState = z.infer<typeof userSignupSchema>
export const userLoginSchema = z.object({
    email:z.string().email("Invalid email address"),
    password:z.string().min(6,"Password must be 6 character"),
});

export type LoginInputState = z.infer<typeof userLoginSchema>