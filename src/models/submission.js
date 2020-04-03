
export default class Submission {
    constructor(name, phoneNumber) {
        this.name = name
        this.phoneNumber = phoneNumber
    }

    sayhello() {
        console.log(this.name, this.phoneNumber)
    }
}
