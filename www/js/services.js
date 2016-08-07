angular.module('starter.services', [])

.factory('Chats', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
        id: 0,
        name: 'Ben Sparrow',
        lastText: 'You on your way?',
        face: 'img/ben.png'
    }, {
        id: 1,
        name: 'Max Lynx',
        lastText: 'Hey, it\'s me',
        face: 'img/max.png'
    }, {
        id: 2,
        name: 'Adam Bradleyson',
        lastText: 'I should buy a boat',
        face: 'img/adam.jpg'
    }, {
        id: 3,
        name: 'Perry Governor',
        lastText: 'Look at my mukluks!',
        face: 'img/perry.png'
    }, {
        id: 4,
        name: 'Mike Harrington',
        lastText: 'This is wicked good ice cream.',
        face: 'img/mike.png'
    }];

    return {
        all: function() {
            return chats;
        },
        remove: function(chat) {
            chats.splice(chats.indexOf(chat), 1);
        },
        get: function(chatId) {
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].id === parseInt(chatId)) {
                    return chats[i];
                }
            }
            return null;
        }
    };
})

.factory('Projects', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var list = [{
        name: 'My Project',
        active: false,
        items: [{
            title: 'BEN SPARROW',
            id: 128
        }, {
            title: 'MAX LYNX',
            id: 205
        }, {
            title: 'ADAM BROADLAYSON',
            id: 247
        }, {
            title: 'PERRY GOVERNOR',
            id: 1001
        }, {
            title: 'Mike Harrington',
            id: 5104
        }, {
            title: 'Good ice cream',
            id: 6000
        }]
    }, {
        name: 'Export Reports',
        active: false,
        items: [{
            title: 'Project #11',
            id: 11
        }, {
            title: 'Project #2215',
            id: 2215
        }, {
            title: 'Project #18',
            id: 18
        }]
    }];

    return {
        all: function() {
            return list;
        },
        remove: function(item) {
            for (var i = 0; i < list.length; i++) {
                var index = list[i].items.indexOf(item);
                if( index >=0 ){
                    list[i].items.splice(index, 1);
                }
            }
        },
        get: function(id) {
            for (var i = 0; i < list.length; i++) {
                for (var j = 0; j < list[i].items.length; j++) {
                    if (list[i].items[j].id === parseInt(id)) {
                        return list[i].items[j];
                    }
                }
            }
            return null;
        }
    };
});