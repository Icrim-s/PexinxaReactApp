class Pages{
    navigate(){
        cy.visit('https://pexinxa-database.firebaseapp.com/');
    }    

    navigateProducts(){
        cy.get('a[href="/products"]').click();
    }

    navigateAbout(){
        cy.get('a[href="/about"]').click();
    }

    navigateHome(){
        cy.get('a[href="/"]').click();
    }
    navigateRegister(){
        return cy.contains('button','Criar conta').click();
    }
    navigateLogin(){
        return cy.contains('button','Login').click();
    }
    
    
    

};
export default new Pages();