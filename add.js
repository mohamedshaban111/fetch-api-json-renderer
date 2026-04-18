

             //==== using Promise And XMLHTTPRequwst ===\\

// function getJson(link){
//     return new Promise(function(resolve,reject){
//         let request = new XMLHttpRequest();
//         request.onload = function(){
//             let Parent_Div = document.createElement("div");
//             Parent_Div.classList.add("userId");
//             if(request.status == 200 && request.readyState == 4){
//                 let Data = JSON.parse(request.responseText);
//                 for(let i=0;i<5;i++){
//                     let SonDiv = document.createElement("div");
//                 let header = document.createElement("h3");
//                 let headerText = document.createTextNode(Data[i].title);
//                 header.append(headerText);
//                 let parag = document.createElement("p");
//                 let paragText = document.createTextNode(Data[i].description);
//                 parag.append(paragText);
//                 SonDiv.append(header,parag);
//                 SonDiv.classList.add(Data[i].userId);
//                 Parent_Div.appendChild(SonDiv);
//                 }
//                 document.body.appendChild(Parent_Div);
//             }
//             else{
//                 reject ("No Data Found");
//             }
//         }
//         request.open("GET",link);
//         request.send();
//     })
// }
// getJson("./test.json");





            //===== using Fetch =====\\

function getData(link){
    return fetch(link)
    .then((http_resp)=>{
        console.log(http_resp);
        let pro = http_resp.json();        // already made retrive data and parse the string in object
        console.log(pro);
        return pro;
    })
        .then((object_Json)=>{
            console.log(object_Json);
            return object_Json;
        })
                .then((object_Json)=>{
            let Parent_Div = document.createElement("div");
            Parent_Div.classList.add("userId");
                for(let i=0;i<5;i++){
                let SonDiv = document.createElement("div");
                let header = document.createElement("h3");
                let headerText = document.createTextNode(object_Json[i].title);
                header.append(headerText);
                let parag = document.createElement("p");
                let paragText = document.createTextNode(object_Json[i].description);
                parag.append(paragText);
                SonDiv.append(header,parag);
                SonDiv.classList.add(object_Json[i].userId);
                Parent_Div.appendChild(SonDiv);
                }
                document.body.appendChild(Parent_Div);

                })
                    .catch((error)=>{
                        console.log(Error("  "+ error));
                    })
                        .finally(
                            console.log("Final")
                        )
}

getData("./test.json");