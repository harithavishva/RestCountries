let request =new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload =function(){
let data =request.response
let result = JSON.parse(data)
result.forEach(element => {
console.log(`${element.name.common} ::${element.region} ::${element.subregion} :: ${element.population }`)
});
}