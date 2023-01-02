// to aaccess/load some data from the localStorage
function loadData(key){
    try{
        let temp = localStorage.getItem(key)
        temp = JSON.parse(temp)
        return temp
    }catch(e){
        return undefined
    }
}
// to save some data in the local storage
function saveData(key,data){
    localStorage.setItem(key, JSON.stringify(data))
}
export {loadData,saveData}
