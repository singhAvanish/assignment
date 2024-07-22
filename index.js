// import styles from './style.css';


  document.addEventListener('DOMContentLoaded', () => {
    const sections = {
        images: [
            {
                id: 1,
                title: 'Events',
                images: [
                    'images/image1.jpeg', 'images/image2.jpeg', 'images/image3.png', 'images/image4.jpg', 'images/image5.jpeg',
                    'images/image5.jpeg', 'images/image5.jpeg', 'image8.jpg', 'image9.jpg', 'image10.jpg',
                    'image11.jpg', 'image12.jpg', 'image13.jpg', 'image14.jpg', 'image15.jpg'
                ]
            },
            {
                id: 2,
                title: 'Office Life',
                images: [
                    'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg',
                    'image6.jpg', 'image7.jpg', 'image8.jpg', 'image9.jpg', 'image10.jpg',
                    'image11.jpg', 'image12.jpg', 'image13.jpg', 'image14.jpg', 'image15.jpg'
                ]
            },
            {
                id: 3,
                title: 'Projects',
                images: [
                    'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg',
                    'image6.jpg', 'image7.jpg', 'image8.jpg', 'image9.jpg', 'image10.jpg',
                    'image11.jpg', 'image12.jpg', 'image13.jpg', 'image14.jpg', 'image15.jpg'
                ]
            }
        ],
        videos: [
            {
                id: 4,
                title: 'Album-01',
                images: [
                    'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg',
                    'image6.jpg', 'image7.jpg', 'image8.jpg', 'image9.jpg', 'image10.jpg',
                    'image11.jpg', 'image12.jpg', 'image13.jpg', 'image14.jpg', 'image15.jpg'
                ]
            },
            {
                id: 5,
                title: 'Album-02',
                images: [
                    'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg',
                    'image6.jpg', 'image7.jpg', 'image8.jpg', 'image9.jpg', 'image10.jpg',
                    'image11.jpg', 'image12.jpg', 'image13.jpg', 'image14.jpg', 'image15.jpg'
                ]
            },
            {
                id: 6,
                title: 'Album-03',
                images: [
                    'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg',
                    'image6.jpg', 'image7.jpg', 'image8.jpg', 'image9.jpg', 'image10.jpg',
                    'image11.jpg', 'image12.jpg', 'image13.jpg', 'image14.jpg', 'image15.jpg'
                ]
            },
            {
                id: 7,
                title: 'Album-04',
                images: [
                    'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg',
                    'image6.jpg', 'image7.jpg', 'image8.jpg', 'image9.jpg', 'image10.jpg',
                    'image11.jpg', 'image12.jpg', 'image13.jpg', 'image14.jpg', 'image15.jpg'
                ]
            }
        ]
    };

    const imagesList = document.getElementById('images-list');
    const videosList = document.getElementById('videos-list');
    const sectionHeading = document.getElementById('section-heading');
    const imageContainer = document.getElementById('image-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const pageNumbersContainer = document.getElementById('page-numbers');
    let currentPage = 1;
    const imagesPerPage = 6;
    let totalPages = 0;
    let currentImages = [];
    let previouslyClickedSectionItem = null;
    const topArrow=document.getElementById('pageTop');


    const renderSectionsList = () => {
        const addSectionsToList = (list, sections) => {
            sections.forEach(section => {
                const sectionItem = document.createElement('li');
               
                sectionItem.textContent = section.title;
                
                sectionItem.addEventListener('click', () => {
                    displaySection(section);
                    if (previouslyClickedSectionItem) {
                        console.log('Removing class from previous item:', previouslyClickedSectionItem);
                        previouslyClickedSectionItem.classList.remove('list-active');
                    } else {
                        console.log('previouslyClickedSectionItem is null or undefined');
                    }
                    
                    // Add the active class to the current item
                    sectionItem.classList.add('list-active');
                    console.log('Classes on current item:', sectionItem);
                
                    // Update the previously clicked item to the current item
                    previouslyClickedSectionItem = sectionItem;
                    
                   
                   
                });
                list.appendChild(sectionItem);
            });
        };

        addSectionsToList(imagesList, sections.images);
        addSectionsToList(videosList, sections.videos);
    };

    const displaySection = (section) => {
        sectionHeading.textContent = section.title;
        currentImages = section.images;
        currentPage = 1;
        totalPages = Math.ceil(currentImages.length / imagesPerPage);
        renderImages();
    };

    const renderImages = () => {
        imageContainer.innerHTML = '';
        const startIndex = (currentPage - 1) * imagesPerPage;
        const endIndex = startIndex + imagesPerPage;
        const imagesToDisplay = currentImages.slice(startIndex, endIndex);

        imagesToDisplay.forEach(imgSrc => {
            const img = document.createElement('img');
            img.src = imgSrc;
            imageContainer.appendChild(img);
        });

        updateControls();
    };

    const updateControls = () => {
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === totalPages;
        renderPageNumbers();
    };

let previousPageNumber = null;

const renderPageNumbers = () => {
    pageNumbersContainer.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        const pageNumber = document.createElement('span');
        pageNumber.textContent = i;
        if (i === currentPage) {
            pageNumber.classList.add('btn-active');
        }
        pageNumber.addEventListener('click', () => {
            currentPage = i;
            renderImages();
            if (previousPageNumber) {
                console.log('Removing class from previous item:', previousPageNumber);
                previousPageNumber.classList.remove('btn-active');
            } else {
                console.log('previousPageNumber is null or undefined');
            }
            
           
            pageNumber.classList.add('btn-active');
            
        
            
            previousPageNumber = pageNumber;
        });
        pageNumbersContainer.appendChild(pageNumber);
    }
};




    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderImages();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderImages();
        }
    });

    // Initial render of sections list
    renderSectionsList();
    
    // Display Section 1 by default
    if (sections.images.length > 0) {
        displaySection(sections.images[0]);
    }

    const sendPageTop=()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    }

    topArrow.addEventListener('click',()=>{
        sendPageTop();
    })

    


});





