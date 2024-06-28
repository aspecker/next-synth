'use client'

import { register } from '@/app/lib/actions/auth/actions';
import { useFormState } from 'react-dom';

export default function Page() {

  const [errorMessage, dispatch] = useFormState(register, undefined) 

  return (
    <div className="w-full flex justify-center align-center">
      <form action={dispatch} className="flex flex-col justify-center align-center">
      <input className="m-8 p-2" type="email" name="email" placeholder="Email" required />
      <input className="m-8 p-2" type="password" name="password" placeholder="Password" required />
      <input className="m-8 p-2" type="password" name="repeatPassword" placeholder="Repeat Password" required />
      <div>{errorMessage && <p>{errorMessage}</p>}</div>
      <button type="submit">Register</button>
    </form>
    </div>
  )
}