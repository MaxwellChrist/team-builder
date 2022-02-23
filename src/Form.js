import React, { useState } from 'react';

const Form = (props) => {

    const onChange = e => {
        const { name, value } = e.target;
        props.onChange(name, value);
    }

    const onSubmit = e => {
        e.preventDefault();
        props.submit();
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Name:
                <input
                    name="name"
                    value={props.values.name}
                    placeholder="Enter your name"
                    onChange={onChange}
                />
            </label>
            <label>Email:
                <input
                    name="email"
                    value={props.values.email}
                    placeholder="Enter your email"
                    onChange={onChange}

                />
            </label>
            <label>Role:
                <input
                    name="role"
                    value={props.values.role}
                    placeholder="Enter your email"
                    onChange={onChange}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;