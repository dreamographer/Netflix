import React, { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
type Props = {
  children: ReactNode
}
const protectedRoute = ({ children }: Props) => {
  const auth = UserAuth();
  if (!auth) {
    throw new Error("Auth context is null");
  }
  const { user} = auth;

  if (!user) {
    return <Navigate to={'/'} ></Navigate>
  }else{
    return children
  }
}

export default protectedRoute