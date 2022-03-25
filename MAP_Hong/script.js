function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 23.58044082121914, lng: 120.86312406425326 },
    zoom: 7.8
  });
  
  const infowindow = new google.maps.InfoWindow();
  const service = new google.maps.places.PlacesService(map);
  // Location 1
  const request = {
    placeId: 'ChIJ6Sql71hxaDQRH_2A8h3A1es',
    fields: ['name', 'formatted_address', 'place_id', 'geometry', 'photo', 'rating', 'user_ratings_total']
  };
  service.getDetails(request, function (place, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      //   map.setCenter(place.geometry.location)
      const marker = new google.maps.Marker({
        position: place.geometry.location,
        map: map
      });
      marker.addListener('click', function () {
        infowindow.open(map, marker);
        infowindow.setContent("<div class='infowindow-container'>" +
          "<img src='" + place.photos[0].getUrl({ maxWidth: 200, maxHeight: 150 }) + "'></img>" +
          "<div class='inner'><h3>" +
          '<a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' + '天狗溪噴泉</a>' +
          "</h3><p>評分: " + place.rating + "</p><p>總評論: " + place.user_ratings_total +
          "</p><p style='margin-left:15px'>地址:" + place.formatted_address + "</p>" + "<p><button>參加行程</button>" + "<button>建立行程</button></p>" + "</div></div>")
      });
    }
  });

  const req2 = {
    placeId: 'ChIJ_a1qN2SiaDQRZHNavQE-JnM',
    fields: ['name', 'formatted_address', 'place_id', 'geometry', 'photo', 'rating', 'user_ratings_total', 'address_component']
  }
  service.getDetails(req2, function (place, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      const marker = new google.maps.Marker({
        position: place.geometry.location,
        map: map
      });
      marker.addListener('click', function () {
        infowindow.open(map, marker);
        infowindow.setContent("<div class='infowindow-container'>" +
          "<img src='" + place.photos[0].getUrl({ maxWidth: 200, maxHeight: 150 }) + "'></img>" +
          "<div class='inner'><h3>" +
          '<a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' + '翡翠谷</a>' +
          "</h3><p>評分: " + place.rating + "</p><p>總評論: " + place.user_ratings_total +
          "</p><p style='margin-left:15px'>地址:" + place.formatted_address + "</p>" + "<p><button>參加行程</button>" + "<button>建立行程</button></p>" + "</div></div>")
      });
    }
  });

  const req3 = {
    placeId: 'ChIJCQG9vQwFaTQRLe7JGdAOZVk',
    fields: ['name', 'formatted_address', 'place_id', 'geometry', 'photo', 'rating', 'user_ratings_total', 'address_component']
  }
  service.getDetails(req3, function (place, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      const marker = new google.maps.Marker({
        position: place.geometry.location,
        map: map
      });
      marker.addListener('click', function () {
        infowindow.open(map, marker);
        infowindow.setContent("<div class='infowindow-container'>" +
          "<img src='" + place.photos[0].getUrl({ maxWidth: 200, maxHeight: 150 }) + "'></img>" +
          "<div class='inner'><h3>" +
          '<a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' + '火炎山</a>' +
          "</h3><p>評分: " + place.rating + "</p><p>總評論: " + place.user_ratings_total +
          "</p><p style='margin-left:15px'>地址:" + place.formatted_address + "</p>" + "<p><button>參加行程</button>" + "<button>建立行程</button></p>" + "</div></div>")
      });
    }
  });



  const req4 = {
    placeId: 'ChIJ30vCQtzpZzQRY_ZjcfWOjDk',
    fields: ['name', 'formatted_address', 'place_id', 'geometry', 'photo', 'rating', 'user_ratings_total', 'address_component']
  }
  service.getDetails(req4, function (place, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      const marker = new google.maps.Marker({
        position: place.geometry.location,
        map: map
      });
      marker.addListener('click', function () {
        infowindow.open(map, marker);
        infowindow.setContent("<div class='infowindow-container'>" +
          "<img src='" + place.photos[0].getUrl({ maxWidth: 200, maxHeight: 150 }) + "'></img>" +
          "<div class='inner'><h3>" +
          '<a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' + '玻璃海灘</a>' +
          "</h3><p>評分: " + place.rating + "</p><p>總評論: " + place.user_ratings_total +
          "</p><p style='margin-left:15px'>地址:" + place.formatted_address + "</p>" + "<p><button>參加行程</button>" + "<button>建立行程</button></p>" + "</div></div>")
      });
    }
  });

  const req5 = {
    placeId: 'ChIJ8S89IWhLXTQRIwebUtrDH1w',
    fields: ['name', 'formatted_address', 'place_id', 'geometry', 'photo', 'rating', 'user_ratings_total', 'address_component']
  }
  service.getDetails(req5, function (place, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      const marker = new google.maps.Marker({
        position: place.geometry.location,
        map: map
      });
      marker.addListener('click', function () {
        infowindow.open(map, marker);
        infowindow.setContent("<div class='infowindow-container'>" +
          "<img src='" + place.photos[0].getUrl({ maxWidth: 200, maxHeight: 150 }) + " class='image''></img>" +
          "<div class='inner'><h3>" +
          '<a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' + '燭台沙灘</a>' +
          "</h3><p>評分: " + place.rating + "</p><p>總評論: " + place.user_ratings_total +
          "</p><p style='margin-left:15px'>地址:" + place.formatted_address + "</p>" + "<p><button>參加行程</button>" + "<button>建立行程</button></p>" + "</div></div>")
      });
    }
  });

  const req6 = {
    placeId: 'ChIJUalgY62KbjQR6zGh_oOih1w',
    fields: ['name', 'formatted_address', 'place_id', 'geometry', 'photo', 'rating', 'user_ratings_total', 'address_component']
  }
  service.getDetails(req6, function (place, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      const marker = new google.maps.Marker({
        position: place.geometry.location,
        map: map
      });
      marker.addListener('click', function () {
        infowindow.open(map, marker);
        infowindow.setContent("<div class='infowindow-container'>" +
          "<img src='" + place.photos[0].getUrl({ maxWidth: 200, maxHeight: 150 }) + " class='image''></img>" +
          "<div class='inner'><h3>" +
          '<a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' + '蝙蝠洞瀑布</a>' +
          "</h3><p>評分: " + place.rating + "</p><p>總評論: " + place.user_ratings_total +
          "</p><p style='margin-left:15px'>地址:" + place.formatted_address + "</p>" + "<p><button>參加行程</button>" + "<button>建立行程</button></p>" + "</div></div>")
      });
    }
  });

  const req7 = {
    placeId: 'ChIJpb0epRKfbzQR2FJHsZNy3bw',
    fields: ['name', 'formatted_address', 'place_id', 'geometry', 'photo', 'rating', 'user_ratings_total', 'address_component']
  }
  service.getDetails(req7, function (place, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      const marker = new google.maps.Marker({
        position: place.geometry.location,
        map: map
      });
      marker.addListener('click', function () {
        infowindow.open(map, marker);
        infowindow.setContent("<div class='infowindow-container'>" +
          "<img src='" + place.photos[0].getUrl({ maxWidth: 200, maxHeight: 150 }) + " class='image''></img>" +
          "<div class='inner'><h3>" +
          '<a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' + '金樽陸連島</a>' +
          "</h3><p>評分: " + place.rating + "</p><p>總評論: " + place.user_ratings_total +
          "</p><p style='margin-left:15px'>地址:" + place.formatted_address + "</p>" + "<p><button>參加行程</button>" + "<button>建立行程</button></p>" + "</div></div>")
      });
    }
  });

  const req8 = {
    placeId: 'ChIJ745sjlAmbzQRgds_w0ah-lw',
    fields: ['name', 'formatted_address', 'place_id', 'geometry', 'photo', 'rating', 'user_ratings_total', 'address_component']
  }
  service.getDetails(req8, function (place, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      const marker = new google.maps.Marker({
        position: place.geometry.location,
        map: map
      });
      marker.addListener('click', function () {
        infowindow.open(map, marker);
        infowindow.setContent("<div class='infowindow-container'>" +
          "<img src='" + place.photos[3].getUrl({ maxWidth: 200, maxHeight: 150 }) + " class='image''></img>" +
          "<div class='inner'><h3>" +
          '<a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' + '雲龍瀑布</a>' +
          "</h3><p>評分: " + place.rating + "</p><p>總評論: " + place.user_ratings_total +
          "</p><p style='margin-left:15px'>地址:" + place.formatted_address + "</p>" + "<p><button>參加行程</button>" + "<button>建立行程</button></p>" + "</div></div>")
      });
    }
  });

  const req9 = {
    placeId: 'ChIJU8R7M6w6bjQRMAjp0TYLshA',
    fields: ['name', 'formatted_address', 'place_id', 'geometry', 'photo', 'rating', 'user_ratings_total', 'address_component']
  }
  service.getDetails(req9, function (place, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      const marker = new google.maps.Marker({
        position: place.geometry.location,
        map: map
      });
      marker.addListener('click', function () {
        infowindow.open(map, marker);
        infowindow.setContent("<div class='infowindow-container'>" +
          "<img src='" + place.photos[3].getUrl({ maxWidth: 200, maxHeight: 150 }) + " class='image''></img>" +
          "<div class='inner'><h3>" +
          '<a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' + '北大武山步道</a>' +
          "</h3><p>評分: " + place.rating + "</p><p>總評論: " + place.user_ratings_total +
          "</p><p style='margin-left:15px'>地址:" + place.formatted_address + "</p>" + "<p><button>參加行程</button>" + "<button>建立行程</button></p>" + "</div></div>")
      });
    }
  });

  const req10 = {
    placeId: 'ChIJu2DussXBaDQRsbt2lWVVSv8',
    fields: ['name', 'formatted_address', 'place_id', 'geometry', 'photo', 'rating', 'user_ratings_total', 'address_component']
  }
  service.getDetails(req10, function (place, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      const marker = new google.maps.Marker({
        position: place.geometry.location,
        map: map
      });
      marker.addListener('click', function () {
        infowindow.open(map, marker);
        infowindow.setContent("<div class='infowindow-container'>" +
          "<img src='" + place.photos[3].getUrl({ maxWidth: 200, maxHeight: 150 }) + " class='image''></img>" +
          "<div class='inner'><h3>" +
          '<a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' + '精英瀑布</a>' +
          "</h3><p>評分: " + place.rating + "</p><p>總評論: " + place.user_ratings_total +
          "</p><p style='margin-left:15px'>地址:" + place.formatted_address + "</p>" + "<p><button>參加行程</button>" + "<button>建立行程</button></p>" + "</div></div>")
      });
    }
  });
}

