"use strict";

let inputBaseDesign = {
  width: "75%",
  height: "45px",
  color: "#999999",
  fontSize: "medium",
  margin: "20px auto",
  paddingLeft: "15px",
  borderRadius: "25px",
  border: "solid 2px #000000",
  boxShadow: "3px 3px 0 #107777",
};
let iconBaseDesign = {
  width: "80px",
  height: "80px",
  margin: "10px",
  backgroundColor: "white",
  borderRadius: "75px",
  border: "solid 2px #000000",
};

PetiteVue.createApp({
  //
  // input
  school: "学校名",
  mail: "メールアドレス",
  phone: "電話番号",
  id: "ユーザーID",
  pass: "パスワード",
  inputCount: 0,
  // icon
  AccountName: "表示名",

  // form style
  // input
  inputTextSchool: { ...inputBaseDesign },
  inputTextMail: { ...inputBaseDesign },
  inputTextPhone: { ...inputBaseDesign },
  inputTextId: { ...inputBaseDesign },
  inputTextPass: { ...inputBaseDesign },
  //icon
  inputAccountName: { ...inputBaseDesign },
  iconDesign: { ...iconBaseDesign },

  // input
  changeSchool() {
    this.school = "";
    this.inputTextSchool.backgroundColor = "#d6eded";
    this.inputTextSchool.boxShadow = "3px 3px 0 0 #107777 inset";
    this.inputTextSchool.color = "#000000";
    this.inputCount += 1;
  },
  changeMail() {
    this.mail = "";
    this.inputTextMail.backgroundColor = "#d6eded";
    this.inputTextMail.boxShadow = "3px 3px 0 0 #107777 inset";
    this.inputTextMail.color = "#000000";
    this.inputCount += 1;
  },
  changePhone() {
    this.phone = "";
    this.inputTextPhone.backgroundColor = "#d6eded";
    this.inputTextPhone.boxShadow = "3px 3px 0 0 #107777 inset";
    this.inputTextPhone.color = "#000000";
    this.inputCount += 1;
  },
  changeId() {
    this.id = "";
    this.inputTextId.backgroundColor = "#d6eded";
    this.inputTextId.boxShadow = "3px 3px 0 0 #107777 inset";
    this.inputTextId.color = "#000000";
    this.inputCount += 1;
  },
  changePass() {
    this.pass = "";
    this.inputTextPass.backgroundColor = "#d6eded";
    this.inputTextPass.boxShadow = "3px 3px 0 0 #107777 inset";
    this.inputTextPass.color = "#000000";
    this.inputCount += 1;
  },
  // icon
  changeAccountName() {
    this.AccountName = "";
    this.inputAccountName.backgroundColor = "#d6eded";
    // this.inputAccountName.boxShadow = "3px 3px 0 0 #107777 inset";
    this.inputAccountName.boxShadow = "none";
    this.inputAccountName.color = "#000000";
  },

  // next操作
  // input
  get inputNextArrow() {
    let arrowStyle = {
      backgroundColor: "#d6eded",
      margin: "0",
      width: "45px",
      height: "45px",
      border: "solid 1px #000000",
      boxShadow: "3px 3px 0 0 #107777 inset",

      textDecoration: "none",
      color: "#107777",
      fontFamily: '"Zen Kaku Gothic New", sans-serif',
      fontSize: "large",
      fontWeight: "bold",
      borderRadius: "25px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };
    if (this.inputCount >= 5) {
      arrowStyle.backgroundColor = "#ffffff";
      arrowStyle.color = "#000000";
      arrowStyle.boxShadow = "0 0 10px 0px #d6eded";
    }
    return arrowStyle;
  },
  get inputNextText() {
    let textStyle = {
      margin: "0",
      marginRight: "10px",
      color: "#107777",
      fontFamily: '"Zen Kaku Gothic New", sans-serif',
      fontSize: "large",
      fontWeight: "bold",
    };
    if (this.inputCount == 5) {
      textStyle.color = "#ffffff";
      textStyle.color = "#000000";
      textStyle.fontSize = "x-large";
      textStyle.textShadow = "0 0 10px #d6eded";
    }
    return textStyle;
  },
  //icon
  get iconNextArrow() {
    let arrowStyle = {
      backgroundColor: "#ffffff",
      margin: "0",
      width: "45px",
      height: "45px",
      border: "solid 1px #000000",
      boxShadow: "3px 3px 0 0 #67d0d0",

      textDecoration: "none",
      color: "#000000",
      fontFamily: '"Zen Kaku Gothic New", sans-serif',
      fontSize: "large",
      fontWeight: "bold",
      borderRadius: "25px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };
    return arrowStyle;
  },
  //comp
  get compNextArrow() {
    let arrowStyle = {
      backgroundColor: "#ffffff",
      margin: "0",
      width: "45px",
      height: "45px",
      border: "solid 1px #000000",
      boxShadow: "3px 3px 0 0 #67d0d0",

      textDecoration: "none",
      color: "#000000",
      fontFamily: '"Zen Kaku Gothic New", sans-serif',
      fontSize: "large",
      fontWeight: "bold",
      borderRadius: "25px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };
    return arrowStyle;
  },
}).mount();
