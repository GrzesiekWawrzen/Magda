document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Phone:', phone);

    const ContactData = {
        email: email,
        name: `${firstName} ${lastName}`,
        phone: phone,
        emailOptIn: 1,
        mobileOptIn: 0,
        monitoringOptIn: 1
    };

    console.log('ContactData:', ContactData);

    SMApi.setAll(ContactData);
    SMApi.execute('contact').then((result) => {
        console.log(result);
        alert("Rejestracja zakończona sukcesem!");
    }).catch((error) => {
        console.error('Error:', error);
        alert("Wystąpił błąd podczas rejestracji.");
    });
});
