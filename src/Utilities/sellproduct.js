export const sellProductValidate = (name,category,price,location)=>{

    const validName = /^[a-zA-Z ]{2,30}\d*$/.test(name);

    const validCategory = /^[a-zA-Z ]{2,30}$/.test(category);
    const validPrice = /^0$|^[1-9]\d*$/.test(price)
    const validLocation = /^[a-zA-Z ]{2,30}$/.test(location);

    if(!validName || !name.trim()) return "Please Enter a valid name"
    if(!validCategory || !name.trim()) return "Please Enter a valid category"
    if(!validPrice || !name.trim()) return "Please Enter a valid price"
    if(!validLocation || !name.trim()) return "Please Enter a valid location"

    return null;
}