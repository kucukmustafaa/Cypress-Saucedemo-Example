import {LoginPage} from "../Page/LoginPage";
import {HomePage} from "../Page/HomePage";

const loginPage=new LoginPage()
const homePage=new HomePage()



describe("Login Test",() => {

    beforeEach("",function (){
        cy.visit("/")
        cy.log("------------" + Cypress.currentTest.title.toUpperCase()+ " TEST STARTED ------------------")

    })

    afterEach("",function (){
        cy.log("------------" + Cypress.currentTest.title.toUpperCase()+ " TEST FINISHED ------------------")
    })

    context("positive scenario",()=>{
        it('user successful login', function () {
            loginPage.login("standard_user","secret_sauce")
            homePage.verifyUserLogin()
        });

        it('user successful login with Uppercase Credential', function () {
            loginPage.login("standard_user","secret_sauce")
            homePage.verifyUserLogin()
        });

    })


    context("negative scenario",() => {

        it('The user enters blank in the username and password fields', function () {
            loginPage.login(" "," ")
            loginPage.validateUsernameErrorMessage("Epic sadface: Username is required")
        });

        it('The username field is left blank', function () {
            loginPage.login(" ","asfasfafa")
            loginPage.validateUsernameErrorMessage("Epic sadface: Username is required")
        });

        it('The password field is left blank', function () {
            loginPage.login("standard_user","")
            loginPage.validatePasswordErrorMessage("Epic sadface: Password is required")
        });


    })

})