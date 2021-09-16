var button=document.querySelector("#btn-translate");
var text=document.querySelector("#text-input");
// creating variable to original url
var urlSelection="https://api.funtranslations.com/translate/minion.json";

// attaching text with url
function createApi(input_given)
{
  return urlSelection+"?"+"text="+input_given;
}

// function for error handling
function errorHandling(error)
{
  console.log("Error"+error);
  alert("Something went wrong!.Please try again later.")
}
// addEventListener with anonymous function call
button.addEventListener("click",function(){
  // just fetching API and handling the error while fetching api
  fetch(createApi(text.value))
  .then(response=>response.json())
  .then(json=>{
    var translatedText=json.contents.translated;
    document.querySelector("#output").innerText=translatedText;
  })
  .catch(errorHandling)
})
