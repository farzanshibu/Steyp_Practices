$(window).on("load", () => {
  $.ajax({
    url: "https://traveller.talrop.works/api/v1/places/categories/",
    method: "GET",
    success: (result) => {
      result.data.forEach((category) => {
        const html = `
            <li>
              <a href="#">
                <img class="rest" src="${category.image}" alt="${category.name}" />
                <span>${category.name}</span>
              </a>
            </li>`;
        $("#categories-container").append(html);
      });
    },
    error: (error) => {
      console.log(error);
    },
  });
  $.ajax({
    url: "https://traveller.talrop.works/api/v1/places/",
    method: "GET",
    success: (result) => {
      result.data.forEach((place) => {
        const html = `
            <div class="item">
          <a href="#">
            <div class="top">
              <img src="${place.image}" alt="${place.name}" />
            </div>
            <div class="middle"><h3>${place.name}</h3></div>
            <div class="bottom">
              <img src="images/place.svg" alt="Image" />
              <span>${place.location}</span>
            </div>
          </a>
        </div>`;
        $("#cards-container").append(html);
      });
    },
    error: (error) => {
      console.log(error);
    },
  });
});
