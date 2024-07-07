let tblCountries=document.getElementById("tblcountry");
let tblBody=`
            <tr>
                <th>Name</th>
                <th>Flag</th>
            </tr>
            `;

     fetch("https://restcountries.com/v3.1/all").
     then((res)=>res.json())
     .then(data=>{
            data.forEach(element => {
                tblBody+=
                `
                    <tr>
                        <td>${element.name.common}</td>
                        <td>${element.flag}</td>
                    </tr>
                `
                
            })
            tblCountries.innerHTML=tblBody;

     })