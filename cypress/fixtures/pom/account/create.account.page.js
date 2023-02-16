class CreateAccount {
    get lableH1() {return cy.get("h1")}
    get inputFirstName() {return cy.get('[name="first_name"]')}
    get inputLastName() {return cy.get('[name="last_name"]')}
    get inputCaptcha() {return cy.get('[name="captcha"]').eq(0)}
    get buttonNext() {return cy.get('[id="form-step1-next"]')}



    randomData(length){
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for( var i=0; i < length; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }

    randomNoNumbersData(length){
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for( var i=0; i < length; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
}

export default new CreateAccount()