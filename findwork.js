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

  document.querySelector('#search-result-title').innerHTML = " ";
  document.querySelector('#search-result-Location').innerHTML = " ";
  document.querySelector('#search-result-description').innerHTML = " ";
  document.querySelector('#search-result-type').innerHTML = " ";


  console.log(findByKeywork);

  // Generate Job list to DOM
  findByKeywork.forEach(function (findwork){
    const findWorkTitle = document.createElement('h3')
    const findWorkLocation = document.createElement('h6')

    const findWorkDescription = document.createElement('p')
    const findWorkType = document.createElement('em')

    findWorkTitle.textContent = findwork.title
    findWorkLocation.textContent = findwork.location
    findWorkDescription.textContent = `Description: ${findwork.description}`
    findWorkType.textContent = `Type: ${findwork.type}`

    const title = document.querySelector('#search-result-title')
    const fragment = document.createDocumentFragment();
    fragment.appendChild(findWorkTitle);
    fragment.appendChild(findWorkLocation);
    fragment.appendChild(findWorkDescription);
    fragment.appendChild(findWorkType);
    title.appendChild(fragment);
  })
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
