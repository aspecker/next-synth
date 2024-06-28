'use server'
import {createNewUser } from '@/app/lib/data/auth/actions'

export async function register(_currentState: unknown, formData: FormData) {
  try {
    const email = formData.get("email")?.toString().trim();
    const password = formData.get("password")?.toString().trim()
    const repeatPassword = formData.get("repeatPassword")?.toString().trim()
    if (password !== repeatPassword) {
      console.log("passwords don't match")
      return "Passwords must match"
    }
    if (email && password) {
      await createNewUser(email, password)
    }
  } catch(error) {
    if (error) {
        console.log(error)
    }
    throw error
  }
}
  
// export async function authenticate(_currentState: unknown, formData: FormData) {
//   try {
//     await logInUser('credentials', formData)
//   } catch (error) {
//     if (error) {
//       switch (error.type) {
//         case 'CredentialsSignin':
//           return 'Invalid credentials.'
//         default:
//           return 'Something went wrong.'
//       }
//     }
//     throw error
//   }
// }

