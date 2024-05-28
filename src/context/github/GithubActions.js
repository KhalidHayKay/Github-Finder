const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const searchUsers = async (text) => {
    const searchParams = new URLSearchParams({
        q: text,
    })

    return fetch(`${GITHUB_URL}/search/users?${searchParams}`, {
        headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`
        }
    }).then(res => res.json()).then(res => {
        const {items} = res;

        return items;
    })
};

export const getUserAndRepos = async (login) => {
    return Promise.all([
        fetch(`${GITHUB_URL}/users/${login}`, {
            headers: {
                Authorization: `Bearer ${GITHUB_TOKEN}`
            }
        }),
        fetch(`${GITHUB_URL}/users/${login}/repos`, {
            headers: {
                Authorization: `Bearer ${GITHUB_TOKEN}`
            }
        })
    ]).then(([user, repos]) => {
        if (user.status === 404 || repos.status === 404) {
            window.location = '/notfound';
        } else {
            return Promise.all([user.json(), repos.json()]);
        }
    }).then(([user, repos]) => {
        return {user, repos};
    })
}