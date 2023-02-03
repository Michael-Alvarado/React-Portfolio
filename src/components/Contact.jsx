import { Button, FormControl, FormLabel, FormHelperText, FormErrorMessage, Input, RequiredIndicator, Textarea } from '@vechaiui/react';
import { useState, useForm } from 'react';

const Contact = () => {
    const [loading, setLoading] = useState(false);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        setLoading(true);
        setTimeout(() => {
            alert(JSON.stringify(data));
            setLoading(false);
        }, 500);
    };

    return (
        <div className="w-full max-w-xs p-8 space-x-4">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <FormControl invalid={Boolean(errors.name)}>
                    <FormLabel>
                        Name<RequiredIndicator />
                    </FormLabel>
                    <Input {...register("name", { required: true })} placeholder="Enter your name." />
                    {errors.name && errors.name.type === "required" && <FormErrorMessage>Name is required</FormErrorMessage>}
                </FormControl>

                <FormControl invalid={Boolean(errors.email)}>
                    <FormLabel>
                        Email<RequiredIndicator />
                    </FormLabel>
                    <Input.Group>
                        <Input
                        className="pr-16"
                        type='email'
                        placeholder="Enter your email"
                        {...register("email", { required: true })}
                        />
                    </Input.Group>
                    {errors.email && errors.email.type === "required" && <FormErrorMessage>Email is required</FormErrorMessage>}
                </FormControl>

                <FormControl>
                    <FormLabel>
                        Message
                    </FormLabel>
                    <Textarea placeholder='Enter your message' {...register('message', { required: true })} />
                    {errors.message && errors.message.type === 'required' && <FormErrorMessage>Message is required</FormErrorMessage>}
                </FormControl>
                <FormHelperText>I'll never share your information.</FormHelperText>
                <Button type="submit" variant="solid" color="primary" loading={loading}>Submit</Button>
            </form>
        </div>
    );
}

export default Contact;
