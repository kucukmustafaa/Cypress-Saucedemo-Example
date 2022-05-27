let usernameTextBox='#user-name'
let passwordTextBox='#password'
let loginButton='#login-button'
let errorMessage='[data-test="error"]'

export class LoginPage {

    login(username,password){
        cy.get(usernameTextBox).type(username)
        cy.get(passwordTextBox).type(password)
        cy.get(loginButton).click()
    }

    validateUsernameErrorMessage(errorMessage){
        cy.get(errorMessage).should("contain.text",errorMessage)
        cy.log("Username fieeld error message was seen successful")
    }

    validatePasswordErrorMessage(errorMessage){
        cy.get(errorMessage).should("contain.text",errorMessage)
        cy.log("Password fieeld error message was seen successful")

    }


}