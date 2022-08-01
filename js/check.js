
function myFunction() {
    const Player1 = document.getElementById("texta-1").value.split("\n");
    const Player2 = document.getElementById("texta-2").value.split("\n");
  
    let goals1 = parseInt(document.getElementById("team1").value);
    let  goals2= parseInt(document.getElementById("team2").value);
    document.getElementById("team2").value = goals2;
    document.getElementById("team1").value = goals1;
    if (!Player1 || !Player2 || !goals1 || !goals2) {
      alert("No input! Pleas fill all inputs.")
    } else {
      const result = goals1 + goals2;
      if (result > 7) {
        alert("No more than 7 goals!");
      } else if (goals1 < 0 || goals2 < 0) {
        alert("No negative inputs, please use positive once!");
      } else {
        switch (goals1) {
          case 0:
            document.getElementById("result-1").value = "0";
            break;
          case 1:
            document.getElementById("result-1").value = "1";
            break;
          case 2:
            document.getElementById("result-1").value = " 2," + " 1,1";
            break;
          case 3:
            document.getElementById("result-1").value = " 1 1 1," + " 2,1," + " 3";
            break;
          case 4:
            document.getElementById("result-1").value = " 1 1 1 1," + " 2 1 1," + " 3 1," + " 2 2," + " 4";
            break;
          case 5:
            document.getElementById("result-1").value = " 1 1 1 1 1," + " 2 1 1 1," + " 3 1 1," + " 2 3," + " 4 1," + " 5";
            break;
          case 6:
            document.getElementById("result-1").value = " 1 1 1 1 1 1," + " 2 1 1 1 1," + " 3 1 1 1," + " 3 3," + " 4 1 1," + " 5 1," + " 4 2," + " 6";
            break;
          case 7:
            document.getElementById("result-1").value = " 1 1 1 1 1 1 1," + " 2 1 1 1 1 1," + " 3 1 1 1 1," + " 3 4," + " 4 1 1 1," + " 5 1 1," + " 4 2 1," + " 6 1" + " 7";
            break;
          default: 0;
            break;
        }
        switch (goals2) {
          case 0:
            document.getElementById("result-2").value = 0;
            break;
          case 1:
            document.getElementById("result-2").value = 1;
            break;
          case 2:
            document.getElementById("result-2").value = "2," + " 1,1";
            break;
          case 3:
            document.getElementById("result-2").value = "1 1 1," + " 2,1," + " 3";
            break;
          case 4:
            document.getElementById("result-2").value = "1 1 1 1," + " 2 1 1," + " 3 1," + " 2 2," + " 4";
            break;
          case 5:
            document.getElementById("result-2").value = " 1 1 1 1 1," + " 2 1 1 1," + " 3 1 1," + " 2 3," + " 4 1," + " 5";
            break;
          case 6:
            document.getElementById("result-2").value = " 1 1 1 1 1 1," + " 2 1 1 1 1," + " 3 1 1 1," + " 3 3," + " 4 1 1," + " 5 1," + " 4 2," + " 6";
            break;
          case 7:
            document.getElementById("result-2").value = " 1 1 1 1 1 1 1," + " 2 1 1 1 1 1," + " 3 1 1 1 1," + " 3 4," + " 4 1 1 1," + " 5 1 1," + " 4 2 1," + " 6 1" + " 7";
            break;
          default: 0;
            break;
        }
        console.log(Player1);
        console.log(Player2);
      }
    }
    if(goals1 < 0 || goals2 < 0) {
      document.getElementById("result").value = "";
    }
    else if (goals1 > goals2) {
      document.getElementById("result").value = "winner is left team";
    } else if (goals1 < goals2) {
      document.getElementById("result").value = "winner is right team";
    }
    else if (goals1 === goals2) {
      document.getElementById("result").value = "Equal!";
    }
    else {
      document.getElementById("result").value = "";
    }
  }