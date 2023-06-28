import { InputHTMLAttributes } from 'react'
import clsx from "clsx"

import styles from "./checkbox.module.scss"

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    labelPosition?: "before" | "after"
    name: string
    className?: string
}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
    const {label, name, labelPosition = "after", className, ...rest} = props 
  return (
    <div className={clsx(styles["checkbox-container"], {[styles["after"]]: labelPosition === "after"})}>
        {label && <label htmlFor={name}>{label}</label>}
        <input 
            {...rest}
            type='checkbox'
            name={name}
            className={clsx(styles.checkbox, className)}
        />
    </div>
  )
}
