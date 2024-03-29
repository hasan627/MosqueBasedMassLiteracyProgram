/// <reference types="cypress" />
import { DivisionPage } from "../pages/System Configuration/divisionpage";
const divisionpage = new DivisionPage();
import { DistrictPage } from "../pages/System Configuration/districtpage"
const districtpage = new DistrictPage();
import { UpazilaPage } from "../pages/System Configuration/Upazilapage";
const upazilapage = new UpazilaPage()
import { StudentPage } from "../pages/Student/studentpage";
const studentpage = new StudentPage()
import { Teacher, TeacherPage } from "../pages/Teacher Management/TeacherPage";
const teacherpage = new TeacherPage();
import {LearningCenterPage} from "../pages/Center Management/LearningCenterPage";
const learningcenterpage = new LearningCenterPage()
import { ResourceCenterPage } from "../pages/Center Management/ResourceCenterPage"
const resourcenterpage = new ResourceCenterPage()

import { EmployeePage } from "../pages/Employee Management/EmployeePage";
const employeepage = new EmployeePage()

describe('Smoke Test', function(){

//Division Test Case
    it.skip('DivisionCreate', function(){
        cy.login("admin@gmail.com", "IFAdmin123#")
          divisionpage.ExpandIcon();
          divisionpage.Menu();
          divisionpage.CreateBtn().click()
          divisionpage.NameEN().type('Mymensingh')
          divisionpage.NameBN().type('ময়মনসিংহ')
          divisionpage.Submit();
          cy.contains('Mymensingh').should('contain', 'Mymensingh')
        });

//District TestCase

it.skip('DistrictAdd', function(){
    cy.login("admin@gmail.com", "IFAdmin123#")
    districtpage.ExpandIcon().click()
    districtpage.Menu().click();
    cy.wait(1000)
    districtpage.CreateBtn().click()
    cy.wait(1000)
    districtpage.SelectDivision().type('ময়মনসিংহ').type('{downarrow}').type('{enter}')
    districtpage.GEOCode().type('123')
    districtpage.NameEN().type('Mymensingh');
    districtpage.NameBN().type('ময়মনসিংহ')
    districtpage.Submit().click()
    cy.contains('Mymensingh').should('contain', 'Mymensingh')

})

//Upazila TestCase
it.skip('Create Upazila', function(){
    cy.login("admin@gmail.com", "IFAdmin123#")
    upazilapage.ExpandIcon().click()
    upazilapage.Menu().click()
    upazilapage.CreateBtn().click()
    cy.wait(1000)
    upazilapage.SelectDivision().type('ময়মনসিংহ').type('{downarrow}').type('{enter}')
    upazilapage.SelectDistrict().type('ময়মনসিংহ').type('{downarrow}').type('{enter}')
    upazilapage.NameEn().type('Mymensingh Sadar')
    upazilapage.NameBN().type('ময়মনসিংহ সদর')
    upazilapage.GEOCode().type('123')
    cy.get('form').submit()
    cy.contains('ময়মনসিংহ সদর').should('contain', 'ময়মনসিংহ সদর')

})

//Learning Center Add
it('Learning Center Add', function(){
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
    learningcenterpage.SelectCenterType().type('প্রাক-প্রাথমিক শিক্ষা কেন্দ্র').type('{downarrow}').type('{enter}');
    learningcenterpage.ClickCommitteFormationDate().click()
    learningcenterpage.SelectCommitteFormationDate().click()
    learningcenterpage.ClickDivision().click()
    learningcenterpage.SelectDivision().type('চট্টগ্রাম').type('{downarrow}').type('{enter}')
    learningcenterpage.SelectDistrict().click().type('চট্টগ্রাম').type('{downarrow}').type('{enter}')
    learningcenterpage.SelectUpazila_Citycorporation().type('সিটি কর্পোরেশন{enter}');
    learningcenterpage.SelectCityCorporation().click().type('চট্টগ্রাম সিটি কর্পোরেশন').type('{downarrow}').type('{enter}')
    learningcenterpage.Union().type('13')
    learningcenterpage.Area().type('Area')
    learningcenterpage.SelectPlace().click().type('কাছারি').type('{downarrow}').type('{enter}')
    learningcenterpage.FileSelect().selectFile('cypress/fixtures/mosque.jpg')
    cy.wait(2000)
    cy.get('form').submit()
    learningcenterpage.NoBtn().click()
    //Validation Code
    //cy.contains('CY1').should('be.visible')
    cy.wait(2000)
    
});

//Resource Center Add
it('ResourceCenterAdd', function(){

    function ResCenCode(){
        var text = "Resource Center";
        var possible = "0123456789"
        for (var i=0; i<1; i++){
            text += possible.charAt(Math.random() * possible.length)
            return text;
        }
    }

    cy.login("admin@gmail.com", "IFAdmin123#")
    resourcenterpage.ExpandIcon().click()
    resourcenterpage.ExpandIcon2nd().click()
    resourcenterpage.Menu().click()
    for(let i=0; i<1; i++){
    resourcenterpage.CenterCode().type(ResCenCode())
    resourcenterpage.CenterNameBN().type(ResCenCode())
    resourcenterpage.CenterNameEN().type(ResCenCode())
    resourcenterpage.CenterType().type('মডেল রিসোর্স কেন্দ্র').type('{downarrow}').type('{enter}')
    resourcenterpage.SelectDivision().type('চট্টগ্রাম').type('{downarrow}').type('{enter}')
    resourcenterpage.SelectDistrict().type('চট্টগ্রাম').type('{downarrow}').type('{enter}')
    resourcenterpage
    resourcenterpage.SelectUpazila_Citycorporation().type('সিটি কর্পোরেশন{enter}');
    resourcenterpage.SelectCityCorporation().click().type('চট্টগ্রাম সিটি কর্পোরেশন').type('{downarrow}').type('{enter}')
    resourcenterpage.Union().type('13')
    resourcenterpage.Area().type('Area')
    resourcenterpage.Caretaker().type('মডেল কেয়ারটেকার').type('{downarrow}').type('{enter}')
    resourcenterpage.FileSelect().selectFile('cypress/fixtures/mosque.jpg')
    cy.wait(2000)
    cy.get('form').submit()
    resourcenterpage.NoBtn().click()
    cy.wait(2000)
    }
});


//Student Add
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
        for (var i=0; i<1; i++){
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
        for (var i=0; i<1; i++){
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

//StudentAddAbsenceofParents
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
        for (var i=0; i<1; i++){
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
        for (var i=0; i<1; i++){
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
    cy.wait(3000)
    cy.get('form').submit()
    cy.wait(2000)
    
})

//Teacher Add
it('Teacher Add', function(){
    cy.login("admin@gmail.com", "IFAdmin123#")
    teacherpage.ExpandIcon().click()
    teacherpage.ExpandIcon2nd().click()
    teacherpage.Menu().click()
    teacherpage.AttachWithoutNID().click().type('এনআইডি নম্বর ছাড়া').type('{downarrow}').type('{enter}')
    teacherpage.CenterCode().click().type('বায়তুল মোকারাম মসজিদ1').type('{downarrow}').type('{enter}').should('be.visible')
    teacherpage.NameEN().type('Md Azad Mia')
    teacherpage.NameBN().type('মোঃ আজাদ মিয়া')
    teacherpage.TeacherClusterId().type('123456')
    teacherpage.Gender().click().type('পুরুষ').type('{downarrow}').type('{enter}')
    teacherpage.NID().type('1234568590')
    teacherpage.FatherName().type('Rafiqul Islam')
    teacherpage.MotherName().type('Amena Begum')
    teacherpage.DoB().click()
    teacherpage.SelectDoB()
    teacherpage.MobileNo().type('0162755896')
    teacherpage.JoiningDateClick().click()
    teacherpage.TeacherIs().type('ইমাম{enter}')
    teacherpage.Email().type('email@gmail.com')
    teacherpage.Password().type('123456')

    //How to store input value
    cy.get('#email').invoke('val').then((inputValue) => {
        const storedEmailValue = inputValue;
    cy.log('Store Value is:', storedEmailValue)
    })
    //How to store dropdown value
    teacherpage.DegreeName().type('অনার্স').type('{downarrow}').type('{enter}')
    cy.xpath("//input[@value='অনার্স']").invoke('val').then((selectedValue) => {
        const storedDegreeValue = selectedValue;
    cy.log('Selected Value is:', storedDegreeValue)

    //If else statement
    if(storedDegreeValue =='এসএসসি/দাখিল' || storedDegreeValue == 'এইচএসসি/আলিম'){
        teacherpage.Group().should('be.visible')
        teacherpage.Group().click()
        cy.get('[data-value="Arts"]').click()
        teacherpage.Board().type('কুমিল্লা').type('{downarrow}').type('{enter}')
        teacherpage.InstituteName().type('Rupachara Safi Ullah High School');
        teacherpage.PassingYear().type('২০২৩').type('{downarrow}').type('{enter}')
        teacherpage.CGPAType().click()
        cy.get('.MuiList-root > [tabindex="-1"]').click()
        teacherpage.Cgpa().type('3.33')
        cy.get('form').submit()
        cy.wait(2000)
    }else{
        cy.get('#Department').type('CSE')
        teacherpage.Board().type('ঢাকা বিশ্ববিদ্যালয়').type('{downarrow}').type('{enter}')
        teacherpage.PassingYear().type('২০২৩').type('{downarrow}').type('{enter}')
        teacherpage.CGPAType().click()
        cy.get('.MuiList-root > [tabindex="0"]').click()
        teacherpage.Division().should('be.visible')
        teacherpage.Division().click()
        cy.get('.MuiList-root > [tabindex="0"]').click()
        cy.get('form').submit()
        cy.wait(2000)
    }

    })
       

})

//Employee Add
it('Employee Add', function(){
    cy.login("admin@gmail.com", "IFAdmin123#")
    employeepage.ExpandIcon().click()
    employeepage.Menu().click()
    //employeepage.EmployeeID().type('2')
    employeepage.EmployeeNameEN().type('Employee Name English')
    employeepage.EmployeeNameBN().type('Employee Name Bangla')
    employeepage.FatherName().type('Father Name')
    employeepage.MotherName().type('Mother Name')
    employeepage.NID().type('7302845025')
    employeepage.EmployeeType().click().type('উন্নয়ন').type('{downarrow}').type('{enter}')
    employeepage.Office().click().type('বিভাগীয় অফিস').type('{downarrow}').type('{enter}')
    employeepage.Designation().type('মাঠ কর্মী').type('{downarrow}').type('{enter}')
    employeepage.Email().type('test@gmail.com')
    employeepage.MobileNo().type('01627958596')
    employeepage.Photo().selectFile('cypress//fixtures//mosque.jpg')
    cy.get('form').submit()
    cy.contains('Employee Name Bangla').should('be.visible')
    cy.wait(2000)
})

      
})

