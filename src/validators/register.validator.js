import { z } from 'zod';

export const registerValidator = z.object({
    username: z.string().min(4,"username must be at least 4 letters"),
    password: z.string().min(6,"password must be at least 6 number"),
    email: z.email("email is invalid"),
    phone: z.string().regex(/^[0-9]{10}$/,"phone number must be at least 10 number")
})