import React from 'react';
import { getUsers } from '../lib/data';
import UsersTable from '../components/UsersTable';
import { addUser, deleteUser } from '../lib/actions';
import AddUserModal from '../components/AddUserModal';

const UsersPage = async () => {
    const users = await getUsers();
    console.log(users);
    return (
        <div>
            <div className="flex justify-between m-5">
                <h2>Users length : {users.length}</h2>
                <AddUserModal addUserAction={addUser}></AddUserModal>
            </div>
            <UsersTable deleteActionUser={deleteUser} users={users}></UsersTable>
        </div>
    );
};

export default UsersPage;