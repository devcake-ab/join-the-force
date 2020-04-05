
export default class Submission {
    constructor() {
        this.name = ""
        this.phoneNumber = ""
        this.email = ""
        this.availabillity = ""
        this.preferredTasks = ""
        this.experiences = ""
        this.location = {
            city: "",
            country: "",
        }
        this.testsCompleted = ""
    }
}

class Error {
    constructor(title, description){
        this.title = title
        this.description = description
    }
}

const tests = [
    "Basic medical test",
    "Disease control",

]

export const validateFormData = (formData) => {
    const errors = []

    const submission = new Submission()

    // Placeholder random tests
    // TODO: Add actual test results
    const randomTestIndex = Math.floor(Math.random() * tests.length)

    // Is the Submission class even needed?

    // TODO: Actual validation
    !formData.name ? errors.push(new Error("No name", "You have to enter a name")) : submission.name = formData.name
    !formData.phoneNumber ? errors.push(new Error("No phone number", "Please enter a valid phone number")) : submission.phoneNumber = formData.phoneNumber
    !formData.email ? errors.push(new Error()) : submission.email = formData.email

    !formData.country ? errors.push(new Error("No country", "Please enter a valid country")) : submission.location.country = formData.country
    !formData.city ? errors.push(new Error("No city", "Please enter a valid city")) : submission.location.city = formData.city
    
    submission.availabillity = formData.availabillity ? formData.availabillity : ''
    submission.preferredTasks = formData.preferredTasks ? formData.preferredTasks : ''
    submission.experiences = formData.experiences ? formData.experiences : ''
    
    submission.testsCompleted = tests[randomTestIndex]
    
    
    const hasErrors = errors.length > 0

    return {
        errors: hasErrors ? errors : null,
        data: hasErrors ? null : submission
    }
}

// name: '',
// email: '',
// country: '',
// city: '',
// phoneNumber: '',
// availabillity: ''
// experiences: ''
// preferredTasks: ''
