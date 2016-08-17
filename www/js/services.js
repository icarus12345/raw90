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
.factory('GraphChart', function() {
    return {
        opportunity: {
            title: 'OPPORTUNITY',
            charts: [{
                title: 'OVERALL',
                labels: ["T", "P", "S", "F", "H"],
                data: [
                    [60, 60, 75, 60, 65],
                    [50, 58, 0, 0, 0]
                ],
                titles: [
                'Target Marker',
                'Product',
                'Sustainable Competitive Adv.',
                'Financial Performance',
                'Hasvestability',
                ]
            },{
                title: 'Target Market',
                labels: ["1", "2", "3", "4", "5"],
                data: [
                    [65, 59, 90, 81, 56],
                    [28, 48, 40, 19, 96]
                ],
                titles: [
                'Target Marker Size',
                'Maket Structure',
                'Competitors',
                'Customers',
                'Pricing',
                ]
            },{
                title: 'Product',
                labels: ["1", "2", "3"],
                data: [
                    [65, 59, 81],
                    [28, 48, 40]
                ],
                titles: [
                'Product Characteristics',
                'Process',
                'Team, Resource, Opp'
                ]
            },{
                title: 'Financial Performance',
                labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
                data: [
                    [80, 100, 40, 40, 20, 20, 80, 100, 100, 60, 80, 60, 100, 20, 80],
                    [58, 48, 60, 80, 72, 100, 60, 80, 60, 100, 100, 80, 88, 66, 77]
                ],
                titles: [
                'Capital Requirements',
                'After tax profits',
                'Net Cash Flow',
                'Internal Rate of Return (IRR)',
                'Investment Multiple Returned',
                'Sales Growth',
                'Working Capital',
                'Gross Margin',
                'Historical Performance',
                'Time to Cash Neutral',
                'Time to Profit (Annual)',
                'Time to Profit (Cumulative)',
                'Time to Breakeven',
                'Cost Structure (ratio of fixed to variable costs)',
                'Gearing'
                ]
            }]
        }
    }
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