export class EmployeePage{
    ExpandIcon(){
        return cy.get(':nth-child(6) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
    }

    Menu(){
        return cy.get('[href="/admin/employee-management/add"] > .MuiButtonBase-root > .MuiTypography-root')
    }

    EmployeeID(){
        return cy.get('#EmployeeId')
    }
    EmployeeNameEN(){
        return cy.get(':nth-child(2) > .css-tzsjye > .MuiFormControl-root > .MuiInputBase-root > #EmployeeName')
    }
    EmployeeNameBN(){
        return cy.get(':nth-child(3) > .css-tzsjye > .MuiFormControl-root > .MuiInputBase-root > #EmployeeName')
    }
    FatherName(){
        return cy.get('#fatherName')
    }
    MotherName(){
        return cy.get('#motherName')
    }
    NID(){
        return cy.get('#Nid')
    }
    EmployeeType(){
        return cy.get("[name='employeetypeId']")
    }
    Office(){
        return cy.get("[name='officeId']")
    }

    Designation(){
        return cy.get("[name='designationId']")
    }

    Email(){
        return cy.get('#Email')
    }
    MobileNo(){
        return cy.get('#Mobile')
    }
    Photo(){
        return cy.get('[type="file"]')
    }


}