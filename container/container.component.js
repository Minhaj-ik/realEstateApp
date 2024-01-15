angular
    .module('container')
    .component('container', {
        templateUrl: 'container/container.template.html',
        controller: function () {
            this.switchValue = 'Home';

            this.handleStructure = function (e) {
                try {
                    var section= e.target.textContent;
                    console.log('Clicked on:', section);
                    this.switchValue = section;
                } catch (error) {
                    console.error('Error in handleStructure:', error);
                }
            };
        }
    });
