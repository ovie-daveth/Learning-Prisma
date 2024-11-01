/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { FormField } from "~/components/form-field";
import { Layout } from "~/components/layout";
import { Register } from "../utils/auth.server";
// export const action: ActionFunction = async ({ request }) => {
//   const form = await request.formData()
//   const action = form.get('_action')
//   const email = form.get('email')
//   const password = form.get('password')
//   let firstName = form.get('firstName')
//   let lastName = form.get('lastName')

//   if (typeof action !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
//     console.log("Invalid Form Data")
//     return json({ error: `Invalid Form Data`, form: action }, { status: 400 })
//   }

//   if (action === 'register' && (typeof firstName !== 'string' || typeof lastName !== 'string')) {
//     console.log("Invalid Form Data 2")
//     return json({ error: `Invalid Form Data`, form: action }, { status: 400 })
//   } 
  
//   console.log("before error")
//   const errors = {
//     email: validateEmail(email),
//     password: validatePassword(password),
//     ...(action === 'register'
//       ? {
//           firstName: validateName((firstName as string) || ''),
//           lastName: validateName((lastName as string) || ''),
//         }
//       : {}),
//   }

//   console.log("after error")

//   if (Object.values(errors).some(Boolean))
//     return json({ errors, fields: { email, password, firstName, lastName }, form: action }, { status: 400 })

//   console.log("before return ")
//   firstName = firstName as string
//   lastName = lastName as string
//   return await register({ email, password, firstName, lastName })
// }

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",  
    lastName: "",  
    email: "",
    password: "",
  });
    
      // Updates the form data when an input changes
      const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
        setFormData((form: any) => ({ ...form, [field]: event.target.value }))
      }

      const RegisterUser = async (e: any) => {
        e.preventDefault()
       try {
        console.log(formData)
        await Register(formData);
       } catch (error) {
        console.log(error)
       }
      }

      
    return (
      <Layout>
        <div className="h-full justify-center items-center flex flex-col gap-y-4">
        <h2 className="text-5xl font-extrabold text-yellow-300">Welcome to Kudos!</h2>
        <p className="font-semibold text-slate-300">Register In To Give Some Praise!</p>

        <form onSubmit={RegisterUser} className="rounded-2xl bg-gray-200 p-6 w-96">
          <FormField
            htmlFor="email"
            label="Email"
            value={formData.email}
            onChange={e => handleInputChange(e, 'email')}
          />
          <FormField
            htmlFor="password"
            type="password"
            label="Password"
            value={formData.password}
            onChange={e => handleInputChange(e, 'password')}
          />
         <FormField
            htmlFor="firstName"  // change 'firstname' to 'firstName'
            label="First Name"
            value={formData.firstName}
            onChange={e => handleInputChange(e, 'firstName')}
          />
          <FormField
            htmlFor="lastName"  // change 'lastname' to 'lastName'
            label="Last Name"
            value={formData.lastName}
            onChange={e => handleInputChange(e, 'lastName')}
          />
          <div className="w-full text-center">
            <input
              type="submit"
              className="rounded-xl mt-2 bg-yellow-300 px-3 py-2 text-blue-600 font-semibold transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1"
              value="Sign Up"
            />
          </div>
        </form>
      </div>
      </Layout>
    )
  }