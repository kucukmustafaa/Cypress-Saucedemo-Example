let homePageLogo=".app_logo"

export class HomePage {

    verifyUserLogin(){
        cy.url().should("contains","/inventory.html")
        cy.get(homePageLogo).should('not.have.css', 'display', 'none')
        cy.log("home page opened successfully")
    }






}