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
        <div class="card-body flex flex-row items-center gap-5">
          <img src=${video.authors[0].profile_picture} alt=""  class="h-16 w-16 object-cover rounded-full"/>
          <h2 class="text-2xl font-bold">${video.title}</h2>
        </div>
      </div>
  
    
    `;
  });
};

loadCategory();
loadVideos();
