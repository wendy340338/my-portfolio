let balance = 0;

  // Register User
  function registerUser() {

    let username =
      document.getElementById("username").value;

    let referral =
      document.getElementById("referral").value;

    alert(
      "Welcome " + username +
      "! Registered successfully."
    );

    if(referral !== "") {
      balance += 350;

      alert(
        "Referral bonus added! +Ksh 350"
      );

      updateBalance();
    }
  }

  // Watch Video Reward
  function watchVideo() {

    alert("Video watched successfully!");

    balance += 5;

    updateBalance();
  }

  // Correct Trivia
  function correctAnswer() {

    alert("Correct Answer! +Ksh 10");

    balance += 10;

    updateBalance();
  }

  // Wrong Trivia
  function wrongAnswer() {

    alert("Wrong Answer!");
  }

  // Update Wallet Balance
  function updateBalance() {

    document.getElementById("balance")
      .innerText = balance;
  }
