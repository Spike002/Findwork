
const filters = {
  keyword: '',
  location: ''
}

const renderFindwork = function (findworks, filter){
  const findByLocation = findworks.filter(function (findwork){
    return findwork.location.toLowerCase().includes(filter.location.toLowerCase())
  })

  const findByKeywork = findByLocation.filter(function (findwork){
    return findwork.title.toLowerCase().includes(filter.keyword.toLowerCase())
  })

  document.querySelector('#search-result').innerHTML = " ";


  console.log(findByKeywork);

  findByKeywork.forEach(function (findwork){
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

document.querySelector('#searchByKeyword').addEventListener('input', function (e){
  filters.keyword = e.target.value;
  renderFindwork(findworks, filters)
})
document.querySelector("#post-job").style.display = "none"
//searchByKeyword
document.querySelector('#btn-post-job').addEventListener('click', function(){
  document.querySelector("#post-job").style.display = "block"
})

document.querySelector('#post-job').addEventListener('submit', function(e){
  e.preventDefault()
  findworks.push({
    title: e.target.elements.title.value,
    location: e.target.elements.location.value,
    decription: e.target.elements.decription.value,
    type: e.target.elements.type.value
  })
  document.querySelector("#post-job").style.display = "none"
  renderFindwork(findworks, filters)
})
