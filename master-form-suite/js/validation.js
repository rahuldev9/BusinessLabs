$(document).ready(function () {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function clearErrors() {
    $(".error").text("");
  }

  // CONTACT FORM
  $("#contactForm").submit(function (e) {
    clearErrors();
    var valid = true;

    if ($("#contactName").val() == "") {
      $("#contactNameError").text("Name is required");
      valid = false;
    }

    if ($("#contactEmail").val() == "") {
      $("#contactEmailError").text("Email is required");
      valid = false;
    } else if (!emailPattern.test($("#contactEmail").val())) {
      $("#contactEmailError").text("Invalid email format");
      valid = false;
    }

    if ($("#contactMessage").val() == "") {
      $("#contactMessageError").text("Message is required");
      valid = false;
    }

    if (!valid) e.preventDefault();
  });

  // LOGIN FORM
  $("#loginForm").submit(function (e) {
    $("#loginEmailError").text("");
    $("#loginPasswordError").text("");

    var valid = true;

    var email = $("#loginEmail").val();
    var password = $("#loginPassword").val();

    if (email == "") {
      $("#loginEmailError").text("Email is required");
      valid = false;
    } else if (!emailPattern.test(email)) {
      $("#loginEmailError").text("Enter valid email");
      valid = false;
    }

    if (password == "") {
      $("#loginPasswordError").text("Password is required");
      valid = false;
    }

    if (!valid) e.preventDefault();
  });

  // SIGNUP FORM
  $("#signupForm").submit(function (e) {
    clearErrors();
    var valid = true;

    var email = $("#signupEmail").val();
    var pass = $("#signupPassword").val();
    var confirm = $("#confirmPassword").val();

    if (email == "") {
      $("#signupEmailError").text("Email is required");
      valid = false;
    } else if (!emailPattern.test(email)) {
      $("#signupEmailError").text("Invalid email format");
      valid = false;
    }

    if (pass == "") {
      $("#signupPasswordError").text("Password is required");
      valid = false;
    }

    if (confirm == "") {
      $("#confirmPasswordError").text("Confirm password required");
      valid = false;
    } else if (pass !== confirm) {
      $("#confirmPasswordError").text("Passwords do not match");
      valid = false;
    }

    if (!valid) e.preventDefault();
  });

  // MULTI STEP FORM
  var currentStep = 0;
  var steps = $(".step");

  $(steps[currentStep]).show();

  function clearMatchErrors() {
    $("#matchNameError").text("");
    $("#interestError").text("");
    $("#matchEmailError").text("");
  }

  $(".next").click(function () {
    clearMatchErrors();
    var valid = true;

    if (currentStep == 0) {
      if ($("#matchName").val() == "") {
        $("#matchNameError").text("Name is required");
        valid = false;
      }
    }

    if (currentStep == 1) {
      if ($("#interest").val() == "") {
        $("#interestError").text("Please select interest");
        valid = false;
      }
    }

    if (valid) {
      $(steps[currentStep]).hide();
      currentStep++;
      $(steps[currentStep]).show();
    }
  });

  $(".prev").click(function () {
    clearMatchErrors();

    $(steps[currentStep]).hide();
    currentStep--;
    $(steps[currentStep]).show();
  });

  $("#matchForm").submit(function (e) {
    clearMatchErrors();

    if (!emailPattern.test($("#matchEmail").val())) {
      $("#matchEmailError").text("Enter valid email");
      e.preventDefault();
    }
  });

  // NEWSLETTER
  $("#newsletterForm").submit(function (e) {
    $("#newsletterError").text("");

    if (!emailPattern.test($("#newsletterEmail").val())) {
      $("#newsletterError").text("Enter valid email");
      e.preventDefault();
    }
  });
});
