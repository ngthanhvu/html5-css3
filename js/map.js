let platform = new H.service.Platform({
     apikey: 'gvVfKw5VEhCXLNrGmx2ASJFKo1M98wkjn3Li6wwe1AA'
});

function initMap() {
     var map = new H.Map(
          document.getElementById('map'),
          platform.createDefaultLayers().vector.normal.map,
          {
               zoom: 12 // Độ phóng to của bản đồ
          }
     );
     if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function (position) {
               var userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
               };

               var marker = new H.map.Marker(userLocation);
               map.addObject(marker);

               map.setCenter(userLocation);
          }, function () {
               alert('Không thể truy cập vị trí của bạn.');
          });
     } else {
          alert('Trình duyệt của bạn không hỗ trợ geolocation.');
     }
}
