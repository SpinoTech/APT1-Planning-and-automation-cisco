/// <reference types="cypress" />

import loginCred from "../pageObjects/loginPage"

describe('template spec', () => {
  it('passes', () => {
    const login=new loginCred();
    login.LaunchApp("https://admin-demo.nopcommerce.com/login")
    login.inputUser("admin@yourstore.com")
    login.inputPass("admin")
    login.clickLogin()
  })
})