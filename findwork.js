
const filters = {
  keyword: '',
  location: ''
}

const renderFindwork = function (findworks, filter){
  const findByLocation = findworks.filter(function (findwork){
    return findwork.location.toLowerCase().includes(filter.location.toLowerCase())
  })

  document.querySelector('#search-result').innerHTML = " ";


  console.log(findByLocation);

  findByLocation.forEach(function (findwork){
    const findWorkEl = document.createElement('p')
    findWorkEl.textContent = `Title: ${findwork.title} .... Location: ${findwork.location}`
    document.querySelector('#search-result').appendChild(findWorkEl)
  })
}

findworks.forEach(function(findwork){
  const workEl = document.createElement('p')
  workEl.textContent = `Title: ${findwork.title} .... Location: ${findwork.location}`
  document.querySelector('#search-result').appendChild(workEl)
})

document.querySelector('#searchByLocation').addEventListener('input', function (e){
  filters.location = e.target.value;
  renderFindwork(findworks, filters)
})
//searchByKeyword
