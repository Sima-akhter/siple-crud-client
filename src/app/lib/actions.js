import { revalidatePath } from "next/cache";

export const createUser = async (formData) => { 
    'use server';
    const newUser = Object.fromEntries(formData.entries());
    const res = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    });
    const data = await res.json();

    if (data.insertedId) {
        revalidatePath("/users");
    }
}

export const deleteUser = async (usersId) => { 
'use server';
    const res = await fetch(`http://localhost:5000/users/${usersId}`, {
        method: "DELETE"
    });
    const data = await res.json();
    if (data.deletedCount > 0) {
        revalidatePath("/users");
    }
    return data;


}