describe('My First Test', () => {
  it('enter hall after login', () => {
    cy.visit('https://tw.yahoo.com/')      // 開啟網頁
    cy.visit('https://in-u6.ttgroup-dev.vip/hall')
    /*cy.contains('https://in-u6.ttgroup-dev.vip/hall')  */      // 確認頁面內容
    cy.url().should('include', '/hall') // 驗證 URL
  })
})

token('5bac689d8a158d21e3716a6e916f307bce0156')