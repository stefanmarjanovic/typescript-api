import { fetchData } from "./api";

interface User{
    id: number;
    name: string; 
    email: string; 
}

interface spaceX {
    id: string;
    name: string;
    date_utc: string;
}

// Example usage of fetchData function
// Fetching a list of users from a public API - jsonplaceholder.typicode.com
async function getUsers(){
    const API_URL = "https://jsonplaceholder.typicode.com/users";

    try{
        const {data, status} = await fetchData<User[]>(API_URL);
        console.log(`Status Code: ${status}`);
        console.log("Users: ", data);
    } catch (err: unknown) {
        if (err instanceof Error) {
        console.error(err.message);
        } else {
        console.error("An unknown error occurred");
        }
    }
}

async function getSpaceXLaunches() {
    const API_URL = "https://api.spacexdata.com/v4/launches/latest";
    try {
        const { data, status } = await fetchData<spaceX[]>(API_URL);
        console.log(`Status Code: ${status}`);
        console.log("Launches: ", data);
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error(err.message);
        } else {
            console.error("An unknown error occurred");
        }
    }
}

getUsers();
getSpaceXLaunches();