export class UpazilaPage{
    ExpandIcon(){
        return cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
    }

    Menu(){
        return cy.get('[href="/admin/system-configuration/upazila"] > .MuiButtonBase-root')
    }

    CreateBtn(){
        return cy.get('.exportSec > :nth-child(2) > .MuiButtonBase-root')
    }

    SelectDivision(){
        return cy.get("[name='divisionId']")
    }

    SelectDistrict(){
        return cy.get("[name='districtId']")
    }

    NameEn(){
        return cy.get('#nameEnglish')
    }

    NameBN(){
        return cy.get('#nameBangla')
    }
    
    GEOCode(){
        return cy.get('#geo_code')
    }
}