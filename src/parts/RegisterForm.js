import React, {useState} from 'react'
import {withRouter} from 'react-router-dom'
import { useDispatch } from "react-redux";

import users from 'constants/api/Users'

import  useForm  from "helpers/hooks/useForm";
import Select from 'components/Form/Select';
import fieldErrors from 'helpers/fieldErrors';
import Input from 'components/Form';

function RegisterForm({history}) {
    const dispatch = useDispatch()

    const [{name, email, password, profession, otherProfession}, setState] = useForm({
        name: "",
        email: "",
        password: "",
        profession: "",
        otherProfession: ""
    });

    

    const [errors, setErrors] = useState(null)
    
    const submit = (e) => {
        e.preventDefault();

        users.register({name, email, password, profession : profession === "others" ? otherProfession : profession}).then((res) => {
            history.push("/login")
        }).catch((err) => {
            setErrors(err?.response?.data?.message)
        })
    }

    const ERRORS = fieldErrors(errors)


    return (
        <div className="flex justify-center pb-24">
            <div className="w-3/12">
                <h1 className="text-4xl text-gray-900 mb-6">
                    <span className="font-bold">Grow Skills</span> From, <br/>
                    Anywhere
                </h1>
                <form onSubmit={submit} >
                    <Input
                     type="text"
                     value={name}
                     error={ERRORS?.name?.message}
                     name="name"
                     onChange= {setState}
                     placeholder="Your Name"
                     labelName="Full Name"
                    />
                    <Input
                     type="email"
                     value={email}
                     error={ERRORS?.email?.message}
                     name="email"
                     onChange= {setState}
                     placeholder="Your Email Address"
                     labelName="Email Address"
                    />
                    <Input
                     type="password"
                     value={password}
                     error={ERRORS?.password?.message}
                     name="password"
                     onChange= {setState}
                     placeholder="Your Password"
                     labelName="Password"
                    />
                    <Select labelName="Occupation" name="profession" fallbackText="select your focus" onClick={setState} >
                        <option value="">Select Your Focus</option>
                        <option value="Web Desainer">Web Desainer</option>
                        <option value="Frontend Developer">Frontend Developer</option>
                        <option value="backend Developer">backend Developer</option>
                        <option value="others">others</option>
                    </Select>
                    {
                        profession === "others" && (
                            <Input
                             type="text"
                             value={otherProfession}
                             name="otherProfession"
                             onChange= {setState}
                             placeholder="Your Profession"
                             labelName="Other's Occupation"
                            />
                        )
                    }
                    <button 
                        type="submit"
                        className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-4 w-full "
                        >Daftar
                    </button>
                </form>
            </div>  
            <div className="w-1/12"></div>

            <div className="w-5/12 flex justify-end pt-24 pr-16">
                <div className="relative" style={{ width: 369, height: 440 }}>
                    <div
                        className="absolute border-indigo-700 border-2 -mt-8 -ml-16 left-0"
                        style={{ width: 324, height: 374 }}
                    ></div>
                    <div className="absolute w-full h-full -mb-8 -ml-8">
                        <img
                        src="assets/images/james.jpg"
                        alt="Mbak tamara Cakep euy"
                        />
                    </div>
                    <div
                        className="absolute z-10 bg-white bottom-0 right-0 py-3 px-4 -mr-12"
                        style={{ width: 290 }}
                    >
                        <p className="text-gray-900 mb-2">
                        Semua materi terstruktur baik dan mentor yang sangat lihai
                        </p>
                        <span className="text-gray-600">James, Apps Developer</span>
                    </div>
                </div>
            </div>          
        </div>
    )
}

export default withRouter(RegisterForm)