// initial declear findwork data
let findworks = [{
  title: 'Calibration Technician',
  location: 'Norton, MA',
  description: 'The Calibration Technician I reports directly to the Team Leader, Manager, or Director depending on the organizational structure. This is a full time, hourly position. Twenty five to Fifty percent travel may be required based on project and client needs.',
  type: 'Full time'
  },
  {
    title: 'Customer Service Assistant',
    location: 'Attleboro, MA',
    description: 'We are currently seeking new candidates in our online market research department in Attleboro, Massachusetts - MA. We are growing at a rapid rate and are looking for high-energy and passionate people who enjoy helping people and a chance to work from the comfort of your home.',
    type: 'Full time'
  },
  {
    title: 'Residential Support Staff',
    location: 'Boston',
    description: 'Our mission is to teach, support, and empower people with developmental disabilities and their families to live meaningful lives of their choice. Our vision is a world where individual differences are appreciated and celebrated, and where everyone contributes.',
    type: 'Part time'
    }]

const filters = {
  keyword: '',
  location: ''
}


// filter job list by location and keyword
const renderFindwork = function (findworks, filter){
  const findByLocation = findworks.filter(function (findwork){
    return findwork.location.toLowerCase().includes(filter.location.toLowerCase())
  })

  const findByKeywork = findByLocation.filter(function (findwork){
    return findwork.title.toLowerCase().includes(filter.keyword.toLowerCase())
  })
  document.querySelector('#search-result').innerHTML = " ";


  console.log(findByKeywork);
  let result ='';
  // Generate Job list to DOM
  findByKeywork.forEach(function (findwork){
    result += `
    <div class="card">
      <div class="card-body">
        <h5 id="search-result-title" class="card-title"><strong>${findwork.title}</strong></h5>
        <h6 id="search-result-Location" class="card-subtitle mb-2 text-muted">${findwork.location}</h6>
        <p id="search-result-description">${findwork.description}</p>
        <p id="search-result-type">${findwork.type}</p>
      </div>
    </div>
    `;


  })

  document.querySelector('#search-result').innerHTML = result;
}

// Show Default Job list when initial start
renderFindwork(findworks, filters)

// Search by location
document.querySelector('#searchByLocation').addEventListener('input', function (e){
  filters.location = e.target.value;
  renderFindwork(findworks, filters)
})

// Search by keyword
document.querySelector('#searchByKeyword').addEventListener('input', function (e){
  filters.keyword = e.target.value;
  renderFindwork(findworks, filters)
})


document.querySelector("#post-job").style.display = "none"

document.querySelector('#btn-post-job').addEventListener('click', function(){
document.querySelector("#post-job").style.display = "block"
})


// Post Job query
document.querySelector('#post-job').addEventListener('submit', function(e){
  e.preventDefault()
  findworks.push({
    title: e.target.elements.title.value,
    location: e.target.elements.location.value,
    description: e.target.elements.description.value,
    type: e.target.elements.type.value
  })
  document.querySelector("#post-job").style.display = "none"
  renderFindwork(findworks, filters)
})
