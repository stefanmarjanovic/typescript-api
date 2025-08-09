import { fetchData } from "./api.js";

interface User{
    id: number;
    name: string; 
    email: string; 
}

// Example usage of fetchData function
// Fetching a list of users from a public API - jsonplaceholder.typicode.com
async function getUsers(){
    const API_URL = "https://jsonplaceholder.typicode.com/users";

    try{
        const {data, status} = await fetchData<User[]>(API_URL);
        console.log(`Status: ${status}`);
        console.log("Users:", data);
    } catch (err: unknown) {
        if (err instanceof Error) {
        console.error(err.message);
        } else {
        console.error("An unknown error occurred");
        }
    }
}

getUsers();