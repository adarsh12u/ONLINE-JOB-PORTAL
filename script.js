let url = "https://devitjobs.us/api/jobsLight"

let response = fetch(url)
response.then((r) => {
  return r.json()
}).then((jobs) => {
  console.log(jobs)
  ihtml = ""
  for (let item in jobs) {


    ihtml += `
      <div class="card " style="width: 16rem;margin:8px;box-shadow:10px 5px 5px grey">
      <img src="https://jsginc.com/wp-content/uploads/2018/10/bigstock-170353778.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title"> ${jobs[item].name} </h5>
        
        <p class="card-text"> <b> ${jobs[item].companyType} </b> based company
        Situted in <b>${jobs[item].actualCity}</b> Required Technical Skills <b> ${jobs[item].techCategory} </b>
        <p><b>Salary </b>${jobs[item].annualSalaryFrom} to ${jobs[item].annualSalaryTo}

        </p>
</p>
      
        <a href="${jobs[item].redirectJobUrl}
" class="btn btn-primary">Apply</a>
      </div>
    </div>
  `


    cardcontainer.innerHTML = ihtml
  }


  // console.log(jobs[0])
  // console.log(card[0])


  searchbox.onkeyup = function() {

    // alert("hello")
    // console.log(document.getElementsByClassName("card")[0])
    let fitem =
      document.getElementById("searchbox").value.toUpperCase();

    for (let item = 0; item < jobs.length; item++) {
      let name = jobs[item].name
      let check = name.toUpperCase()
      if (check.indexOf(fitem) > -1) {
        let d = document.getElementsByClassName("card")[item]
        d.style.display = "";
        // console.log(d)
      }
      else {
        // console.log("not")
        let f = document.getElementsByClassName("card")[item]
        f.style.display = "none"
      }

    }
  }

})







/*   */