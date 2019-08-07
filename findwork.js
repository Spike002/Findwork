// initial declear findwork data
let findworks = [{
  title: 'Admin / Supervisory, Business Administration',
  location: 'Attleboro',
  description: 'To provide financial, Administrative and clerical support to staff and Manager of Area Program so that they can give primary focus to facilitating community development processes.',
  type: 'Full time'
  },
  {
    title: 'Finance, Business',
    location: 'Boston',
    description: 'To Provide assistance to Admin Unit and Administration office for efficient and smooth day to day adminsitration services such as courier service, asset management, kitchen and rest room supply, office.',
    type: 'Full time'
  },
  {
    title: 'Execute. / Management, Sales / Marketing',
    location: 'Boston',
    description: 'Sales Manager is responsible for the smooth functioning of the sales department',
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
