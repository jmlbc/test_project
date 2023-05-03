
const loginCheck = (username, password) => {
    if (username === undefined || password === undefined) {
        return false;
    }
    return true;
}

module.exports = {loginCheck}