const deleteUser = async (usersId) => { 
'use server';
    const res = await fetch(`http://localhost:5000/users/${usersId}`, {
        method: "DELETE"
    });
    const data = await res.json();
    return data;


}