angular
    .module('mainComp')
    .component('mainComp', {
        templateUrl: 'container/mainComp/mainComp.template.html',
        controller: function ()  {
            this.hotels= [
                {
                    name: "Paradise Retreat Resort",
                    address: "123 Serenity Lane, Goa, India",
                    imagePath: 'Images/resortImage1.jpg',
                    price: '4000'

                
                },
                {
                    name: "Palm Grove Resort & Spa",
                    address: "456 Tranquil Road, Manali, India",
                    imagePath: 'Images/resortImage2.jpg',
                    price: '5000'

                },
                {
                    name: "Tranquil Oasis Hotel",
                    address: "789 Majestic Mountain Road, Queenstown, New Zealand",
                    imagePath: 'Images/resortImage3.jpg',
                    price: '10000'

                },
                {
                    name: "Palm Vista Retreat",
                    address: "89 Sea Road, Bali, Indonesia",
                    imagePath: 'Images/resortImage4.jpg',
                    price: '3000'

                },
                {
                    name: "Azure Skyline Suites",
                    address: "101 Azure Skyline Street, Barcelona, Spain",
                    imagePath: 'Images/resortImage5.jpg',
                    price: '7000'

                },
                {
                    name: "Harmony Cove Inn & Suites",
                    address: " 555 Harmony Cove Drive, Maldives, Maldives",
                    imagePath: 'Images/resortImage6.jpg',
                    price: '8000'

                }
            ]
        }
    });
