// load category
const loadCategory = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategory(data.categories));
};

// display category
const displayCategory = (categories) => {
  categories.forEach((category) => {
    const categoryContainer = document.getElementById("category-container");

    categoryContainer.innerHTML += `
    
    <button id=${category.category_id} class="btn text-xl font-semibold">${category.category}</button>
    
    `;
  });
};

// load videos
const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos));
};

// display Videos
const displayVideos = (videos) => {
  console.log(videos);

  videos.forEach((video) => {
    const videosContainer = document.getElementById("videos-container");

    videosContainer.innerHTML += `
    
      <div class="card bg-base-100 w-full shadow-sm">
        <figure>
          <img
          class="h-64 w-full object-cover"
            src=${video.thumbnail}
            alt="Shoes"
          />
        </figure>
        <div class="p-4 flex flex-row items-center gap-5">
          

          <div>
          <img src=${
            video.authors[0].profile_picture
          } alt=""  class="h-11 w-11 object-cover rounded-full"/>
          </div>
          <div>
          <h2 class="text-2xl font-bold">${video.title}</h2>
         <div class="flex items-center gap-4">
          <p>${video.authors[0].profile_name}</p>
          <p>${
            video.authors[0].verified === true
              ? ` <img src="./assets/verified.svg" alt="" />`
              : ""
          }</p>
         </div>
          </div>
          
        </div>
      </div>
  
    
    `;
  });
};

loadCategory();
loadVideos();
