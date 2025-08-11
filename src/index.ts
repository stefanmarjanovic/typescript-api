import { fetchData } from "./api";

// User struct
interface User{
    id: number;
    name: string; 
    email: string; 
}

// SpaceX Launch struct
interface spaceX {
    id: string;
    name: string;
    date_utc: string;
}

// Example usage of fetchData function
// Fetch a list of users from public API - jsonplaceholder.typicode.com
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

// Fetch a list of launches from a spaceX public API
// no authentication is required
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