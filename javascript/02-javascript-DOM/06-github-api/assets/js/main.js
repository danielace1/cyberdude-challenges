const profiles = document.getElementById("profiles");

const interns = [
  "esakki2104prsnl",
  "vk2401",
  "suriyamassmsd",
  "riyaz1000",
  "hema-venkat3",
  "yrd369",
  "mushkir",
  "bearcin46",
  "dineshdevelope",
  "jeya-rosini",
  "swethadsalvatore",
  "mshajid",
  "muthuakalya",
  "vedhatech002",
  "danielace1",
  "sharif-22",
  "gayathrihg",
  "kishorekumar-kp",
  "muthukumarimoorthi",
];

// const accessToken =
// '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'

interns.forEach((intern) => {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const responseData = JSON.parse(this.responseText);
      console.log(responseData);
      const profileUrl = responseData.html_url;
      const repostries=`${profileUrl}?tab=repositories`
      
      profiles.innerHTML += `
      <div class="text-center py-5 bg-zinc-700 rounded">
        <a href="${profileUrl}" target='_blank' class='grid gap-3'>
          <div class="flex justify-center items-center">
            <img src="${responseData.avatar_url}" alt="Profile Image" class="w-28  h-auto object-cover rounded-full"/>
          </div>
          <div class="grid gap-2">
            <div class=''><h1 class='font-semibold text-xl'>${responseData.name}</h1></div>
            <div class='flex justify-center items-center gap-y-5 gap-x-3 bg-zinc-900'>
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" class='fill-current'><path  d="M12.026 2a9.975 9.975 0 0 0-3.153 19.439c.5.09.679-.217.679-.481c0-.237-.008-.865-.011-1.7c-2.775.6-3.361-1.338-3.361-1.338a2.635 2.635 0 0 0-1.107-1.459c-.9-.619.069-.605.069-.605c.64.088 1.205.467 1.527 1.028a2.124 2.124 0 0 0 2.9.829c.046-.506.272-.979.635-1.334c-2.214-.251-4.542-1.107-4.542-4.93a3.865 3.865 0 0 1 1.026-2.671a3.588 3.588 0 0 1 .1-2.64s.837-.269 2.742 1.021a9.439 9.439 0 0 1 4.992 0c1.906-1.291 2.742-1.021 2.742-1.021c.37.835.405 1.78.1 2.64a3.84 3.84 0 0 1 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922c.48.49.725 1.162.675 1.846c0 1.334-.012 2.41-.012 2.737c0 .267.178.577.687.479A9.975 9.975 0 0 0 12.026 2Z"/></svg> <span class='px-3'>${responseData.login}</span>
            </div>
          </div>
            <div>${responseData.followers} Followers</div>
            <div class='flex justify-center  items-center gap-y-3 gap-x-3'>
              <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" class='fill-current' viewBox="0 0 24 24">
                <path d="m8 23.01l2.5-1.5l2.5 1.5V19H8zM8 5h2v2H8zm0 5h2v2H8zm0 5.01h2v2H8z"/>
                <path fill="currentColor" d="M18.36 1.05A1.47 1.47 0 0 0 18 1H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2V3h12v16h-3v2h3a2 2 0 0 0 2-2V3a2 2 0 0 0-1.64-1.95"/>
              </svg>
              <span class=''>Repositories: ${responseData.public_repos}</span>
            </div>
            <div class='flex justify-center items-center rounded-full bg-zinc-900'>
          <a href="${repostries}" target='_blank'><button class='px-5 py-2'>View All Repostries</button></a>
          </div>
        </a>
      </div>`;
    }
  };

  xhr.open("GET", `https://api.github.com/users/${intern}`);
  // xhr.setRequestHeader("Authorization", `Bearer ${accessToken}`);
  xhr.send();
});

