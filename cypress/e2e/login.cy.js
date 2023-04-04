/// <reference types="cypress" />
import { LoginPage } from "../pages/loginpage";
const loginpage = new LoginPage();

describe('LoginTest', () => {
  it('login', () => {
    cy.viewport(1400, 750)
    cy.visit('http://192.168.30.47/login')
    loginpage.UserName().type('admin@gmail.com')
    loginpage.UserPassword().type('IFAdmin123#')
    loginpage.ClickLogin() 
    
  })

})

