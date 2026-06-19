import { updateUser } from '@/app/lib/actions';
import { getUserById } from '@/app/lib/data';
import { Input, TextField, Button,  Label } from '@heroui/react';
import React from 'react'

const UserEditPage = async ({ params }) => {
    const { userId } = await params;
    const user = await getUserById(userId);


    const updateUserWrapper = async (formData) => { 
        'use server';
        return await updateUser(userId, formData);
    }

  return (
      <div>
          <h2>Editing User: {user.name}</h2>
          <div className='w-1/2 mx-auto'>

               <form action={updateUserWrapper}  className="flex flex-col gap-4">
                                <TextField className="w-full" defaultValue={user?.name} name="name" type="text" variant="secondary">
                                  <Label>Name</Label>
                                  <Input placeholder="Enter your name" />
                                </TextField>
                                <TextField className="w-full" defaultValue={user.email} name="email" type="email" variant="secondary">
                                  <Label>Email</Label>
                                  <Input placeholder="Enter User Role" />
                                </TextField>
                                <TextField className="w-full" defaultValue={user?.role} name="role"  variant="secondary">
                                  <Label>Role</Label>
                                  <Input placeholder="Enter your phone number" />
                                  </TextField>
                                  
                  <div className='flex  gap-4 mt-4'>
                      <Button slot="close" variant="secondary">
                              Cancel
                            </Button>
                            <Button type="submit" slot="close">
                              Update User
                            </Button>
                                  </div>
                          
                                
                              </form>


          </div>
    </div>
  )
}

export default UserEditPage