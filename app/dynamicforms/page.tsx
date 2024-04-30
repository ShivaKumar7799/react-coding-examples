"use client";
import { useState } from "react";
import React from "react";

type initialDataObj = {
    firstName: string;
    lastName: string;
}

function Page() {
    const initialData = {
        firstName: "",
        lastName: "",
    };
    const [data, setData] = useState<initialDataObj[]>([initialData]);
    const handleInputValueChange = (event: any, index: number) => {
        const newData: initialDataObj[] = [...data];
        (newData as any)[index][event.target.name] = event.target.value;
        setData(newData);
    }
    return (
        <div>
            dynamic forms
            <div>
                {data.map((item, index) => (
                    <div key={index}>
                        <input className="border-[0.5px]" type="text" name="firstName" value={item.firstName} onChange={(event) => handleInputValueChange(event, index)} />
                        <input className="border-[0.5px]" type="text" name="lastName" value={item.lastName} onChange={(event) => handleInputValueChange(event, index)} />
                        <button onClick={() => setData(data.filter((item, i) => i !== index))} >Delete</button>
                    </div>
                ))}
                <button onClick={() => setData([...data, initialData])} >Add More</button>
            </div>
            <button onClick={() => console.log(data)}>submit</button>
        </div>
    );
}

export default Page;
