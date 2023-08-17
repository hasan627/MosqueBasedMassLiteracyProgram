/// <reference types="cypress"/>
export class StudentPage{

    ExpandIcon(){
        return cy.get(':nth-child(4) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
    }

    Menu(){
        return cy.get('[href="/admin/student-management/student-info/add"] > .MuiButtonBase-root')
    }

    CenterType(){
        return cy.get("[name='learningcentertypeId']")
    }
    CenterCode(){
        return cy.get("[name='learning_center_id']")
    }

    AttachStudentWithoutNID(){
        return cy.get("[name='select_student_input']")
    }
    StudentNameEN(){
        return cy.get('#name_en')
    }
    StudentNameBN(){
        return cy.get('#name_bn')
    }
    StudentRoll(){
        return cy.get('#name_en')
    }
    ClickDoB(){
        return cy.get("[name='dob']")
    }

    SelectDoB(){
        return cy.get('.react-datepicker__day--016')
    }

    BirthCertificateNo(){
        return cy.get('#bcn')
    }
    NID(){
        return cy.get('#nid')
    }

    ClickAdmisssiondate(){
        return cy.get("[name='doa']")
    }
    SelectAdmissionDate(){
        return cy.get('.react-datepicker__day--016')
    }
    BloodGroup(){
        return cy.get("[name='bloodgroupId']")
    }
    Gender(){
        return cy.get("[name='gender_id']")
    }

    FaterNameEN(){
        return cy.get('#father_name_en')
    }
    FaterNameBN(){
        return cy.get('#father_name_bn')
    }
    FatherNID(){
        return cy.get('#father_nid')
    }
    FatherMobileNumber(){
        return cy.get('#father_mobile')
    }
    MotherNameEN(){
        return cy.get('#mother_name_en')
    }
    MotherNameBN(){
        return cy.get('#mother_name_bn')
    }
    MotherNID(){
        return cy.get('#mother_nid')
    }
    //Information of Gurdian in Absence of Parent's
    AbsenseParents(){
        return cy.get('#is_guardian_absent')
    }

    GuardianNameEN(){
        return cy.get('#guardian_name_en')
    }
    GuardianNameBN(){
        return cy.get('#guardian_name_bn')
    }
    GuardianNID(){
        return cy.get('#guardian_nid')
    }
    GuardianMobileNo(){
        return cy.get('#guardian_mobile')
    }

    ImgAttach(){
        return cy.get('[type="file"]')
    }



}