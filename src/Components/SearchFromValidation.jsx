export default function SearchFromValidation (inputFrom) {
    const searchFromError ={};

    if(inputFrom.Date === ' '){
        searchFromError.Date = 'Date is required *';
    }
    if(inputFrom.From === ' '){
        searchFromError.From = 'From is required *';
    } 
    if(inputFrom.To === ' '){
        searchFromError.To = 'To is required *';
    } 

    return searchFromError;
}