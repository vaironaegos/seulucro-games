const DoubleGame = () => {
    const $form = document.querySelector("form#form-bet");
    const $spanBalance = document.querySelector("span#balance");
    const $inputAmount = document.querySelector("input#amount");
    const $radioColor = document.getElementsByName("color");
    const $btnEnterRound = document.querySelector("button#enter-round");
    const $btnYellow = document.querySelector("button#yellow");
    const $btnGreen = document.querySelector("button#green");
    const $btnWhite = document.querySelector("button#white");
    const $spanBetterName = document.querySelector("span#better-name");
    const $divYellowBets = document.querySelector("div#yellow-bets");
    const $divGreenBets = document.querySelector("div#green-bets");
    const $divWhiteBets = document.querySelector("div#white-bets");
    const $yellowBetSum = document.querySelector("span#yellow-bets-sum");
    const $yellowPlayersCount = document.querySelector("#yellow-players-count");
    const $greenBetSum = document.querySelector("span#green-bets-sum");
    const $greenPlayersCount = document.querySelector("span#green-players-count");
    const $whiteBetSum = document.querySelector("span#white-bets-sum");
    const $whitePlayersCount = document.querySelector("span#white-players-count");
    const $divRoundWaiting = document.querySelector("div.round-waiting");
    const $divRoundResult = document.querySelector("div.round-result");
    const $divRoundComplete = document.querySelector("div.round-complete");
  
    const disableAll = (disable) => {
      $inputAmount.disabled = disable;
      $btnEnterRound.disabled = disable;
      // $btnYellow.disabled = disable;
      // $btnGreen.disabled = disable;
      // $btnWhite.disabled = disable;
      $radioColor.forEach((item) => (item.disabled = disable));
    };
  
    const setBalance = (balance) => ($spanBalance.innerHTML = balance);
    const setPlayerName = (name) => ($spanBetterName.innerHTML = name);
  
    const createBetRow = (divElement, { username, amount }) => {
      const $row = document.createElement("div");
      $row.classList.add("d-flex", "p-2", "justify-content-between");
      $row.style.backgroundColor = "white";
      $row.innerHTML = `<div>${username}</div><div>R$ ${amount}</div>`;
      divElement.appendChild($row);
    };
  
    disableAll(false);
  
    $form.addEventListener("submit", async (e) => {
      e.preventDefault();
      disableAll(true);
      const color = Number(
        document.querySelector('input[name="color"]:checked').value
      );
      const amount = Number($inputAmount.value);
      const response = await post(apiUrl("/games/double/bet"), { amount, color });
      console.log({ response });
    });
  
    /*$btnYellow.addEventListener("click", (e) => {
      console.log("Yellow");
    });
  
    $btnGreen.addEventListener("click", (e) => {
      console.log("Green");
    });
  
    $btnWhite.addEventListener("click", (e) => {
      console.log("White");
    });*/
  
    const onReceiveTick = (data) => {
      log("~> double.ticket received", data, "negative");
      if (!data) return;
      const { bets, color, createdAt, id, status, summary, updatedAt } = data;
  
      if (status === "waiting") {
        $divRoundWaiting.classList.remove("d-none");
        const yellowSummary = summary.find((row) => row.code === 1);
        const greenSummary = summary.find((row) => row.code === 2);
        const whiteSummary = summary.find((row) => row.code === 3);
  
        $yellowBetSum.innerHTML = yellowSummary.sum;
        $yellowPlayersCount.innerHTML = yellowSummary.count;
        $greenBetSum.innerHTML = greenSummary.sum;
        $greenPlayersCount.innerHTML = greenSummary.count;
        $whiteBetSum.innerHTML = whiteSummary.sum;
        $whitePlayersCount.innerHTML = whiteSummary.count;
  
        let $betContainer = null;
  
        $divYellowBets.innerHTML = "";
        $divGreenBets.innerHTML = "";
        $divWhiteBets.innerHTML = "";
  
        // Color 1 - Yellow | Color 2 - Green | Color 3 - White
        bets.forEach((bet) => {
          switch (bet.color) {
            case 1:
              $betContainer = $divYellowBets;
              break;
            case 2:
              $betContainer = $divGreenBets;
              break;
            case 3:
              $betContainer = $divWhiteBets;
              break;
          }
  
          createBetRow($betContainer, {
            username: bet.user.username,
            amount: bet.betAmount,
          });
        });
      }
  
      if (status === "started") {
        disableAll(true);
        $divRoundWaiting.classList.add("d-none");
        $divRoundResult.classList.remove("d-none");
        $divRoundResult.querySelector("span").innerHTML = getColorText(color);
      }
  
      if (status === "complete") {
        $divRoundResult.classList.add("d-none");
        $divRoundComplete.classList.remove("d-none");
        setTimeout(() => {
          $divRoundComplete.classList.add("d-none");
          $divRoundResult.classList.add("d-none");
          $divRoundWaiting.classList.remove("d-none");
          disableAll(false);
        }, 8000);
      }
    };
  
    const getColorText = (code) => {
      switch (code) {
        case 1:
          return "YELLOW";
        case 2:
          return "GREEN";
        case 3:
          return "WHITE";
      }
    };
  
    const onRegisterUser = (data) => {
      log("~> registerCallback:", data, "negative");
      setBalance(data.balance);
      setPlayerName(data.username);
    };
  
    return {
      onReceiveTick,
      onRegisterUser,
    };
  };