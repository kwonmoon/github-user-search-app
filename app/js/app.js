const bodyClass = document.querySelector("body");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

const schemeButton = document.querySelector(".header__button");
const buttonSpan = document.querySelector(".header__button__span");
const buttonSvg = document.querySelector(".header__button__svg");
const moon = '<path fill="#697C9A" fill-rule="nonzero" d="M19.513 11.397a.701.701 0 00-.588.128 7.496 7.496 0 01-2.276 1.336 7.101 7.101 0 01-2.583.462 7.505 7.505 0 01-5.32-2.209 7.568 7.568 0 01-2.199-5.342c0-.873.154-1.72.41-2.49a6.904 6.904 0 011.227-2.21.657.657 0 00-.102-.924.701.701 0 00-.589-.128C5.32.61 3.427 1.92 2.072 3.666A10.158 10.158 0 000 9.83c0 2.8 1.125 5.342 2.967 7.19a10.025 10.025 0 007.16 2.98c2.353 0 4.527-.822 6.266-2.183a10.13 10.13 0 003.58-5.624.623.623 0 00-.46-.796z"/>';
const sun = '<path fill="#FFF" fill-rule="nonzero" d="M13.545 6.455c-.9-.9-2.17-1.481-3.545-1.481a4.934 4.934 0 00-3.545 1.481c-.9.9-1.481 2.17-1.481 3.545 0 1.376.582 2.646 1.481 3.545.9.9 2.17 1.481 3.545 1.481a4.934 4.934 0 003.545-1.481c.9-.9 1.481-2.17 1.481-3.545a4.934 4.934 0 00-1.481-3.545zM10 3.413a.7.7 0 00.688-.688V.688A.7.7 0 0010 0a.7.7 0 00-.688.688v2.037a.7.7 0 00.688.688zM15.635 5.344l1.455-1.455a.67.67 0 000-.952.67.67 0 00-.952 0l-1.455 1.455a.67.67 0 000 .952c.238.264.66.264.952 0zM19.312 9.312h-2.037a.7.7 0 00-.688.688.7.7 0 00.688.688h2.037A.7.7 0 0020 10a.7.7 0 00-.688-.688zM15.608 14.656a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455a.67.67 0 00.952 0 .67.67 0 000-.952l-1.455-1.455zM10 16.587a.7.7 0 00-.688.688v2.037A.7.7 0 0010 20a.7.7 0 00.688-.688v-2.037a.7.7 0 00-.688-.688zM4.365 14.656L2.91 16.111a.67.67 0 000 .952.67.67 0 00.952 0l1.455-1.455a.67.67 0 000-.952c-.238-.264-.66-.264-.952 0zM3.413 10a.7.7 0 00-.688-.688H.688A.7.7 0 000 10a.7.7 0 00.688.688h2.037A.7.7 0 003.413 10zM4.365 5.344a.67.67 0 00.952 0 .67.67 0 000-.952L3.862 2.937a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455z"/></g>';

const search = document.querySelector(".search");
const searchInput = document.querySelector(".search__form__input");
const searchButton = document.querySelector(".search__form__button");

const info = document.querySelector(".info");
const infoName = document.querySelector(".info__header__name");
const infoDate = document.querySelector(".info__header__date");
const infoBio = document.querySelector(".info__details__bio");
const infoFollowers = document.querySelector(".info__details__followers");
const infoSocial = document.querySelector(".info__details__social");
const infoSvg = document.querySelectorAll(".info__details__social__svg");

const processDarkTheme = () => {
   // body
   bodyClass.classList.remove("body__light");
   bodyClass.classList.add("body__dark");

   // header
   schemeButton.classList.remove("header__button__light");
   schemeButton.classList.add("header__button__dark");
   buttonSpan.textContent = "light";
   buttonSvg.innerHTML = sun;

   // search
   search.classList.remove("search__light");
   search.classList.add("search__dark");
   searchInput.classList.remove("search__form__input__light");
   searchInput.classList.add("search__form__input__dark");

   // info
   info.classList.remove("info__light");
   info.classList.add("info__dark");
   infoName.classList.remove("info__header__name__light");
   infoName.classList.add("info__header__name__dark");
   infoDate.classList.remove("info__header__date__light");
   infoDate.classList.add("info__header__date__dark");
   infoBio.classList.remove("info__details__bio__light");
   infoBio.classList.add("info__details__bio__dark");
   infoFollowers.classList.remove("info__details__followers__light");
   infoFollowers.classList.add("info__details__followers__dark");
   infoSocial.classList.remove("info__details__social__light");
   infoSocial.classList.add("info__details__social__dark");

   infoSvg.forEach(svg => {
      svg.classList.remove("info__details__social__svg__light");
      svg.classList.add("info__details__social__svg__dark");
   });
};

