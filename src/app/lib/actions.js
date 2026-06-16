const deleteUser = async (usersId) => { 
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