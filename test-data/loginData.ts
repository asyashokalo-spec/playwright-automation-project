
export const users = [
    {
        username: "tomsmith",
        password: "SuperSecretPassword!",
        expectedMessage: "You logged into a secure area!",
        shouldLogin: true
    },
    {
        username: "tomsmith",
        password: "wrong",
        expectedMessage: "Your password is invalid!",
        shouldLogin: false
    },
    {
        username: "wrong",
        password: "SuperSecretPassword!",
        expectedMessage: "Your username is invalid!",
        shouldLogin: false
    }
]

export const validUser =
{
    username: "tomsmith",
    password: "SuperSecretPassword!",
    expectedMessage: "You logged into a secure area!",
    shouldLogin: true
}
