describe('Test cases on hobsons', function(){
 
    it('Open the hobsons url',function()
    {
        cy.visit('https://www.hobsons.com/')
        cy.title().should('eq','Education Advances | Hobsons')
        cy.url().should('include','hobsons.com')
 
    })
 
    it('Click on the intersect',function()
    {
        cy.get('.card-home-banner__image-container').eq(1).trigger('mouseover')
        cy.get('.card-home-banner__lower span').eq(1).click()
        cy.url().should('include','/intersect/')
        cy.get('.block-title__title').scrollIntoView()
 
    })


    it('Select the NC and SC, GA, FL',function()
    {
        const arry = ['North Carolina & South Carolina','Georgia','Florida'];
        for(var a = 0; a < arry.length; a++)
        {
            cy.get('.block-stats-map__state-dropdown').select(arry[a])
            cy.get('.block-stats-map__mobile-popup-text').then(($data) => 
            {
                const name = $data.text()
                cy.log(name)
                expect(name).to.equal('26% to 50% of Students')
            })
        }
       
    })
    
    it('Select the VA',function()
    {
        cy.get('.block-stats-map__state-dropdown').select('Virginia')
        cy.get('.block-stats-map__mobile-popup-text').then(($data) => 
        {
            const name = $data.text()
            cy.log(name)
            expect(name).to.equal('50% of Students')
        })
    })

})


