/// <reference types="cypress" />
import { LoginPage } from "../pages/loginpage";
const loginpage = new LoginPage();

var user = ["admin@gmail.com", "hasan@gmail.com", "user@gmail.com", "director@gmail.com"]
var x = Math.floor((Math.random() * 4)) 

describe('Random Input data ', () => {
  it('login', () => {
    cy.viewport(1400, 750)
    cy.visit('http://3.109.139.226:3006/admin')
    var useremail = user[x];
    loginpage.UserName().type(useremail)

    let i =0;
    while(i<5){
    loginpage.UserPassword().type('IFAdmin123#'+i);
    loginpage.ClickLogin() 
    
    i++
      
  }
  })
 
})