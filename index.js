let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");
let saveButton = document.getElementById("saveButton");

const generatePassword = (len) => {
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeric = "0123456789";
    const symbol = "!@#$%^&*()_+{}[]';:/?.,<>~`";

    const data = lowerAlphabet + upperAlphabet + numeric + symbol;
    let generator = '';
    for (let index = 0; index < len; index++) {
        generator += data[~~(Math.random() * data.length)];
    }

    return generator;
}

const getPassword = () => {
    const length = parseInt(passwordLength.value, 10); // Convert the value to an integer
    if (!isNaN(length) && length > 0) {
        const newPassword = generatePassword(length);
        password.value = newPassword;
        // setTimeout(() => {
            alert('Password has been generated');
        // }, 1000); // Added delay of 1 second
    } else {
        alert('Please enter a valid password length');
    }
}


const savePassword = () => {
    const passwordText = password.value;
    if (passwordText) {
        // Set the href attribute to a data URL with the password content
        saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`My Password: ${passwordText}`));

        // Set the download attribute to specify the file name
        saveButton.setAttribute('download', 'MyPasswordGeneratorLOG(1).txt');

        // Optionally update the document title to the password
        document.title = passwordText;

        // Show a success alert
        setTimeout(() => {
            alert('Password has been saved successfully');
        }, 100);
    } else {
        alert('Please generate a password before saving.');
    }
};


// const savePassword = () => {
//     const passwordText = password.value;
//     if (passwordText) {
//         // Set the href attribute to a data URL with the password content
//         saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`Generated Password: ${passwordText}`));

//         // Set the download attribute to specify the file name
//         saveButton.setAttribute('download', 'MyPasswordGeneratorLOG(1).txt');

//         // Update the document title to the password (optional)
//         document.title = passwordText;
//         saveButton.setAttribute('href','data:text')

//         // Show a success alert
//         setTimeout(() => {
//             alert('Password has been saved successfully');
//         }, 100);
//     } else {
//         alert('Please generate a password before saving.');
//     }
// };



// const savepassword = () => {
//     saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`password saya: ${document.title}`))
//     saveButton.setAttribute('download', 'MyPasswordGenerator')
//   document.title = password.value
//   setTimeout(() => {
//     alert('berhasil disimpan')
//   },100)
// }

// Attach the event listener to the saveButton
// saveButton.addEventListener("click", getPassword);
