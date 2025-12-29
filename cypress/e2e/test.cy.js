describe('My First Test', () => {
  it('enter hall after login', () => {
    cy.visit('https://in-u6.ttgroup-dev.vip')      // 開啟網頁
    /*cy.contains('https://in-u6.ttgroup-dev.vip/hall')  */      // 確認頁面內容
    cy.url().should('include', '/hall') // 驗證 URL
  })
})

