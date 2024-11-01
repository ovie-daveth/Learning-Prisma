/* eslint-disable @typescript-eslint/no-unused-vars */
import type { LoginForm, RegisterForm } from './types.server'
import { prisma } from './prisma.server'
import { json, createCookieSessionStorage, redirect } from '@remix-run/node'
import { createUser } from './user.server'
import bcrypt from 'bcryptjs'

export async function register(user: RegisterForm) {
    const exists = await prisma.adninUser.count(
        { 
            where: 
            { email: user.email } 
        }
    )
    if (exists) {
        return json({ error: `User already exists with that email` }, { status: 400 })
    }

    const registerUser = await createUser(user);
    if(!registerUser){
        return  json(
            {
                code: 400,
                status: false,
                message: "Failed to register User"
            }
        )
    }

    return createUserSession(registerUser.data.id, '/')
}


export const Login = async ({ email, password }: LoginForm) =>  {
    const user = await prisma.adninUser.findUnique({
      where: { email },
    })

  
    if (!user || !(await bcrypt.compare(password, user?.password)))
      return json({ error: `Incorrect login` }, { status: 400 })
  
    //return { message: "Login Succesful", data: user }
    return createUserSession(user.id, "/");
  }

  const sessionSecret = process.env.SESSION_SECRET
  if (!sessionSecret) {
    throw new Error('SESSION_SECRET must be set')
  }

const storage = createCookieSessionStorage({
  cookie: {
    name: 'kudos-session',
    secure: process.env.NODE_ENV === 'production',
    secrets: [sessionSecret],
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
})

export async function createUserSession(userId: string, redirectTo: string) {
    const session = await storage.getSession()
    session.set('userId', userId)
    return redirect(redirectTo, {
      headers: {
        'Set-Cookie': await storage.commitSession(session),
      },
    })
  }