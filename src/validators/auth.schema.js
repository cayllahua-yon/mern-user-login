import {z} from 'zod';

export const registerSchema =  z.object({
    username: z.string({required_error: 'nombre de usuario es requerido'}),
    email: z.string({required_error: 'Email es requerido'}).email({message: 'invalido email'}),
    password: z.string({required_error: 'Password es requerido'}).min(6, {message: 'Password almenos 6 caracteres'})
});

export const loginSchema =  z.object({
    email: z.string({required_error: 'Email es requerido'}).email({message: 'invalido email'}),
    password: z.string({required_error: 'Password es requerido'}).min(6, {message: 'Password almenos 6 caracteres'})
}); // contraseña comparar no coincide con su confirmacion....info