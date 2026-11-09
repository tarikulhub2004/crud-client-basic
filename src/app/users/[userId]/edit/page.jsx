import { updateUser } from '@/app/lib/actions';
import { getUsersById } from '@/app/lib/data';
import { Button, Input, Label, TextField } from '@heroui/react';
import React from 'react';

const UserEditPage = async ({ params }) => {
    const { userId } = await params
    const user = await getUsersById(userId)

    const updatedUserWrapper = async (formData) => {
        'use server'
        return updateUser(userId, formData);
    }

    return (
        <div>
            <h2>Editing User:{user.name}</h2>
            <div className="md:w-1/2 mx-auto">
                <form className="flex flex-col gap-4">
                    <TextField defaultValue={user?.name} className="w-full" name="name" type="text" variant="secondary">
                        <Label>Name</Label>
                        <Input placeholder="Enter your name" />
                    </TextField>
                    <TextField defaultValue={user?.email} className="w-full" name="email" type="email" variant="secondary">
                        <Label>Email</Label>
                        <Input placeholder="Enter your email" />
                    </TextField>
                    <TextField defaultValue={user?.role} className="w-full" name="role" type="tel" variant="secondary">
                        <Label>Role</Label>
                        <Input placeholder="Enter your role" />
                    </TextField>
                    <Button slot="close" variant="secondary">
                        Cancel
                    </Button>
                    <Button type="submit" slot="close">Add User</Button>
                </form>
            </div>
        </div>
    );
};

export default UserEditPage;