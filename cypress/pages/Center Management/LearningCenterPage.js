/// <reference types="cypress"/>
export class LearningCenterPage{
    ExpandIcon(){
        return cy.get(':nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
    }
    ExpandIcon2nd(){
        return cy.get('.MuiList-root > :nth-child(1) > .MuiBox-root > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
    }

    Menu(){
        return cy.get('[href="/admin/center/learningcenter/add"] > .MuiButtonBase-root > .MuiTypography-root')
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

    ClickCenterType(){
        return cy.get("[name='centertypeId']")
    }

    SelectCenterType(){
        return cy.get("[name='centertypeId']")
    }
    ClickCommitteFormationDate(){
        return cy.get('[name="formation_date"]')
    }
    SelectCommitteFormationDate(){
        return cy.get('.react-datepicker__day--013')
    }

    ClickDivision(){
        return cy.get("[name='divisionId']")
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
    SelectPlace(){
        return cy.get("[name='placeId']")
    }
    FileSelect(){
        return cy.get('[type="file"]')
    }

    SubmitBtn(){
        return cy.get('.addBtn > .MuiButtonBase-root')
    }
    YesNoBtn(){
        return cy.get('.css-1p07y8n > a > .MuiButtonBase-root')
    }
    EditIcon(){
        return cy.get(':nth-child(1) > :nth-child(8) > .actionField > [aria-label="হালনাগাদ"] > .MuiButton-startIcon > img')
    }
    UpdateBtn(){
        return cy.get('.addBtn > .MuiButtonBase-root')
    }
    


}