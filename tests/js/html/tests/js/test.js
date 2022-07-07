fetch('flowers.jpg')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    return response.blob();
  })
  .then(myBlob => {
    myImage.src = URL.createObjectURL(myBlob);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
  const myHeaders = new Headers();

  const myRequest = new Request('flowers.jpg', {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default',
  });
  
  fetch(myRequest)
    .then(response => response.blob())
    .then(myBlob => {
      myImage.src = URL.createObjectURL(myBlob);
    });
  