/// <reference types="cypress"/>
import { StudentPage } from "../pages/Student/studentpage";
const studentpage = new StudentPage()

describe("StudentManagement", function(){
    for(let i=0; i<1; i++){
    it('StudentAdd', function(){
        cy.login("admin@gmail.com", "IFAdmin123#")
        studentpage.ExpandIcon().click()
        studentpage.Menu().click()
        //studentpage.CenterType().type('প্রাক-প্রাথমিক শিক্ষা কেন্দ্র{enter}')
        studentpage.CenterCode().type('লক্ষীপুর কেন্দ্রীয় জামে মসজিদ - LAX1').type('{downarrow}').type('{enter}')
        studentpage.AttachStudentWithoutNID().type('এনআইডি/জন্ম নিবন্ধন নম্বর ছাড়া').type('{downarrow}').type('{enter}')
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
        studentpage.BirthCertificateNo().type(BCNNumeric())
        function BCNNumeric(){
            var text = "5534567891025635";
            var randomvalue = "0123456789"
            for (var i=0; i<5; i++){
                text += randomvalue.charAt(Math.random() * randomvalue.length)
                return text;
            }
        } 
        studentpage.ClickAdmisssiondate().click()
        studentpage.SelectAdmissionDate().click()
        studentpage.BloodGroup().type('বি পজেটিভ').type('{downarrow}').type('{enter}')
        studentpage.Gender().type('পুরুষ').type('{downarrow}').type('{enter}')
        studentpage.FaterNameEN().type('Abu Bakkar')
        studentpage.FaterNameBN().type('আবু বক্কর')
        studentpage.FatherNID().type('7302854040')
        studentpage.FatherMobileNumber().type('01721556627')
        studentpage.MotherNameEN().type('Amena Begum')
        studentpage.MotherNameBN().type('আমেনা বেগম')
        studentpage.MotherNID().type('7302855885')
        studentpage.ImgAttach().selectFile('cypress/fixtures/hasan.JPEG')
        cy.wait(5000)
        cy.get('form').submit()
        cy.wait(2000)
    })
    }

//Informaiton of Gurdian in Absence of Parent's
    it('StudentAddAbsenceofParents', function(){
        cy.login("admin@gmail.com", "IFAdmin123#")
        studentpage.ExpandIcon().click()
        studentpage.Menu().click()
        //studentpage.CenterType().type('প্রাক-প্রাথমিক শিক্ষা কেন্দ্র{enter}')
        studentpage.CenterCode().type('লক্ষীপুর কেন্দ্রীয় জামে মসজিদ - LAX1').type('{downarrow}').type('{enter}')
        studentpage.AttachStudentWithoutNID().type('এনআইডি/জন্ম নিবন্ধন নম্বর ছাড়া').type('{downarrow}').type('{enter}')
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
        studentpage.BirthCertificateNo().type(BCNNumeric())
        function BCNNumeric(){
            var text = "5534567891025635";
            var randomvalue = "0123456789"
            for (var i=0; i<5; i++){
                text += randomvalue.charAt(Math.random() * randomvalue.length)
                return text;
            }
        } 
        studentpage.ClickAdmisssiondate().click()
        studentpage.SelectAdmissionDate().click()
        studentpage.BloodGroup().type('বি পজেটিভ').type('{downarrow}').type('{enter}')
        studentpage.Gender().type('পুরুষ').type('{downarrow}').type('{enter}')
        studentpage.FaterNameEN().type('Abu Bakkar')
        studentpage.FaterNameBN().type('আবু বক্কর')
        studentpage.FatherNID().type('7302854040')
        studentpage.FatherMobileNumber().type('01721556627')
        studentpage.MotherNameEN().type('Amena Begum')
        studentpage.MotherNameBN().type('আমেনা বেগম')
        studentpage.MotherNID().type('7302855885')
        studentpage.AbsenseParents().click()
        studentpage.GuardianNameEN().type('Jasim Uddin')
        studentpage.GuardianNameBN().type('জসীম উদ্দিন')
        studentpage.GuardianNID().type('7302854638')
        studentpage.GuardianMobileNo().type('01627559685')
        studentpage.ImgAttach().selectFile('cypress/fixtures/hasanuzzaman.jpg')
        cy.wait(5000)
        cy.get('form').submit()
        
    })
 
    
})