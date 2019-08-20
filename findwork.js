
const filters = {
  keyword: '',
  location: ''
}

// Show Full Job
function showFullJobdescription(id = '315c81c0-bb80-4991-973d-1fec6f190543'){
  const work = findworks.find(function(findwork){
    return findwork.id === id
  })
  const result = `
        <div>
          <h3><strong>${work.title}</strong></h3>
          <h4>${work.location}</h4>
          <p>${work.type}</p>
          <p>${work.description}</p>
        </div>

  `
  document.querySelector('#showFullJob').innerHTML = result;

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

  let result ='';
  // Generate Job list to DOM
  findByKeywork.forEach(function (findwork){
    result += `
    <div onclick="showFullJobdescription('${findwork.id}')">
      <div class="search-job-result">
        <h5><strong>${findwork.title}</strong></h5>
        <h6>${findwork.location}</h6>
        <p>${findwork.description}</p>
      </div>
    </div>
    `;


  })

  document.querySelector('#search-result').innerHTML = result;
}

// Show Default Job list when initial start
renderFindwork(findworks, filters)

showFullJobdescription(id = '315c81c0-bb80-4991-973d-1fec6f190543')

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
  const id = uuidv4();
  findworks.unshift({
    id: id,
    title: e.target.elements.title.value,
    location: e.target.elements.location.value,
    description: e.target.elements.description.value,
    type: e.target.elements.type.value
  })
  document.querySelector("#post-job").style.display = "none"
  renderFindwork(findworks, filters)
})
