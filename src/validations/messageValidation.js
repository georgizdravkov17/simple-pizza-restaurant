import * as yup from 'yup';

export const messageSchema = yup.object({
    firstname: yup.string().min(3).max(20).required(),
    lastname: yup.string().min(3).max(20).required(),
    email: yup.string().email().required(),
    message: yup.string().min(10).max(50).required()
})