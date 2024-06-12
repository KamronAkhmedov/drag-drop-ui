const dropArea = document.querySelector('.drag-area');
const dragText = document.querySelector('.header');

let button = dropArea.querySelector('.button');
let input = dropArea.querySelector('input');

let file;

button.onclick = () => {
  input.click()
}

// when browse 
input.addEventListener('change', function () {
  file = this.files[0];
  dropArea.classList.add('active')
  displayFile()
})

// when file is inside drah area 
dropArea.addEventListener('dragover', (event) => {
  event.preventDefault()
  dropArea.classList.add('active')
  dragText.textContent = 'Release to Upload'

  // console.log('file is inside the drag area');
})

// when file leave the drag area 
dropArea.addEventListener('dragleave', () => {
  dropArea.classList.remove('active')
  dragText.textContent = 'Drag & Drop'

  // console.log('File left the drag area');
})

// file when dropped 
dropArea.addEventListener('drop', (event) => {
  event.preventDefault()
  // console.log('File is dropped in area');

  file = event.dataTransfer.files[0]
  // console.log(file);

  displayFile()
})

function displayFile() {
  let fileType = file.type
  // console.log(fileType);

  let validations = ['image/jpeg', 'image/jpg', 'image/png']

  if (validations.includes(fileType)) {
    // console.log('This is an image type');
    let fileReader = new FileReader()

    fileReader.readAsDataURL(file)

    fileReader.onload = () => {
      let fileURL = fileReader.result
      // console.log(fileURL);

      let imgTag = `<img src='${fileURL}' alt='image' />`
      dropArea.innerHTML = imgTag
    }
  } else {
    alert('This is not an Image File')
    dropArea.classList.remove('active')
  }
}