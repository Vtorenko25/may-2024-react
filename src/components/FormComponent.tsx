import React, {FormEvent, useState } from 'react';
import { useForm } from 'react-hook-form';

interface IFormProps {
    username: string;
    password: string;
    age: number;
}
const FormComponent = () => {

const {handleSubmit,
    register,
    formState:{errors, isValid}
} = useForm<IFormProps>({
    mode: 'all'
});

const customHandler =(formDataProps:IFormProps)=>{
        console.log(formDataProps);
}
    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <label>
                <input type="text" {...register("username",{
                    required:{value: true, message:'name is required'},
                    minLength:{value:4, message: "wrong name"},
                    })}/>
                    <div>{errors.username && <div>{errors.username.message}</div>}</div>
                </label>
                <label>
                    <input type="text" {...register("password", {
                        required: true,
                        minLength: {value: 3, message: "Password to short"},
                        maxLength: {value: 6, message: "Password to long"}
                    })} />
                    <div>{errors.password && <div>{errors.password.message}</div>}</div>
                </label>
                <label>
                    <input type={"number"} {...register("age", {
                        required: true,
                        valueAsNumber: true,
                        min: {value: 1, message: "age to smal"},
                        max: {value: 117, message: "age to long"}
                    })} />
                    <div>{errors.age && <div>{errors.age.message}</div>}</div>
                </label>
                <button disabled={!isValid}>send</button>
            </form>
        </div>
    );
};

export default FormComponent;