"use client";
import React, { useEffect, useState } from "react";

type floor = {
    floor_number: number;
    is_selected: boolean;
};

function Floors() {
    const [no_of_floors, set_no_of_floors] = useState(0);
    const [floor_names, set_floor_names] = useState<floor[]>([]);
    useEffect(() => {
        const floor_names = Array(no_of_floors + 1).fill("");
        const new_floors: floor[] = floor_names.map((floor, index) => {
            return {
                floor_number: index,
                is_selected: false,
            }
        });
        set_floor_names(new_floors);
    }, [no_of_floors]);
    const handleFloorNames = (event: any, index: number) => {
        const newFloorNames = [...floor_names];
        newFloorNames[index].floor_number = event.target.value;
        set_floor_names(newFloorNames);
    };

    const handleMarkBuilding = (event: any, index: number) => {
        const newFloorNames = [...floor_names];
        newFloorNames[index].is_selected = event.target.checked;
        set_floor_names(newFloorNames);
    }
    const handleDeleteSelectedFloor = (index: number) => {
        const newFloorNames = [...floor_names];
        newFloorNames[index].is_selected = false;
        set_floor_names(newFloorNames);
    };
    const handleSelectAllFloors = (event: any) => {
        const newFloorNames = [...floor_names];
        newFloorNames.forEach((floor) => {
            floor.is_selected = event.target.checked;
        });
        set_floor_names(newFloorNames);
    }
    const isAllBuildingsSelected = () => {
        return floor_names.every((floor) => floor.is_selected === true);
    }
    return (
        <div>
            Enter No. of Floors in the Building{" "}
            <input
                className="border-[0.5px]"
                type="text"
                value={no_of_floors}
                onChange={(e) => set_no_of_floors(Number(e.target.value))}
            />
            <br /> <br />
            <div style={{ display: "flex", gap: "50px" }} >
                <div>
                    <div>Building floors</div>
                    <input checked={isAllBuildingsSelected()} type="checkbox" onChange={handleSelectAllFloors} /> Select All Floors
                    {floor_names.map((floor, index) => (
                        <div key={index}>
                            <input type="checkbox" checked={floor.is_selected} onChange={(e) => handleMarkBuilding(e, index)} />
                            <input
                                type="text"
                                value={getFloorName(floor.floor_number)}
                                readOnly
                            />{" "}
                        </div>
                    ))}
                </div>
                <div>
                    <div>Selected floors</div>
                    {floor_names.filter((floor) => floor.is_selected === true).map((floor, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                value={getFloorName(floor.floor_number)}
                                readOnly
                                onChange={(e) => handleFloorNames(e, index)}
                            />{" "}
                            <button onClick={() => handleDeleteSelectedFloor(floor.floor_number)}>Delete</button>{" "}
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={() => console.log(floor_names.filter((floor) => floor.is_selected))}>Submit</button>
        </div>
    );
}

export default Floors;


function getFloorName(floorNumber: number) {
    if (floorNumber === 0) {
        return 'Ground Floor';
    } else if (floorNumber >= 1 && floorNumber <= 1000) {
        const lastTwoDigits = floorNumber % 100;

        if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
            return `${floorNumber}th Floor`;
        } else {
            const lastDigit = floorNumber % 10;

            switch (lastDigit) {
                case 1:
                    return `${floorNumber}st Floor`;
                case 2:
                    return `${floorNumber}nd Floor`;
                case 3:
                    return `${floorNumber}rd Floor`;
                default:
                    return `${floorNumber}th Floor`;
            }
        }
    } else {
        return 'Invalid Floor Number';
    }
}
