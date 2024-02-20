"use client"
import Card from "@/src/components/Card";
import ErrorBoundary from "@/src/components/ErrorBoundary";
import useErrorBoundary from "@/src/hooks/useErrorBoundary";
import { getTodos } from "@/src/services";
import { useEffect, useState } from "react";

export default function Home() {
  const { handleError } = useErrorBoundary();
  const handleTodos = async() => {
    try{
      await getTodos()
    }catch(err){
      handleError("api error")
    }
  }
  useEffect(() => {
    console.log("useEffect")
  },[])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
      <h2>page level</h2>
      <button onClick={() => handleError("button error")} >throw error</button>
      <button onClick={handleTodos} >get todos</button>
      <ErrorBoundary>
        <h2>component level</h2>
        <Card />
      </ErrorBoundary>
      </div>
    </main>
  );
}
