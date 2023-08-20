/// <reference types="cypress"/>


export class StudentMonthlyAssessmentPage{

    ExpandIcon(){
        return cy.get(':nth-child(4) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
    }
    
    
    ExpandIcon2(){
        return cy.get(':nth-child(3) > .MuiBox-root > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
    }

    Menu(){
        return cy.get(':nth-child(3) > .css-1w9lz16 > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiList-root > :nth-child(1) > .MuiBox-root > .MuiListItem-root > a > .MuiButtonBase-root')
        
    }

    Month(){
        return cy.get("[name='month']")
    }

    CenterType(){
        return cy.get("[name='learningcentertypeId']")
    }
    CenterCode(){
        return cy.get("[name='centerName']")
    }

    SearchBtn(){
        return cy.get('[type="submit"]')
    }

    Attendance(){
        return cy.get("[name='studentEvalutions.0.attendance']")
    }
    Bangla(){
        return cy.get("[name='studentEvalutions.0.bangla']")
    }
    Math(){
        return cy.get("[name='studentEvalutions.0.math']")
    }
    Arabic(){
        return cy.get("[name='studentEvalutions.0.arabic']")
    }
    English(){
        return cy.get("[name='studentEvalutions.0.english']")
    }
    Others(){
        return cy.get("[name='studentEvalutions.0.others']")
    }
    HandWriting(){
        return cy.get("[name='studentEvalutions.0.writing']")
    }
    Cleanliness(){
        return cy.get("[name='studentEvalutions.0.cleanliness']")
    }
    Overall(){
        return cy.get("[name='studentEvalutions.0.overall']")
    }
    VariousKnowledge(){
        return cy.get("[name='studentEvalutions.0.awareness']")
    }

    Draft(){
        return cy.get('.MuiTableCell-root > .MuiBox-root > :nth-child(2)')
    }

    SubmitBtn(){
        return cy.get('.MuiTableCell-root > .MuiBox-root > :nth-child(3)')
    }
}

    