export const render = (status: string) => {
    if (status === "init" || status === "loading") {
        return false;
    } else if(status === "error"){
        return status;
    } else return true
};