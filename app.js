let tblCountries=document.getElementById("tblcountry");
let tblBody=`
            <tr>
                <th><h1>Name</h1></th>
                <th><h1>Flag</h1></th>
            </tr>
            `;

     fetch("https://restcountries.com/v3.1/all").
     then((res)=>res.json())
     .then(data=>{
            data.forEach(element => {
                tblBody+=
                `
                    <tr>
                        <td>
                            <h3>${element.name.common}</h3>
                            <p>Official Name: ${element.name.official}</p>
                             <p>Flag Description:<br> ${element.flags.alt}</p>
                             <p>Region:${element.region}</p>
                        </td>
                        <td>
                            <img src="${element.flags.png}">
                           
                        </td>

                    </tr>
                `
                
            })
            tblCountries.innerHTML=tblBody;

     })


function searchByName(){

    let search=document.getElementById("txtInput").value;

    let flag=document.getElementById("flagImg");
    let name=document.getElementById("name");
    let officialName=document.getElementById("officialName");
    let description=document.getElementById("flagDescription");
    let region=document.getElementById("region");

    fetch(`https://restcountries.com/v3.1/name/${search}`)
    .then(res=>res.json())
    .then(data=>{
        data.forEach(obj=>{
            console.log(obj);
            flag.src=obj.flags.png;
            name.innerText=obj.name.common;
            officialName.innerText=obj.name.official;
            description.innerText=obj.flags.alt
            region.innerText=obj.region;
        })
    })
}