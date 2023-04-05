/// <reference types="cypress" />
import { DivisionPage } from "../pages/System Configuration/divisionpage";
const divisionpage = new DivisionPage();
import { DistrictPage } from "../pages/System Configuration/districtpage"
const districtpage = new DistrictPage();
import { UPazilaPage } from "../pages/System Configuration/Upazilapage";
const upazilapage = new UPazilaPage()


describe('Smoke Test', function(){

    //Division Test Case

    it('DivisionCreate', function(){
        cy.login("admin@gmail.com", "IFAdmin123#")
          divisionpage.ExpandIcon();
          divisionpage.Menu();
          divisionpage.CreateBtn().click()
          divisionpage.NameEN().type('Mymensingh')
          divisionpage.NameBN().type('ময়মনসিংহ')
          divisionpage.Submit();
          cy.contains('Mymensingh').should('contain', 'Mymensingh')
        })
  

//District TestCase

it('DistrictAdd', function(){
    cy.login("admin@gmail.com", "IFAdmin123#")
    districtpage.ExpandIcon().click()
    districtpage.Menu().click();
    cy.wait(1000)
    districtpage.CreateBtn().click()
    cy.wait(1000)
    districtpage.SelectDivision().type('ময়মনসিংহ').type('{enter}')
    districtpage.NameEN().type('Mymensingh');
    districtpage.NameBN().type('ময়মনসিংহ')
    districtpage.Submit().click()
    cy.contains('Mymensingh').should('contain', 'Mymensingh')

})

//Upazila TestCase
it('Create Upazila', function(){
    cy.login("admin@gmail.com", "IFAdmin123#")
    upazilapage.ExpandIcon().click()
    upazilapage.Menu().click()
    upazilapage.CreateBtn().click()
    cy.wait(1000)
    upazilapage.SelectDivision().type('ময়মনসিংহ').type('{enter}')
    upazilapage.SelectDistrict().type('ময়মনসিংহ').type('{enter}')
    upazilapage.NameEn().type('Mymensingh Sadar')
    upazilapage.NameBN().type('ময়মনসিংহ সদর')
    cy.get('form').submit()
    cy.contains('ময়মনসিংহ সদর').should('contain', 'ময়মনসিংহ সদর')

})
      
})

