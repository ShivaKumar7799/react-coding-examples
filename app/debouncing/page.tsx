"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios';
function Page() {
  const [query, set_query] = useState("");
  useEffect(() => {
    const query_api_call = setTimeout(() => {
      axios
        .get(`https://api.postalpincode.in/pincode/${query}`)
        .then((response) => {
          console.log(response.data[0]);
        });
    }, 3000)
    return () => clearTimeout(query_api_call)
  }, [query])
  return (
    <div>
      <h4>debouncing</h4>
      query value: {query} <br />
      <input className='border-[1px]' type='text' value={query} onChange={(event) => set_query(event?.target.value)} />
    </div>
  )
}

export default Page
