import { UpazilaPage } from "../pages/System Configuration/Upazilapage";
const upazilapage = new UpazilaPage()

it('Create Upazila', function(){
    cy.login("admin@gmail.com", "IFAdmin123#")
    upazilapage.ExpandIcon().click()
    upazilapage.Menu().click()
    upazilapage.CreateBtn().click()
    cy.wait(1000)
    upazilapage.SelectDivision().type('ময়মনসিংহ').type('{downarrow}').type('{enter}')
    upazilapage.SelectDistrict().type('ময়মনসিংহ').type('{downarrow}').type('{enter}')
    upazilapage.NameEn().type('Mymensingh Sadar')
    upazilapage.NameBN().type('ময়মনসিংহ সদর')
    cy.get('form').submit()
    cy.contains('ময়মনসিংহ সদর').should('contain', 'ময়মনসিংহ সদর')
})
