/// <reference types="cypress"/>
import {LearningCenterPage} from "../pages/Center Management/LearningCenterPage";
const learningcenterpage = new LearningCenterPage()


//var centercode = ["LA1", "LA2", "LA3", "Lk4"]
//var x = Math.floor((Math.random() * 4)) 

describe('LearningCenterMgmt', function(){
for(let i=0; i<1; i++){
it.only('Learning Center Add', function(){
    cy.login("admin@gmail.com", "IFAdmin123#")
    learningcenterpage.ExpandIcon().click()
    learningcenterpage.ExpandIcon2nd().click()
    learningcenterpage.Menu().click()
    //var CenCode = centercode[x];
    learningcenterpage.CenterCode().type(centerCode_Alpha())
    function centerCode_Alpha(){
        var text = "Code";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        for (var i=0; i<1; i++){
            text += possible.charAt(Math.random() * possible.length)

            return text;
        }
    }
    learningcenterpage.CenterNameBN().type(nameBN_Alpha())
    function nameBN_Alpha(){
        var text = "CenterNameBN";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        for (var i=0; i<1; i++){
            text += possible.charAt(Math.random() * possible.length)

            return text;
        }
    }
    learningcenterpage.CenterNameEN().type(nameEN_Alpha())
    function nameEN_Alpha(){
        var text = "CenterNameEN";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        for (var i=0; i<1; i++){
            text += possible.charAt(Math.random() * possible.length)
            return text;
        }
    }

    learningcenterpage.ClickCenterType().click()
    learningcenterpage.SelectCenterType().type('প্রাক-প্রাথমিক শিক্ষা কেন্দ্র').type('{enter}');
    learningcenterpage.ClickCommitteFormationDate().click()
    learningcenterpage.SelectCommitteFormationDate().click()
    learningcenterpage.ClickDivision().click()
    learningcenterpage.SelectDivision().type('চট্টগ্রাম').type("{enter}")
    learningcenterpage.SelectDistrict().click().type('লক্ষ্মীপুর').type('{enter}')
    learningcenterpage.SelectUpazila_Citycorporation().type('সিটি কর্পোরেশন{enter}')
    cy.wait(1000)
    learningcenterpage.SelectCityCorporation().click().type('বরিশাল সিটি কর্পোরেশন{enter}')
    learningcenterpage.Union().type('13')
    learningcenterpage.Area().type('Area')
    learningcenterpage.SelectPlace().click().type('কাছারি').type('{enter}')
    learningcenterpage.FileSelect().selectFile('cypress/fixtures/mosque.jpg')
    cy.wait(2000)
    cy.get('form').submit()
    //learningcenterpage.SubmitBtn().click()
    learningcenterpage.YesNoBtn().click()
    //Validation Code
    cy.contains('CY1').should('be.visible')
    
});

}


it('EditLearningCenter', function(){
    cy.login("admin@gmail.com", "IFAdmin123#")
    cy.wait(1000)  
    cy.visit('http://3.109.139.226:3006/admin/center/learningcenter')
    learningcenterpage.EditIcon().click()
    learningcenterpage.UpdateBtn().click()
})

})
