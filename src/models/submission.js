
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
    }
}

export const validateFormData = (formData) => {
    const errors = {}

    const submission = new Submission()

    // Is the Submission class even needed?

    // TODO: Actual validation
    submission.name = formData.name
    submission.phoneNumber = formData.phoneNumber
    submission.email = formData.email
    submission.location.country = formData.country
    submission.location.city = formData.city
    submission.availabillity = formData.availabillity
    submission.preferredTasks = formData.preferredTasks
    submission.experiences = formData.experiences

    const hasErrors = Object.keys(errors).length > 0 ? true : false

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
