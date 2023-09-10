const Documenteddatacontainer = document.getElementById('Datacontainer');
const btn = document.getElementById('btnDoc');
Admission_document = () => {
    // Path to the 'document.txt' file
    const filePath = 'document.txt';
    // Perform an HTTP GET request to load the file contents
    fetch(filePath)
    .then(response => {
        if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(fileContents => {
            // Display the file contents in the 'Datacontainer' element
            const Documenteddatacontainer = document.getElementById('Datacontainer');
            Documenteddatacontainer.innerText = fileContents;
            if(Documenteddatacontainer.style.display === 'none' || Documenteddatacontainer.style.display === '')
            {
                Documenteddatacontainer.style.display = 'block';
            }
            else
            {
                Documenteddatacontainer.style.display = 'none';
            }
        })
        .catch(error => {
            console.error('Error loading file:', error);
        });
};

video = document.querySelector('video');

btn.addEventListener('click',Admission_document);

const virdatacontainer = document.getElementById('Datacontainer');
const btnvir = document.getElementById('btnvir');

Admission_virtual = () => {
    const data = "Admission Process (Virtual)";
    // virdatacontainer.innerText = data;
    let virtualVideo = document.querySelector('video');
    if (virtualVideo.style.display === 'none') {
        virtualVideo.style.display = 'block';
        virtualVideo.play(); // Start playing the video when shown
    } else {
        virtualVideo.style.display = 'none';
        virtualVideo.pause(); // Pause the video when hidden
    }
}

btnvir.addEventListener('click',Admission_virtual);