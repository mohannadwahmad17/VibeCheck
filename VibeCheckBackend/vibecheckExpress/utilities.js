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

function removeUser(id) {
    const i = users.findIndex(user => user.id === id);
    return i !== -1 ? users.splice(i, 1)[0] : null
}

function getUsers(id) {
    const match = users.filter(user => user.id === id)[0];

    return match;
}

function getAllUsers(room) {
    const match = users.filter(user => user.room === room);
}

module.exports = {
    addUser,
    removeUser,
    getUsers
}