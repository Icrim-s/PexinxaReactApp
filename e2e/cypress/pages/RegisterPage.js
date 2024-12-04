class RegisterPage{
    navigate(){
        cy.visit('https://pexinxa-database.firebaseapp.com/register');
    }

    fillName(name){
        cy.get('#name').type(name);
    }

    fillPhone(phone){
        cy.get('#phone').type(phone);
    }

    fillEmail(email){
        cy.get('#email').type(email);
    }

    fillPassword(password){
        cy.get('#password').type(password);
    }

    fillConfirmPassword(confirmPassword){
        cy.get('#confirmPassword').type(confirmPassword);
    }

    submit(){
        cy.get('button[type="submit"]').click();
    }

    errorMessage(){
        return cy.get('.text-red-800.bg-red-200.text-center'); 
    }

    errorPassword(){
        return cy.get('#root > div > main > div > div > form > div:nth-child(5) > p'); 
    }

    sucessfulMessage(){
        return cy.get('.text-green-800.bg-green-200.text-center'); 
    }
}
export default new RegisterPage();