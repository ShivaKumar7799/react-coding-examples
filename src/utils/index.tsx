export const triggerErrorHandler = (error: any) => {
    console.log(error,"error boundary error")
    if(error.response.status === 500){
        return "Internal Server Error"
    } else if(error.response.status === 404){
        return "Not Found"
    } else {
        return "Application Crashed"
    }
}