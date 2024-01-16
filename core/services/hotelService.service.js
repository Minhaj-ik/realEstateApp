var hotelService= angular.module('hotelService',[]);
hotelService.service('hotelService',[function(){
        var hotels=[
            {
                id: 1,
                name: "Paradise Retreat Resort",
                address: "123 Serenity Lane, Goa, India",
                imagePath: 'Images/resortImage1.jpg',
                price: '4000',
                details: "first hotel"

            
            },
            {
                id: 2,
                name: "Palm Grove Resort & Spa",
                address: "456 Tranquil Road, Manali, India",
                imagePath: 'Images/resortImage2.jpg',
                price: '5000',
                details: "second hotel"

            },
            {
                id: 3,
                name: "Tranquil Oasis Hotel",
                address: "789 Majestic Mountain Road, Queenstown, New Zealand",
                imagePath: 'Images/resortImage3.jpg',
                price: '10000',
                details: "third hotel"

            },
            {
                id: 4,
                name: "Palm Vista Retreat",
                address: "89 Sea Road, Bali, Indonesia",
                imagePath: 'Images/resortImage4.jpg',
                price: '3000',
                details: "fourth hotel"

            },
            {
                id: 5,
                name: "Azure Skyline Suites",
                address: "101 Azure Skyline Street, Barcelona, Spain",
                imagePath: 'Images/resortImage5.jpg',
                price: '7000',
                details: "fifth hotel"

            },
            {
                id: 6,
                name: "Harmony Cove Inn & Suites",
                address: " 555 Harmony Cove Drive, Maldives, Maldives",
                imagePath: 'Images/resortImage6.jpg',
                price: '8000',
                details: "sixth hotel"

            }
        ];
        this.getHotels= function(){
            return hotels;
        }
        this.getHotelById= function(id){
            return hotels.find(function(hotel){
                return hotel.id== id;
            });
        };
    }]);