const processLightTheme = () => {
   // body
   bodyClass.classList.remove("body__dark");
   bodyClass.classList.add("body__light");

   // header
   schemeButton.classList.remove("header__button__dark");
   schemeButton.classList.add("header__button__light");  
   buttonSpan.textContent = "dark";
   buttonSvg.innerHTML = moon;  
   
   // search
   search.classList.remove("search__dark");
   search.classList.add("search__light");
   searchInput.classList.remove("search__form__input__dark");
   searchInput.classList.add("search__form__input__light");

   // info
   info.classList.remove("info__dark");
   info.classList.add("info__light");
   infoName.classList.remove("info__header__name__dark");
   infoName.classList.add("info__header__name__light");
   infoDate.classList.remove("info__header__date__dark");
   infoDate.classList.add("info__header__date__light");
   infoBio.classList.remove("info__details__bio__dark");
   infoBio.classList.add("info__details__bio__light");
   infoFollowers.classList.remove("info__details__followers__dark");
   infoFollowers.classList.add("info__details__followers__light");
   infoSocial.classList.remove("info__details__social__dark");
   infoSocial.classList.add("info__details__social__light");

   infoSvg.forEach(svg => {
      svg.classList.remove("info__details__social__svg__dark");
      svg.classList.add("info__details__social__svg__light");
   });
}

schemeButton.addEventListener("click", () => {
   if (buttonSpan.textContent === "dark") {
      processDarkTheme();
   } else {
      processLightTheme();
   }
});

// check user's preference and set the mode
if (prefersDarkScheme) {
   processDarkTheme();
} else {
   processLightTheme();
}

// if the user changes the preference during the session, reset the mode accordingly
window.matchMedia("(prefers-color-scheme: dark)")
   .addEventListener("change", e => {
      if (e.matches) {
         processDarkTheme();
      } else {
         processLightTheme();
      }
   }
);

// call github api
const fetchData = async (login) => {
   try {
      const response = await axios.get(`https://api.github.com/users/${login}`);
      return response.data;
   } catch (error) {
      return [];
   }
}

const convertDate = (dateString) => {
   const date = new Date(dateString);
   const options = { month: "short", day: "numeric", year: "numeric" };
   const formattedDate = date.toLocaleDateString("en-US", options);

   return formattedDate;
}

// process social media data
const processSocialMediaData = (link, media, icon, ind) => {
   if (link == null || link === "") {
      media.setAttribute("disabled", true);
      media.classList.add("disabled");
      media.textContent = "Not Available";
      media.style.opacity = 0.5;
      icon.style.opacity = 0.5;
   } else {
      media.removeAttribute("disabled");
      media.classList.remove("disabled");
      media.textContent = link;
      media.style.opacity = 1;
      icon.style.opacity = 1;

      if (ind === "twitter") {
         media.setAttribute("href", "https://twitter.com/" + link);
      } else if (ind === "website") {
         if (link === "https://github.blog") {
            media.setAttribute("href", link);   
         } else {
            media.setAttribute("href", "https://github.blog/" + link);
         }
      } else if (ind === "company") {
         media.setAttribute("href", "https://github.com/" + link.replace("@", ""));
      } else {
         media.setAttribute("href", link);
      }
   }
}

const processUserInfo = (userInfo) => {
   document.querySelector(".info__header__avatar").setAttribute("src", userInfo.avatar_url);
   
   if (userInfo.name == null) {
      document.querySelector(".info__header__name").textContent = userInfo.login;
   } else {
      document.querySelector(".info__header__name").textContent = userInfo.name;
   }
   
   document.querySelector(".info__header__login").textContent = "@" + userInfo.login;
   document.querySelector(".info__header__date").textContent = "Joined " + convertDate(userInfo.created_at);
   
   if (userInfo.bio == null) {
      document.querySelector(".info__details__bio").textContent = "This profile has no bio";
      document.querySelector(".info__details__bio").style.opacity = 0.5;
      
   } else {
      document.querySelector(".info__details__bio").textContent = userInfo.bio;
      document.querySelector(".info__details__bio").style.opacity = 1;
   }

   document.querySelector(".info__details__followers__repos").textContent = userInfo.public_repos;
   document.querySelector(".info__details__followers__followers").textContent = userInfo.followers;
   document.querySelector(".info__details__followers__following").textContent = userInfo.following;
   
   if (userInfo.location == null) {
      document.querySelector(".info__details__social__location").textContent = "Not Available";
      document.querySelector(".info__details__social__location").style.opacity = 0.5;
      document.querySelector(".info__details__social__svg.location").style.opacity = 0.5;
   } else {
      document.querySelector(".info__details__social__location").textContent = userInfo.location;
      document.querySelector(".info__details__social__location").style.opacity = 1;
      document.querySelector(".info__details__social__svg.location").style.opacity = 1;
   }
   
   processSocialMediaData(
      userInfo.twitter_username,
      document.querySelector(".info__details__social__twitter"),
      document.querySelector(".info__details__social__svg.twitter"),
      "twitter"
   );
   
   processSocialMediaData(
      userInfo.blog,
      document.querySelector(".info__details__social__website"),
      document.querySelector(".info__details__social__svg.website"),
      "website"
   );
      
      
   processSocialMediaData(
      userInfo.company,
      document.querySelector(".info__details__social__company"),
      document.querySelector(".info__details__social__svg.company"),
      "company"
   );
}

searchButton.addEventListener("click", async () => {
   const userInfo = await fetchData(searchInput.value);
   const error = document.querySelector(".search__form__error-message");
   
   if (userInfo.length === 0) {
      error.style.display = "block";
   } else {
      error.style.display = "none";
      processUserInfo(userInfo);
   }
});

// get default octocat data from github when page is loaded initially
(async function fetchInitialData() {
   const userInfo = await fetchData("octocat");
   const error = document.querySelector(".search__form__error-message");
   
   if (userInfo.length === 0) {
      error.style.display = "block";
   } else {
      error.style.display = "none";
      processUserInfo(userInfo);
   }
})();
