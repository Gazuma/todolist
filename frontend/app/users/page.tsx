import React from 'react'

interface User{
    id: number;
    name: string;
}

const UsersPage = async()=>{
    // const res = await fetch("https://jsonplaceholder.typicode.com/users") //render at build
    const res = await fetch("https://jsonplaceholder.typicode.com/users",
    {cache:'no-store'}); //render at request time
    // const res = await fetch("https://jsonplaceholder.typicode.com/users",
    // {next:{revalidate: 10}}) every 10 seconds..
    const users:User[] = await res.json();
    return (<div>
        <h1>Users</h1>
        {new Date().toTimeString()}
        <ul>
            {users.map(user=><li key={user.id}>{user.name}</li>)}
        </ul>
    </div>)
}

export default UsersPage