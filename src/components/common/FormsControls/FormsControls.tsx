import React from 'react'
import s from './FormsControls.module.scss'

const FormControl = ({ input, meta, child, ...props }: any) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + " " + (hasError ? s.error : '')}>
            <div className={s.inputWrapper}>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const TextArea = (props: any) => {
    const { input, meta, child, ...restProps } = props
    return <FormControl {...props}>
        <textarea {...input} {...restProps}></textarea>
    </FormControl>
}
export const Input = (props: any) => {
    const { input, meta, child, ...restProps } = props
    return <FormControl {...props}>
        <input {...input} {...restProps}></input>
    </FormControl>
}
