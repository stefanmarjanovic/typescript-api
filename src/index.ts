import { fetchData } from "./api";

interface User{
    id: number;
    name: string; 
    email: string; 
}

async function getUsers(){
    const API_URL = "https://jsonplaceholder.typicode.com/users";

    try{
        const {data, status} = await fetchData<User[]>(API_URL);
        console.log(`Status: ${status}`);
        console.log("Users:", data);
    } catch {
        console.error(error);
    }
}

getUsers();