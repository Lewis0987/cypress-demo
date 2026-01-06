/*describe('login then visit hall', () => {
  it('login first', () => {
    cy.visit('https://in-u6.ttgroup-dev.vip/login')

    cy.get('#username').type('9999999999')
    cy.get('#password').type('1111')
    cy.get('#loginBtn').click()

    cy.url().should('include', '/hall')
  })
})*/

describe('rechargeWheel - full localStorage login', () => {

  it.only('visit rechargeWheel', () => {
    
    cy.visit('/')
    
    cy.window().then((win) => {
      win.localStorage.setItem('token', '121f526f11552b69018d0486dec9d1a7ic0156')
      win.localStorage.setItem('device_id', 'eeb76da8-11cc-4974-92xx-xxxx')
      win.localStorage.setItem('os_pageViews', '1')
      win.localStorage.setItem('cacheCleanedOnce', 'true')
      win.localStorage.setItem('IS_WEBP_SUPPORT', 'true')
      win.localStorage.setItem('IS_AVIF_SUPPORT', 'true')
    
      // tracking（名字要一模一樣）
      win.localStorage.setItem(
        'ph_phc_dw1nzS7wzR9D1gt...',
        '{"distinct_id":"019b2539..."}'
      )
    })
    
    // ⚠️ 關鍵：一定要重新載入
    cy.reload()
    
    cy.visit('/hall')
    
    cy.url().should('include', '/hall')
  })

})


