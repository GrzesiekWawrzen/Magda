document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("first_name").value;
    const lastName = document.getElementById("last_name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    const ContactData = {
      email: email,
      name: `${firstName} ${lastName}`,
      phone: phone,
      addTags: ["REGISTER"],
      emailOptIn: 1,
      mobileOptIn: 0,
      monitoringOptIn: 1,
      standardDetails: {
        spektakt: "jasimalgosia",
        gender: "Male",
      },
    };

    SMApi.setAll(ContactData);
    SMApi.execute("contact")
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
