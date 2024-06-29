'use client'
import { FormEvent } from "react"

export default function Form() {
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch('/lib/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        email: formData.get('email'),
        password: formData.get('password')
      })

    })
    console.log({response})
  }

  return (
    <div className="w-full flex justify-center align-center">
      <form onSubmit={handleSubmit} className="flex flex-col justify-center align-center gap-2">
      <input className="m-8 p-2 text-black" type="email" name="email" placeholder="Email" required />
      <input className="m-8 p-2 text-black" type="password" name="password" placeholder="Password" required />
      <input className="m-8 p-2 text-black" type="password" name="repeatPassword" placeholder="Repeat Password" required />
      <button type="submit">Register</button>
    </form>
    </div>
  )
}