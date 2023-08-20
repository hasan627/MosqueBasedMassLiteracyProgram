/// <reference types="cypress"/>
export class ResourceCenterPage{
    ExpandIcon(){
        return cy.get(':nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
    }
    ExpandIcon2nd(){
        return cy.get(':nth-child(2) > .MuiBox-root > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
    }

    Menu(){
        return cy.get('[href="/admin/center/resourcecenter/add"] > .MuiButtonBase-root > .MuiTypography-root')
    }

    CenterCode(){
        return cy.get('#code')
    }

    CenterNameBN(){
        return cy.get('#name_bn')
    }
    CenterNameEN(){
        return cy.get('#name_en')
    }

    CenterType(){
        return cy.get("[name='resourcecentertypeId']")
    }

    SelectDivision(){
        return cy.get("[name='divisionId']")
    }
    SelectDistrict(){
        return cy.get("[name='districtId']")

    }

    SelectUpazila_Citycorporation(){
        return cy.get('#mui-component-select-type')
    }

    SelectCityCorporation(){
        return cy.get("[name='citycorporationId']")
    }
    Union(){
        return cy.get('#union')
    }
    Area(){
        return cy.get('#area')
    }
    Address(){
        return cy.get('#address')
    }
    CenterDescription(){
        return cy.get('#description')
    }
    FileSelect(){
        return cy.get('[type="file"]')
    }
    Caretaker(){
        return cy.get("[name='caretaker']")
    }

    SubmitBtn(){
        return cy.get('.addBtn > .MuiButtonBase-root')
    }
    YesBtn(){
        return cy.get('.css-1p07y8n > :nth-child(3)')
    }
    NoBtn(){
        return cy.get('.css-1p07y8n > a > .MuiButtonBase-root')
    }
    EditIcon(){
        return 
    }
    UpdateBtn(){
        return 
    }
    


}