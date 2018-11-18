(function () {
    "use strict";

    document.querySelectorAll('.tabs').forEach(function (tabsElement) {
        var selectElement = tabsElement.querySelector('.tabs-select'),
            tabsContainerElement = tabsElement.querySelector('.tabs-tabsContainer');

        getTabByName (tabsContainerElement, selectElement.value).classList.add('tabs-container-tab_selected');

        console.log('current value: ', selectElement.value);

        selectElement.onchange = function () {
            console.log('new value: ', selectElement.value);

            tabsContainerElement.querySelector('.tabs-container-tab_selected').classList.remove('tabs-container-tab_selected');

            getTabByName (tabsContainerElement, selectElement.value).classList.add('tabs-container-tab_selected');
        };

        function getTabByName(tabsContainerElement, name) {
            return tabsContainerElement.querySelector('[data-name=' + name + ']');
        }

    });

})();