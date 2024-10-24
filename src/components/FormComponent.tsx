import React, {FormEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { userValidator } from '../validators/userValidator';
import { joiResolver } from '@hookform/resolvers/joi';


interface IFormProps {
    username: string;
    password: string;
    age: number;
}

const FormComponent = () => {

    const {handleSubmit, register, formState: {errors, isValid}}
        = useForm<IFormProps>({mode: 'all', resolver: joiResolver(userValidator)});

    const customHandler = (formDataProps: IFormProps) => {
        console.log(formDataProps);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <label>
                    <input type="text" {...register("username")}/>
                    <div>{errors.username && <div>{errors.username.message}</div>}</div>
                </label>

                <label>
                    <input type="text" {...register("password")} />
                    <div>{errors.password && <div>{errors.password.message}</div>}</div>
                </label>

                <label>
                    <input type={"number"} {...register("age")} />
                    <div>{errors.age && <div>{errors.age.message}</div>}</div>
                </label>
                <button disabled={!isValid}>send</button>
            </form>
        </div>
    );
};

export default FormComponent;


