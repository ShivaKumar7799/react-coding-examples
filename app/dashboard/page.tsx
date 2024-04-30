"use client"
import useErrorBoundary from '@/src/hooks/useErrorBoundary'
import { getTodos } from '@/src/services';
import { handleApiError } from '@/src/utils';
import React from 'react'

function Page() {
    const {handleError} = useErrorBoundary();
    const handleDashboardTodos = async() => {
        try {
            await getTodos()
        }
        catch(err){
           const error =  handleApiError(err);
           handleError(error)
        }
    }
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => handleError("dashboard button error")} >throw error</button>
      <button onClick={handleDashboardTodos} >dashboard todos</button>
    </div>
  )
}

export default Page
