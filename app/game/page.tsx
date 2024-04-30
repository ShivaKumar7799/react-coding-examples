"use client";
import React, { useEffect, useState } from "react";

function Page() {
  const [squares, set_squares] = useState(Array(9).fill(""));
  const [moves_count, set_moves_count] = useState(0)
  const [winner, set_winner] = useState("")

  useEffect(() => {
    const winner =  calculateWinner(squares)
    if(winner){
      set_winner(winner)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moves_count])
  const calculateWinner = (squares:any) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  return (
   <>
   <h3>Next Move : {moves_count % 2 === 0 ? "X" : "O"} </h3>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 30px)",
        gap: "10px",
        marginTop: "30px"
      }}
    >
      {squares.map((square, index) => (
        <div
          style={{
            border: "1px solid black",
            height: "30px",
            width: "30px",
            backgroundColor: "gray",
            cursor: "pointer",
          }}
          key={index}
          onClick={() => {
            if (squares[index] !== "") {
              alert("already filled")
              return
            }
            if(winner !== ""){
              alert("winner already declared")
              return
            }
            const sqr = [...squares];
            sqr[index] = moves_count % 2 === 0 ? "X" : "O";
            set_squares(sqr)
            set_moves_count(moves_count + 1)
          } }
        >
          {square}
        </div>
      ))}
      winner = {winner} <br />
      <button  onClick={() => {
        set_squares(Array(9).fill(""))
        set_moves_count(0)
      }}>Reset</button>
    </div>
   </>
  );
}

export default Page;
