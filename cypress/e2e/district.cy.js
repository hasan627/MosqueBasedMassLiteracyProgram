import { DistrictPage } from "../pages/System Configuration/districtpage"

const districtpage = new DistrictPage();

describe('District Test Case', function(){
it('DistrictAdd', function(){
    cy.login("admin@gmail.com", "IFAdmin123#")
    districtpage.ExpandIcon().click()
    districtpage.Menu().click();
    cy.wait(1000)
    districtpage.CreateBtn().click()
    districtpage.ClickDivision().click()
    districtpage.SelectDivision().type('ময়মনসিংহ').type('{enter}')
    districtpage.NameEN().type('Mymensingh');
    districtpage.NameBN().type('ময়মনসিংহ')
    districtpage.Submit().click()
    cy.contains('Mymensingh').should('contain', 'Mymensingh')
    //Edit Function
    districtpage.EdidIcon().click()
    cy.wait(1000)
    districtpage.UpdateBtn().click()

    //DeleteFunction
    districtpage.DeleteIcon().click()
    districtpage.DeleteYes().click()

})

//2nd test case.

it('DistrictAdd', function(){
    cy.login("admin@gmail.com", "IFAdmin123#")
    districtpage.ExpandIcon().click()
    districtpage.Menu().click();
    cy.wait(1000)
    districtpage.CreateBtn().click()
    districtpage.ClickDivision().click()
    districtpage.SelectDivision().type('ময়মনসিংহ').type('{enter}')
    districtpage.NameEN().type('Mymensingh');
    districtpage.NameBN().type('ময়মনসিংহ')
    districtpage.Submit().click()
    cy.contains('Mymensingh').should('contain', 'Mymensingh')

})
})