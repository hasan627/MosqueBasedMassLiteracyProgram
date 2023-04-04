/// <reference types="cypress" />
export class LoginPage{
    UserName(){
        return cy.get("[name='identifier']")
    }
    UserPassword(){
        return cy.get("[name='password']")
    }
    ClickLogin(){
        return cy.get('.MuiButtonBase-root').click()
    }

}