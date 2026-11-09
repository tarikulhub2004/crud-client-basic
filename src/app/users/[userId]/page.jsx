import { getUsersById } from '@/app/lib/data';
import React from 'react';

const page = async ({ params }) => {
    const { userId } = await params;
    // console.log(params)
    const user = await getUsersById(userId);
    console.log(user)

    return (
        <div>
            <h2>User Details : {user.name}</h2>
        </div>
    );
};

export default page;