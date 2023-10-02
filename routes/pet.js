var express = require('express');
var router = express.Router();



// mock some data
const pets = [
    {
        id: 1,
        name: 'Fluffy',
        breed: 'Siamese',
        type: 'cat',
        notes:
        [
            'Fluffy loves to have her belly rubbed',
            'Fluffy is really grumpy around other cats'
        ]
    },
    {
        id: 2,
        name: 'Fido',
        breed: 'Beagle',
        type: 'dog',
        notes:
        [
            'Fido loves to be scratched behind the ears',
            'Fido is really happy around other dogs'
        ]
    },
    {
        id: 3,
        name: 'Goldberg',
        breed: 'Goldfish',
        type: 'fish',
        notes:
        [
            'Goldberg loves to swim around',
            'Goldberg is eats alot'
        ]

    }
]


// GET: read all pets
router.get('/', (req, res) => { 
    //get all pets
    res.statusCode = 200;
    res.json(pets);
});


// GET: read a single pet
router.get('/:id', (req, res) => { 
    //get a single pet
    res.statusCode = 200;
    res.json(pets[0]);
});

// POST: create a new pet
router.post('/', (req, res) => { 
    res.statusCode = 501;
    res.json({});
});

// PUT: update a single pet
router.put('/:id', (req, res) => { 
    //update a single pet

});

// DELETE: delete a single pet
router.delete('/:id', (req, res) => { 
    //delete a single pet

});


module.exports = router;