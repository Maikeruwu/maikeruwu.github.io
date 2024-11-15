window.loadFunctions.passwordGenerator = function() {
    document.getElementById("generateButton").onclick = generatePassword;
}

class PasswordGenerator {
    constructor() {
        this.password = "";
        this.hasBig = false;
        this.germanWords = [];
        this.ready = false;
        this.loadGermanWords();
    }

    generatePassword() {
        // Wait until ready (without freezing the browser)
        if (!this.ready) {
            return;
        }

        this.password = "";
        this.password += this.generateWord();
        this.password += this.generateSpecialCharacter();
        this.password += this.generateWord();
        this.password += this.generateNumbers();
        // this.password += this.generateSpecialCharacter();
        // this.password += this.generateJumble();
        return this.password;
    }

    generateWord() {
        if (this.generateUpperCase()) {
            return this.germanWords[Math.floor(Math.random() * this.germanWords.length)].charAt(0).toUpperCase() + this.germanWords[Math.floor(Math.random() * this.germanWords.length)];
        }
        return this.germanWords[Math.floor(Math.random() * this.germanWords.length)];
    }

    generateUpperCase() {
        if (!this.hasBig && Math.floor(Math.random() * 2) === 0) {
            this.hasBig = true;
            return true;
        }
        return false;
    }

    generateSpecialCharacter() {
        return String.fromCharCode(Math.floor(Math.random() * 32) + 33);
    }

    generateNumbers() {
        let numbers = String(Math.floor(Math.random() * 900) + 100);
        while (Math.floor(Math.random() * 2) === 0) {
            numbers += String(Math.floor(Math.random() * 10));
        }
        return numbers;
    }

    generateJumble() {
        let word = "";
        let wordLength = Math.floor(Math.random() * 3) + 3;
        for (let i = 0; i < wordLength; i++) {
            word += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        }
        return word;
    }

    loadGermanWords() {
        fetch("./assets/data/german.txt")
            .then(response => response.text())
            .then(text => {
                text.trim().split("\n").forEach(line => {
                    this.germanWords.push(line.toLowerCase());
                });
                this.ready = true;
                document.getElementById("generateButton").disabled = false;
                console.log("Ready to generate!");
            })
            .catch(error => {
                console.error("Error loading German words:", error);
            });
    }
}

const passwordGenerator = new PasswordGenerator();

function generatePassword() {
    let numPasswords = document.getElementById("numPasswords").value;
    let passwords = [];
    let testPassword = passwordGenerator.generatePassword();

    if (!testPassword) {
        console.error("Error generating password, waiting for password generator to be ready...");
        return;
    }
    passwords.push(testPassword);

    for (let i = 1; i < numPasswords; i++) {
        const password = passwordGenerator.generatePassword();

        if (!password) {
            i--;
            continue;
        }
        passwords.push(password);
    }
    document.getElementById("password").value = passwords.map(password => `${password.length}: ${password}`).join('\n');
}