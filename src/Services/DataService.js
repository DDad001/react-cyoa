

async function getStories(){
    let res = await fetch('http://localhost:5014/Stories/GetAllStories');

if(!res.ok)
{
    const message =`An Error has Occured ${res.status}`
    throw new Error(message)
}
let data = await res.json();
console.log(data)

}
export default getStories;