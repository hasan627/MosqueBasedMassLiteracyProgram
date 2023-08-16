/// <reference types="cypress" />
import { LoginPage } from "../pages/loginpage";
const loginpage = new LoginPage();

describe('LoginTest', () => {
  it('login', () => {
    cy.viewport(1400, 750)
    cy.visit('/login')
    loginpage.UserName().type('admin@gmail.com')
    loginpage.UserPassword().type('IFAdmin123#')
    loginpage.ClickLogin() 
    
  })

})

