const JOB_API_LINK = "https://fuzzy-space-pancake-pj95xq9r6ww7hr6v4-5001.app.github.dev/";

fetch(JOB_API_LINK).then(response=>{
    if(!response.ok)
        throw new Error("failed to fatch data");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#jobtable tbody");

    data.forEach(job=>{
        const row = document.createElement("tr");
        row.innerHTML=`
        <td>${job.id}</td>
        <td>${job.name}</td>
        <td>${job.email}</td>
        <td>${job.address}</td>
        `;
        tbody.appendChild(row);
    })

}).catch(err=>{
    console.log(err.message);
});