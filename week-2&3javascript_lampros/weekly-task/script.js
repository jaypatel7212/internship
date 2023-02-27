// fetch("https://dummyjson.com/users")
// .then((result)=>{
//     return result.json();
// }).then((dataT) => {
//     console.log(`data`,dataT.users);
//     let tableData="";
//     try {
//         dataT.users.map((values) => {
//             tableData +=`<tr>
//             <td>${values.firstName}</td>
//             <td>${values.latName}</td>
//             <td>${values.email}</td>
//             <td>${values.age}</td>
//             <td><img src="${values.image} width="50" height="50"/></td>
//             <td>${values.userName}</td>
//             <td>${values.password}</td>
//             <td><button onclick="delete_row(this)">Delete</button></td>
//             <td><button onclick="update_data(this)">Update</button></td>`
//         });
//         document.getElementById("table_body").innerHTML=tableData;
//     }
//     catch(error) {
//         console.log("Error",error);
//     }
//     });

//     function update_data(e){
            
//     }


//     function delete_row(e){
//         e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
//     }

fetch('https://dummyjson.com/users')
.then((data) =>{
    return data.json();
}).then((objectData) =>{
    console.log(objectData);
    const objectArray = objectData.users;
    console.log(Array.isArray(objectArray));
    let userData = "";
    // Object.keys(objectArray);
    objectArray.map((values, index) =>{
        console.log(values);
        console.log(index);
        userData += `<tr>
        <td hidden>${values.id}</td>
        <td id="fn[${index}]">${values.firstName}</td>
        <td id="ln[${index}]">${values.lastName}</tdd=>
        <td>${values.email}</td>
        <td>${values.age}</td>
        <td><img width="50" height="50" src="${values.image}"/></td>
        <td>${values.username}</td>
        <td>${values.password}</td>
        <td><button type='button' style="background-color:white" onclick="productUpdate(this)" class='btn btn-default'>Update</td>
        <td><button type='button' style="background-color:yellow" onclick="productDelete(this)" class='btn btn-default'>Delete</td>
    </tr>` 
    });
    document.getElementById("table_body").innerHTML=userData;    
})  


function productDelete(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}


function productUpdate(btn) {
        var x = document.getElementById("updatePop");
        if (x.style.display === "none") {
          x.style.display = "block";
        } 
        else {
          x.style.display = "none";
        }
        let row = btn.parentNode.parentNode;
        var id = row.cells[0].innerHTML;
        var firstname = row.cells[1].innerHTML;
        var lastname = row.cells[2].innerHTML;
        // console.log(ans);
        document.getElementById('fname').value=firstname;        
        document.getElementById('lname').value=lastname;
        document.getElementById('id').value=id; 

        let sb = document.getElementById("submitbtn");
        sb.onclick = function(){

            const fm = document.getElementById("formData");
            let uid = fm.elements[0].value;
            // alert(uid);

            let updatedFirstName = document.getElementById('fname').value;
            let updatedLastName = document.getElementById('lname').value;
            console.log(updatedFirstName);

            fetch('https://dummyjson.com/users/'+fm.elements[0].value, {
                method: 'PUT', /* or PATCH */
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                firstName: updatedFirstName,
                lastName: updatedLastName
            })
            })
            .then(res => res.json())
            .then(console.log);
            // console.log(document.getElementById(`fn[${uid}]`));
            // document.getElementById(`fn[${uid-1}]`).innerText = updatedFirstName;
            // document.getElementById(`ln[${uid-1}]`).innerText = updatedLastName;
            // // .then(console.log);  
            // var x = document.getElementById("updatePop");
            // if (x.style.display !== "none") {
            //     x.style.display = "none";
            // }

        }
}

