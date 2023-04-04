/// <reference types="cypress"/>
import { StudentPage } from "../pages/Student/studentpage";
const studentpage = new StudentPage()

describe("StudentManagement", function(){

    it('StudentAdd', function(){
        cy.login("admin@gmail.com", "IFAdmin123#")
        studentpage.ExpandIcon().click()
        studentpage.Menu().click()
        studentpage.CenterType().type('প্রাক-প্রাথমিক শিক্ষা কেন্দ্র{enter}')
        studentpage.CenterCode().type('লক্ষীপুর কেন্দ্রীয় মসজিদ - LAK1{enter}')
        studentpage.StudentNameEN().type(NameEN())
        function NameEN(){
            var text = "StudentNameEN";
            var randomvalue = "0123456789"
            for (var i=0; i<5; i++){
                text += randomvalue.charAt(Math.random() * randomvalue.length)
                return text;
            }
        }
        studentpage.StudentNameBN().type('studentNameBN')
        studentpage.ClickDoB().click()
        studentpage.SelectDoB().click()
   
      if(cy.get('.css-16u2x76 > :nth-child(6) > .MuiFormLabel-root').should('contain', 'জন্ম নিবন্ধন নম্বর *')){
        studentpage.BirthCertificateNo().type('123')
      }

 
        /*studentpage.BirthCertificateNo().type(BCNNumeric())
        function BCNNumeric(){
            var text = "5534567891025635";
            var randomvalue = "0123456789"
            for (var i=0; i<5; i++){
                text += randomvalue.charAt(Math.random() * randomvalue.length)
                return text;
            }
        }
        */
        studentpage.ClickAdmisssiondate().click()
        studentpage.SelectAdmissionDate().click()
        studentpage.BloodGroup().type('বি পজেটিভ{enter}')
        studentpage.Gender().type('পুরুষ{enter}')
        studentpage.FaterNameEN().type('Test')
        studentpage.FaterNameBN().type('TestBN')
        studentpage.FatherNID().type('123')
        studentpage.FatherMobileNumber().type('332')
        studentpage.MotherNameEN().type('test1')
        studentpage.MotherNameBN().type('test')
       // cy.get('form').submit()
        cy.wait(1000)
    })
    
})