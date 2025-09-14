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
    
    <button onClick=loadVideosCategory(${category.category_id}) class="btn text-xl font-semibold">${category.category}</button>
    
    `;
  });
};

// load videos by category
const loadVideosCategory = (id) => {
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res) => res.json())
    .then((data) => displayByVideos(data.category));
};

// load videos
const loadVideos = (search = "") => {
  fetch(
    `https://openapi.programming-hero.com/api/phero-tube/videos?title=${search}`
  )
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos));
};

// time string
const timeCalculation = (time) => {
  const day = parseInt(time / 86400);

  let remainingSecond = time % 86400;

  const hour = parseInt(remainingSecond / 3600);

  remainingSecond = remainingSecond % 3600;

  const minute = parseInt(remainingSecond / 60);

  remainingSecond = remainingSecond % 60;

  return `${day} day ${hour} hour ${minute} minute ${remainingSecond}`;
};

// display Videos by category wise
const displayByVideos = (videos) => {
  const videosContainer = document.getElementById("videos-container");

  videosContainer.innerHTML = "";
  videosContainer.classList.remove("grid");
  if (videos.length == 0) {
    videosContainer.innerHTML = `<div class="flex items-center flex-col justify-center h-[60vh]">
    
   <img src="../assets/Icon.png" alt="" />
   <h1 class="text-5xl font-bold mt-5 text-center">Oops!! Sorry, There is no <br/> content here</h1>

    </div>`;
    return;
  } else {
    videosContainer.classList.add("grid");
  }

  videos.forEach((video) => {
    videosContainer.innerHTML += `
    
      <div class="card bg-base-100 w-full shadow-sm">
        <figure class="relative">
          <img
          class="h-64 w-full object-cover"
            src=${video.thumbnail}
            alt="Shoes"
          />

        ${
          video.others.posted_date?.length == 0
            ? ""
            : ` <span class="absolute text-base text-white bg-black px-2 py-1 rounded-lg bottom-2 right-2"> ${timeCalculation(
                video.others.posted_date
              )} </span>`
        }

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

// display Videos
const displayVideos = (videos) => {
  const videosContainer = document.getElementById("videos-container");

  videosContainer.innerHTML = "";
  videos.forEach((video) => {
    videosContainer.innerHTML += `
    
      <div class="card bg-base-100 w-full shadow-sm">
        <figure class="relative">
          <img
          class="h-64 w-full object-cover"
            src=${video.thumbnail}
            alt="Shoes"
          />

        ${
          video.others.posted_date?.length == 0
            ? ""
            : ` <span class="absolute text-base text-white bg-black px-2 py-1 rounded-lg bottom-2 right-2"> ${timeCalculation(
                video.others.posted_date
              )} </span>`
        }

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

// search
document.getElementById("search-text").addEventListener("keyup", (e) => {
  loadVideos(e.target.value);
});

loadCategory();

loadVideos();
