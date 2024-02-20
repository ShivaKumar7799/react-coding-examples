import axios from "axios"


export const getTodos = async() => {
    await axios.get("https://jsonplaceholder.typicode.com/tododfs");
}