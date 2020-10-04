import React from 'react'

const Input = ({error,type, value, name, onChange, placeholder, labelName, inputClassName}) => {
    return (
        <div className="flex flex-col mb-4" >
            {labelName && (
                <label htmlFor={name} className={["text-lg mb-2,", error?.name?.message ? "text-red-500" : "text-gray-900",].join(" ")}>{labelName}</label>
            )}
            <input
                name={name}
                type={type}
                className={["bg-white focus:line-none border w-full px-6 py-3 ", error?.name?.message ?
                 "text-red-500 border-red-500" :
                  "focus:border-teal-500 border-gray-600 text-gray-600", inputClassName].join(" ")}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
            <span className="text-red-500 pt-2">{error?.name?.message}</span>
        </div>
    )
}

export default Input
