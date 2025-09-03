describe("Tela de login", function(){

    beforeEach(function(){
        cy.visit("https://www.hipertrofia.org/forum")
    })

    it("Deve fazer o login com sucesso", function(){
        
        cy.get("#elSignInLink").click("")
        
        cy.get("#login_popup_email").type("marcela-barreira@tuamaeaquelaursa.com")

        cy.get("#login_popup_password").type("~9E;E9=+U;$g_r3")

        cy.get(".ipsButton.ipsButton--primary.i-width_100p").click()

        // cy.url().should("include","")

        // cy.contains("Você logou com sucesso!").should("be.visible")
        

    })

//   it("Login invalido", function(){
        
//         cy.get("#username").type("admin1")

//         cy.get("#password").type("1234")

//         cy.get("button").click()

//         cy.contains("Usuário ou senha incorretos!").should("be.visible")
        

//     })

    

    
})