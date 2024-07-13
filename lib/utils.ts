const getFieldData = (formData: { get: (arg0: any) => any; }, field: string) => formData.get(field);
const isValidString = (value: string) => typeof value === "string" && value.trim() !== "";


export const validateFormData = (formData: any) => {
    const senderEmail = getFieldData(formData, "senderEmail");
    const message = getFieldData(formData, "message");
    const senderName = getFieldData(formData, "senderName");

    if (!isValidString(senderEmail) || !isValidString(message) || !isValidString(senderName)) {
        return {
            error: "Missing required fields - Message, sender name, and sender email are required. Please try again."
        };
    }

    return { senderEmail, message, senderName };
};

export const getErrorMessage = (error: any) : string => {
    let errorMessage: string;
    if (error instanceof Error) {
        errorMessage = error.message;
    }
    else if (typeof error === "object" && error.hasOwnProperty("message")) {
        errorMessage = error.message;
    }
    else if (typeof error === "string") {
        errorMessage = error;
    }
    else {
        errorMessage = "An unexpected error occurred while sending the email."
    }
    return errorMessage;
}