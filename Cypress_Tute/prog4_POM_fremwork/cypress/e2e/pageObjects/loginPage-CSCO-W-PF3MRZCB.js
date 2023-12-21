/// <reference types="cypress" />

class loginCred {

 LaunchApp=(url)=>{
  cy.visit(url);
}

 inputUser = (value)=>{
  const user=cy.get("#Email");
  user.clear();
  user.type(value);
}

 inputPass = (value)=>{
    const pass=cy.get("#Password");
    pass.clear();
    pass.type(value);
}

 clickLogin = ()=>{
    const btn = cy.get("button[type='submit']");
    btn.click();
}
}

export default loginCred;