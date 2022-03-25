
export const postLogin = async (login: string,
                                password: string) => {
    return fetch(
        "https://join-tsh-api-staging.herokuapp.com/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "username": login,
                "password": password
            }),
        })
        .then((response) => response.json())
        .catch(function (error) {
            console.log(error);
        })
        .then((response) => {
            return response;
        });
}
