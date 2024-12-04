class LoginPage{
    navigate(){
        cy.visit('https://pexinxa-database.firebaseapp.com/login');
    }

    fillEmail(email){
        cy.get('#email').type(email);
    }

    fillPassword(password){
        cy.get('#password').type(password);
    }

    submit(){
        cy.get('button[type="submit"]').click();
    }

    errorMessage(){
        return cy.get('.text-red-800.bg-red-200.text-center'); 
    }

    sucessfulMessage(){
        return cy.get('.text-green-800.bg-green-200.text-center'); 
    }

    googleLogin(){
        cy.get('[@id="root"]/div/main/div/div/button[2]').click();
    }
}
export default new LoginPage();