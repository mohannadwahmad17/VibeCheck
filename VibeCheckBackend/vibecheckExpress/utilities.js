let users = [];

const addUser = ({id, name, room}) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const userExists = users.find(user =>
        user.name === name && user.room === room;
    );

    if (!user || !room || userExists)
        return { error: "error" }

    const user = { id, name, room };
    users = [...users, user];

    return { user };
}

function addUser() {

}

function removeUser() {

}

function getUsers() {

}

module.exports = {
    addUser,
    removeUser,
    getUsers
}