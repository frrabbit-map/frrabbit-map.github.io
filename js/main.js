ymaps.ready(init);

function init() {

    // создаем карту
    var piterMap = new ymaps.Map( "piterMap", {

        // указываем координаты
        center: [59.939095, 30.315868],

        // указываем масштаб
        zoom: 12,

        // инструментарий карты
        controls: ['smallMapDefaultSet']
    } );


    // создаем список
    var menu = $ ( '<ul class="menu"/>' );

    // добавляем список в разметку
    menu.appendTo( $ ( '#piterMap' ) );


    // создаем маркер объекта
    var myPlacemark = new ymaps.Placemark( [], {},

        {
            // свое изображение маркера
            iconLayout: 'default#image',
            iconImageHref: 'img/tag.png',
            iconImageSize: [42, 51],
            iconImageOffset: [-20, -48]
        }
    );

    // добавляем маркер на карту
    piterMap.geoObjects.add( myPlacemark );


    // главная функция, йо!
    function createMenuitem( item ) {

        // создаем пункт списка
        var menuItem = $( '<li><a href="#">' + item.name + '</a></li>' );
        menuItem

        // добавляем пункт в сам список
        .appendTo( menu )

        // при клике на элемент списка отображаем маркер
        .find( 'a' )
        .bind( 'click', function() {

            // задаем маркеру координаты объекта
            myPlacemark.geometry.setCoordinates( item.center ),

            // задаем данные балуна
            myPlacemark.properties.set({

                balloonContentHeader: item.name,
                balloonContentBody: item.description

            }),

            // центрируем карту по координатам объекта
            piterMap.setCenter( item.center ),

            // раскрываем балун с инфой
            myPlacemark.balloon.open()

        } );
    }


    // цикл перебора элементов списка
    for ( var i = 0, l = items.length; i < l; i++ ) {
        createMenuitem( items[i] );
    }
}

