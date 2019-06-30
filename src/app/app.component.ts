import { Component } from '@angular/core';
import { TrainingsetService } from './trainingset.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor(private trainingSetService: TrainingsetService){}

   logged = false;
   errorMessage = "";
   sarcasmCheckContainer = "";
   loginMessage = "";

  //Local Storage

    getLoggedUser(){
      return localStorage.getItem("user");
    }

    setLoggedUser(user){
      localStorage.setItem("user", user);
    }


  //Local Storage

  //Error Container

    hideError()
    {
      var container = document.getElementById("errorContainer");
      this.errorMessage = "";
      container.style.display = "none";
    }

    showError(message)
    {
      var container = document.getElementById("errorContainer");
      this.errorMessage = message;
      container.style.display = "initial";
    }

  //Error Container

  //Login Container

    logBtnLabel = "";
    loginUser = "";
    loginPassword = "";

    setLoginFieldWhenNotLogged()
    {
      this.logBtnLabel = "Login";
      this.loginMessage = "";
      var userField = document.getElementById("loginUser");
      var passwordField = document.getElementById("loginPassword");
      userField.style.display="initial";
      passwordField.style.display="initial";
      userField.textContent = "";
      passwordField.textContent = "";
    }

    setLoginWhenLogged()
    {
      this.logBtnLabel = "Logout";
      this.loginMessage = "Welcome "+ this.getLoggedUser();
      var userField = document.getElementById("loginUser");
      var passwordField = document.getElementById("loginPassword");
      userField.style.display="none";
      passwordField.style.display="none";
    }

    loginAction()
    {
      this.hideError();
      if(this.getLoggedUser()== null || this.getLoggedUser() == ""){
        
        this.setLoggedUser(this.loginUser+":"+this.loginPassword);
        this.setLoginWhenLogged();
      }
      else
      {
        this.setLoggedUser("");
        this.setLoginFieldWhenNotLogged();
      }
    }

  //Login Container

  // Check for sarcasm 
    
    textToClassify = "";
    sarcasmLabel;
    addResultLabel;
    checkForSarcasm()
    {
      console.log("hi");
      var user = "u";
      this.trainingSetService.getTrainingSet(user).then(res => console.log(res)).catch(err => console.log(err))
    }
    
  //Check for sarcasm

  // Add document

  textToAdd = "";

    hideAddDocumentContainer()
    {
      var documentContainer = document.getElementById("addDocumentContainer");
      documentContainer.style.display="none";
    }

    showAddDocumentContainer()
    {
      var documentContainer = document.getElementById("addDocumentContainer");
      documentContainer.style.display="initial";
    }

    addDocument()
    {

    }

  // Add document

  ngOnInit()
  {
    this.hideError();
      if(this.getLoggedUser()== null || this.getLoggedUser() == "")
      {
        this.setLoginFieldWhenNotLogged();
      }
      else
      {
        this.setLoginWhenLogged();
      }
  }


  title = 'sarcassifierc';
}
