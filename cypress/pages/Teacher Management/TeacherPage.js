/// <reference types="cypress"/>
export class TeacherPage{
    ExpandIcon(){
        return cy.get(':nth-child(5) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
    }
    ExpandIcon2nd(){
        return cy.get(':nth-child(5) > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiList-root > :nth-child(1) > .MuiBox-root > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
    }

    Menu(){
        return cy.get('[href="/admin/teacher-management/teacher-info/add"] > .MuiButtonBase-root > .MuiTypography-root')
    }

    AttachWithoutNID(){
        return cy.get("[name='select_input']")    
    }

    CenterCode(){
        return cy.get("[name='learning_center_id']")
    }
    NameEN(){
        return cy.get('#nameEnglish')
    }
    NameBN(){
        return cy.get('#nameBangla')
    }
    TeacherClusterId(){
        return cy.get('#cluster_number')
    }
    Gender(){
        return cy.get("[name='gender_id']")
    }
    NID(){
        return cy.get('#nid')
    }
    FatherName(){
        return cy.get('#father_name')
    }
    MotherName(){
        return cy.get('#mother_name')
    }
    DoB(){
        return cy.get("[name='dob']")
    }
    SelectDoB(){
        return cy.get('.react-datepicker__day--020').click()
    }
    MobileNo(){
        return cy.get('#mobile')
    }
    JoiningDateClick(){
        return cy.get("[name='doj']")
    }
    SelectJoinDate(){
        return cy.get('.react-datepicker__day--008')
    }
    TeacherIs(){
        return cy.get('#mui-component-select-teacher_extra_qual')
    }

    Email(){
        return cy.get('#email')
    }

    Password(){
        return cy.get('#password')
    }

    DegreeName(){
        return cy.get("[name='teacherEducations.0.degreeId']")
    }

    Group(){
        return cy.xpath("//div[@id='mui-component-select-teacherEducations.0.department']")
    }

    InstituteName(){
        return cy.get("[name='teacherEducations.0.institute_name']")
    }
    Board(){
        return cy.get("[name='teacherEducations.0.boardId']")
    }
    PassingYear(){
        return cy.get("[name='teacherEducations.0.passing_year']")
    }

    CGPAType(){
        //return cy.get('#mui-component-select-teacherEducations.0.type')
        return cy.xpath("//div[@id='mui-component-select-teacherEducations.0.type']")
    }

    Cgpa(){
        return cy.get("[name='teacherEducations.0.cgpa']")
        
    }

    Division(){
        return cy.xpath("//div[@id='mui-component-select-teacherEducations.0.division']")
        
    }
    






}