
document.addEventListener('DOMContentLoaded', () => {
    const sections = {
        images: [
            {
                id: 1,
                title: 'Events',
                images: [
                    'images/image1.jpeg', 'images/image2.jpeg', 'images/image3.png', 'images/image4.jpg', 'images/image5.jpeg',
                    'images/image6.jpeg', 'images/image7.jpeg', 'images/image8.jpeg', 'images/image9.jpeg', 'images/image10.jpeg',
                    'images/image11.jpeg', 'images/image12.jpeg', 'images/image13.webp', 'images/image14.jpeg', 'images/image15.webp'
                ]
            },
            {
                id: 2,
                title: 'Office Life',
                images: [
                    'images/image15.webp', 'images/image2.jpeg', 'images/image3.png', 'images/image4.jpg', 'images/image5.jpeg',
                    'images/image6.jpeg', 'images/image7.jpeg', 'images/image8.jpeg', 'images/image9.jpeg', 'images/image10.jpeg',
                    'images/image11.jpeg', 'images/image12.jpeg', 'images/image13.webp', 'images/image14.jpeg', 'images/image1.jpeg'
                ]
            },
            {
                id: 3,
                title: 'Projects',
                images: [
                    'images/image7.jpeg', 'images/image2.jpeg', 'images/image3.png', 'images/image4.jpg', 'images/image5.jpeg',
                    'images/image6.jpeg', 'images/image1.jpeg', 'images/image8.jpeg', 'images/image9.jpeg', 'images/image10.jpeg',
                    'images/image11.jpeg', 'images/image12.jpeg', 'images/image13.webp', 'images/image14.jpeg', 'images/image15.webp'
                ]
            }
        ]
    };

    const section1 = {
        videos: [
            {
                id: 1,
                title: 'Album-01',
                videos: [
                    'https://www.youtube.com/embed/NIwR5XU4oJ8', 'https://www.youtube.com/embed/OnwQ2tkK2xQ', 'https://www.youtube.com/embed/TzHVIynI8c0', 'https://www.youtube.com/embed/DLX62G4lc44', 'https://www.youtube.com/embed/kJQP7kiw5Fk',
                    'https://www.youtube.com/embed/hY7m5jjJ9mM'
                ]
            },
            {
                id: 2,
                title: 'Album-02',
                videos: [
                    'https://www.youtube.com/embed/LXb3EKWsInQ', 'https://www.youtube.com/embed/3AtDnEC4zak', 'https://www.youtube.com/embed/fHI8X4OXluQ', 'https://www.youtube.com/embed/5qap5aO4i9A', 'https://www.youtube.com/embed/L_jWHffIx5E',
                    'https://www.youtube.com/embed/8ZcmTl_1ER8', 'https://www.youtube.com/embed/7wtfhZwyrcc', 'https://www.youtube.com/embed/60ItHLz5WEA', 'https://www.youtube.com/embed/1G4isv_Fylg', 'https://www.youtube.com/embed/VYOjWnS4cMY',
                    'https://www.youtube.com/embed/OPf0YbXqDm0', 'https://www.youtube.com/embed/PT2_F-1esPk', 'https://www.youtube.com/embed/hTWKbfoikeg', 'https://www.youtube.com/embed/eVTXPUF4Oz4', 'https://www.youtube.com/embed/2vjPBrBU-TM'
                ]
            },
            {
                id: 3,
                title: 'Album-03',
                videos: [
                    'https://www.youtube.com/embed/X8f5RgwYTDQ', 'https://www.youtube.com/embed/LsoLEjrDogU', 'https://www.youtube.com/embed/2Vv-BfVoq4g', 'https://www.youtube.com/embed/mWRsgZuwf_8', 'https://www.youtube.com/embed/RgKAFK5djSk',
                    'https://www.youtube.com/embed/AR8D2yqgQ1U', 'https://www.youtube.com/embed/o1tj2zJ2Wvg', 'https://www.youtube.com/embed/0KSOMA3QBU0', 'https://www.youtube.com/embed/kJQP7kiw5Fk', 'https://www.youtube.com/embed/2vjPBrBU-TM',
                    'https://www.youtube.com/embed/L_jWHffIx5E', 'https://www.youtube.com/embed/1G4isv_Fylg', 'https://www.youtube.com/embed/VYOjWnS4cMY', 'https://www.youtube.com/embed/PT2_F-1esPk', 'https://www.youtube.com/embed/3AtDnEC4zak'
                ]
            },
            {
                id: 4,
                title: 'Album-04',
                videos: [
                    'https://www.youtube.com/embed/RgKAFK5djSk', 'https://www.youtube.com/embed/TzHVIynI8c0', 'https://www.youtube.com/embed/DLX62G4lc44', 'https://www.youtube.com/embed/fHI8X4OXluQ', 'https://www.youtube.com/embed/hY7m5jjJ9mM',
                    'https://www.youtube.com/embed/X8f5RgwYTDQ', 'https://www.youtube.com/embed/8ZcmTl_1ER8', 'https://www.youtube.com/embed/7wtfhZwyrcc', 'https://www.youtube.com/embed/60ItHLz5WEA', 'https://www.youtube.com/embed/1G4isv_Fylg',
                    'https://www.youtube.com/embed/LsoLEjrDogU', 'https://www.youtube.com/embed/o1tj2zJ2Wvg', 'https://www.youtube.com/embed/0KSOMA3QBU0', 'https://www.youtube.com/embed/kJQP7kiw5Fk', 'https://www.youtube.com/embed/2vjPBrBU-TM'
                ]
            }
        ]
    };
    

    const imagesList = document.getElementById('images-list');
    const videosList = document.getElementById('videos-list');
    const sectionHeading = document.getElementById('section-heading');
    const imageContainer = document.getElementById('image-container');
    const videoContainer = document.getElementById('video-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const videoPrev=document.getElementById('videoPrev');
    const videoNext=document.getElementById('videoNext');
    const pageNumbersContainer = document.getElementById('page-numbers');
    let currentPage = 1;
    const imagesPerPage = 6;
    const videosPerPage = 3;
    let totalPages = 0;
    let currentImages = [];
    let currentVideos = [];
    let previouslyClickedSectionItem = null;
    const topArrow = document.getElementById('pageTop');

    const renderSectionsList = () => {
        const addSectionsToList = (list, sections) => {
            sections.forEach(section => {
                const sectionItem = document.createElement('li');
                sectionItem.textContent = section.title;

                sectionItem.addEventListener('click', () => {
                    if (list === imagesList) {
                        displaySection(section);
                    } else if (list === videosList) {
                        displaySection1(section);
                        
                    }
                    if (previouslyClickedSectionItem) {
                        previouslyClickedSectionItem.classList.remove('list-active');
                    }
                    sectionItem.classList.add('list-active');
                    previouslyClickedSectionItem = sectionItem;
                });

                list.appendChild(sectionItem);
            });
        };

        addSectionsToList(imagesList, sections.images);
        addSectionsToList(videosList, section1.videos);
    };

    const displaySection = (section) => {
        sectionHeading.textContent = section.title;
        currentImages = section.images;
        currentVideos = [];
        document.getElementById('video-container').style.display = 'none';
        document.getElementById('image-container').style.display = 'flex';
        videoPrev.style.display='none';
        videoNext.style.display='none';

        currentPage = 1;
        totalPages = Math.ceil(currentImages.length / imagesPerPage);
        renderImages();
    };

    const displaySection1 = (section) => {
        sectionHeading.textContent = section.title;
        currentVideos = section.videos;
        currentImages = [];
        document.getElementById('image-container').style.display = 'none';
        document.getElementById('video-container').style.display = 'flex';
        videoPrev.style.display='flex';
        videoNext.style.display='flex';
        currentPage = 1;
        totalPages = Math.ceil(currentVideos.length / videosPerPage);
        renderVideos();
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

    const renderVideos = () => {
        videoContainer.innerHTML = '';
        const startIndex = (currentPage - 1) * videosPerPage;
        const endIndex = startIndex + videosPerPage;
        const videosToDisplay = currentVideos.slice(startIndex, endIndex);

        videosToDisplay.forEach(videoSrc => {
            const video = document.createElement('iframe');
            video.src = videoSrc;
            video.controls = true;
            videoContainer.appendChild(video);
        });

        updateControls();
    };

    const updateControls = () => {
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === totalPages;
        videoNext.disabled=currentPage==totalPages;
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
                if (currentImages.length > 0) {
                    renderImages();
                } else if (currentVideos.length > 0) {
                    renderVideos();
                }
                if (previousPageNumber) {
                    previousPageNumber.classList.remove('btn-active');
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
            if (currentImages.length > 0) {
                renderImages();
            } else if (currentVideos.length > 0) {
                renderVideos();
            }
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            if (currentImages.length > 0) {
                renderImages();
            } else if (currentVideos.length > 0) {
                renderVideos();
            }
        }
    });
    videoPrev.addEventListener('click',()=>{
        if(currentPage > 1){
            currentPage--;
            renderVideos();
        }
    })
    videoNext.addEventListener('click',()=>{
        if (currentPage < totalPages) {
            currentPage++;
            renderVideos();
           
    }})

    renderSectionsList();
    displaySection(sections.images[0]); 
});






