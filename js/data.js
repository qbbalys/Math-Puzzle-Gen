var initialBoard = [
    [0  , "-" , 0  , "=" ,   0],
    ["+", null, "+", null, "+"],
    [0  , "-" , 0  , "=" ,   0],
    ["=", null, "=", null, "="],
    [0  , "-" , 0  , "=" ,   0]
];

 var masks = [
    [
        [1,1,1,1,0],
        [1,1,1,1,1],
        [0,1,1,1,0],
        [1,1,1,1,1],
        [0,1,0,1,1]
    ],
    [
        [1,1,0,1,0],
        [1,1,1,1,1],
        [0,1,1,1,1],
        [1,1,1,1,1],
        [0,1,0,1,1]
    ],
    [
        [1,1,0,1,0],
        [1,1,1,1,1],
        [0,1,1,1,0],
        [1,1,1,1,1],
        [0,1,1,1,1]
    ],
    [
        [1,1,0,1,0],
        [1,1,1,1,1],
        [1,1,1,1,0],
        [1,1,1,1,1],
        [0,1,0,1,1]
    ],
    [
        [0,1,1,1,1],
        [1,1,1,1,1],
        [0,1,1,1,0],
        [1,1,1,1,1],
        [1,1,0,1,0]
    ],
    [
        [0,1,0,1,1],
        [1,1,1,1,1],
        [0,1,1,1,1],
        [1,1,1,1,1],
        [1,1,0,1,0]
    ],
    [
        [0,1,0,1,1],
        [1,1,1,1,1],
        [0,1,1,1,0],
        [1,1,1,1,1],
        [1,1,1,1,0]
    ],
    [
        [0,1,0,1,1],
        [1,1,1,1,1],
        [1,1,1,1,0],
        [1,1,1,1,1],
        [1,1,0,1,0]
    ],
    [
        [1,1,1,1,0],
        [1,1,1,1,1],
        [1,1,1,1,0],
        [1,1,1,1,1],
        [0,1,0,1,0]
    ],
    [
        [0,1,1,1,1],
        [1,1,1,1,1],
        [0,1,1,1,1],
        [1,1,1,1,1],
        [0,1,0,1,0]
    ],
    [
        [0,1,0,1,0],
        [1,1,1,1,1],
        [0,1,1,1,1],
        [1,1,1,1,1],
        [0,1,1,1,1]
    ],
    [
        [0,1,0,1,0],
        [1,1,1,1,1],
        [1,1,1,1,0],
        [1,1,1,1,1],
        [1,1,1,1,0]
    ],
    [
        [1,1,0,1,1],
        [1,1,1,1,1],
        [0,1,0,1,0],
        [1,1,1,1,1],
        [1,1,0,1,1]
    ]
 ];