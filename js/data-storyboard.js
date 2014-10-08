(function() {
    var data = [
        {
            thumbnail: 'images/storyboard/storyboard_cars_1.jpg',
            description: 'Realistic color rendering of a SUV driving on a dirt road towing a trailer of tree logs',
            medium: 'Pencil line art, colored digitally',
            maxdimension: '1920 pixels X 1080 pixels',
            price: '$150 USD per frame',
            animatic: '$200 USD per frame plus $50 per layer',
        },
        {
            thumbnail: 'images/storyboard/storyboard_cars_2.jpg',
            description: 'Realistic color rendering of a sedan driving on a city street at night',
            medium: 'Pencil line art, colored digitally',
            maxdimension: '1920 pixels X 1080 pixels',
            price: '$150 USD per frame',
            animatic: '$200 USD per frame plus $50 per layer',
            wide: false
        },
        {
            thumbnail: 'images/storyboard/storyboard_cars_3.jpg',
            description: 'Realistic B/W rendering of a sedan turning on a city street corner',
            medium: 'Pencil line art, grey tones applied digitally',
            maxdimension: '1920 pixels X 1080 pixels',
            price: '$150 USD per frame',
            animatic: '$200 USD per frame plus $50 per layer',
            wide: false
        },
        {
            thumbnail: 'images/storyboard/storyboard_cars_4.jpg',
            description: 'Nascar on the move',
            medium: 'Pencil, watercolor and digital media',
            maxdimension: '1920 pixels X 1080 pixels',
            price: '$180 USD per frame',
            animatic: '$250 USD per frame plus $50 per layer',
            wide: false
        },
        {
            thumbnail: 'images/storyboard/storyboard_cars_5.jpg',
            description: 'Realistic illustration of a red SUV traveling in snow with evergreen tree tied to the roof',
            medium: 'Pencil line art and watercolor',
            maxdimension: '1920 pixels X 1080 pixels',
            price: '$180 USD per frame',
            animatic: '$250 USD per frame plus $50 per layer',
            wide: false
        },
        {
            thumbnail: 'images/storyboard/storyboard_cars_6.jpg',
            description: 'Stylize illustration of a car at the gas pumps',
            medium: 'Digital media',
            maxdimension: '1920 pixels X 1080 pixels',
            price: '$150 USD per frame',
            animatic: '$200 USD per frame plus $50 per layer',
            wide: false
        },
        {
            thumbnail: 'images/storyboard/storyboard_food_01.jpg',
            description: 'Realistic rendering of beer pouring from a bottle to a hand held glass',
            medium: 'Pencil line art and digital media',
            maxdimension: '1920 pixels X 1080 pixels',
            price: '$150 USD per frame',
            animatic: '$200 USD per frame plus $50 per layer',
            wide: false
        },
        {
            thumbnail: 'images/storyboard/storyboard_food_02.jpg',
            description: 'Realistic rendering of beef pot roast with mashed potaoe on a white plate',
            medium: 'Pencil line art and digital media',
            maxdimension: '1920 pixels X 1080 pixels',
            price: '$150 USD per frame',
            animatic: '$200 USD per frame plus $50 per layer',
            wide: false
        },
        {
            thumbnail: 'images/storyboard/storyboard_food_03.jpg',
            description: 'Realistic rendering of green salad with tomato, cucumber, olives and croutons',
            medium: 'Pencil line art and digital media',
            maxdimension: '1920 pixels X 1080 pixels',
            price: '$150 USD per frame',
            animatic: '$200 USD per frame plus $50 per layer',
            wide: false
        },
        {
            thumbnail: 'images/storyboard/storyboard_food_04.jpg',
            description: 'Realistic rendering of hand reaching for a burger in a box',
            medium: 'Pencil line art and digital media',
            maxdimension: '1920 pixels X 1080 pixels',
            price: '$150 USD per frame',
            animatic: '$200 USD per frame plus $50 per layer',
            wide: false
        },
        {
            thumbnail: 'images/storyboard/storyboard_food_05.jpg',
            description: 'Watercolor rendering of a jar of miracle whip in a picnic basket',
            medium: 'Pencil line art and watercolor',
            maxdimension: '1920 pixels X 1080 pixels',
            price: '$150 USD per frame',
            animatic: '$200 USD per frame plus $50 per layer',
            wide: false
        },
        {
            thumbnail: 'images/storyboard/storyboard_food_06.jpg',
            description: 'Loose watercolor illustration of a yellow pepper submerged in water',
            medium: 'Pencil line art and watercolor',
            maxdimension: '1920 pixels X 1080 pixels',
            price: '$180 USD per frame',
            animatic: '$250 USD per frame plus $50 per layer',
            wide: false
        },
        {
            thumbnail: 'images/storyboard/storyboard_humor_01.jpg',
            description: 'artoon style of a manwich',
            medium: 'Pencil line art and watercolor',
            maxdimension: '1920 pixels X 1080 pixels',
            price: '$150 USD per frame',
            animatic: '$200 USD per frame plus $50 per layer',
            wide: false
        },
        {
            thumbnail: 'images/storyboard/storyboard_humor_02.jpg',
            description: 'Cartoon style of air traffic',
            medium: 'Pencil line art and watercolor',
            maxdimension: '1920 pixels X 1080 pixels',
            price: '$150 USD per frame',
            animatic: '$200 USD per frame plus $50 per layer',
            wide: false
        },
        {
            thumbnail: 'images/storyboard/storyboard_humor_03.jpg',
            description: 'Cartoon style business person underwater',
            medium: 'Pencil line art and watercolor',
            maxdimension: '1920 pixels X 1080 pixels',
            price: '$150 USD per frame',
            animatic: '$200 USD per frame plus $50 per layer',
            wide: false
        },
        {
            thumbnail: 'images/storyboard/motiongraphic_01.jpg',
            description: 'Motion graphic. Vector art for animation',
            medium: 'Vector, digtal media',
            price: '$500 USD per frame',
            wide: false
        },
        {
            thumbnail: 'images/storyboard/motiongraphic_02.jpg',
            description: 'Motion graphic. Vector art for animation',
            medium: 'Vector, digtal media',
            price: '$500 USD per frame',
            wide: false
        },
        {
            thumbnail: 'images/storyboard/motiongraphic_03.jpg',
            description: 'Motion graphic. Vector art for animation',
            medium: 'Vector, digtal media',
            price: '$500 USD per frame',
            wide: false
        },
        {
            thumbnail: 'images/storyboard/graphicnovel_01.jpg',
            description: 'Gritty pencil illustration of a man carrying a box',
            medium: 'Pencil on paper',
            maxdimension: '1920 pixels X 1080 pixels',
            price: '$125 USD per frame',
            animatic: '$150 USD per frame plus $50 per layer',
            wide: false
        },
        {
            thumbnail: 'images/storyboard/graphicnovel_02.jpg',
            description: 'Gritty pencil illustration of a man carrying a box',
            medium: 'Pencil on paper',
            maxdimension: '1920 pixels X 1080 pixels',
            price: '$125 USD per frame',
            animatic: '$150 USD per frame plus $50 per layer',
            wide: false
        },
        {
            thumbnail: 'images/storyboard/graphicnovel_03.jpg',
            description: 'Gritty pencil illustration of a man carrying a box',
            medium: 'Pencil on paper',
            maxdimension: '1920 pixels X 1080 pixels',
            price: '$125 USD per frame',
            animatic: '$150 USD per frame plus $50 per layer',
            wide: false
        },
        {
            thumbnail: 'images/storyboard/storyboard_people_1.jpg',
            description: 'Realistic color rendering of young people doing goofy stuff.',
            medium: 'Pencil line art, colored digitally',
            maxdimension: '1920 pixels X 1080 pixels',
            price: '$150 USD per frame',
            animatic: '$200 USD per frame plus $50 per layer',
            wide: false
        },
        {
            thumbnail: 'images/storyboard/storyboard_people_2.jpg',
            description: 'Realistic B/W rendering of people waiting at a city bus stop',
            medium: 'Pencil line art, grey tones applied digitally',
            maxdimension: '1920 pixels X 1080 pixels',
            price: '$150 USD per frame',
            animatic: '$200 USD per frame plus $50 per layer',
            wide: false
        },
        {
            thumbnail: 'images/storyboard/storyboard_people_3.jpg',
            description: 'Realistic color rendering of people watching a woman in underwear looking through a dresser drawer',
            medium: 'Pencil line art, colored digitally',
            maxdimension: '1920 pixels X 1080 pixels',
            price: '$150 USD per frame',
            animatic: '$200 USD per frame plus $50 per layer',
            wide: false
        },
        {
            thumbnail: 'images/storyboard/storyboard_people_4.jpg',
            description: 'Stylize color rendering of people watching a parade of cars',
            medium: 'Pencil line art and watercolor',
            maxdimension: '1920 pixels X 1080 pixels',
            price: '$180 USD per frame',
            animatic: '$250 USD per frame plus $50 per layer',
            wide: false
        },
        {
            thumbnail: 'images/storyboard/storyboard_people_5.jpg',
            description: 'Stylize color rendering of kids sleeping in class',
            medium: 'Red ink line art, watercolor',
            maxdimension: '1920 pixels X 1080 pixels',
            price: '$180 USD per frame',
            animatic: '$250 USD per frame plus $50 per layer',
            wide: false
        },
        {
            thumbnail: 'images/storyboard/storyboard_people_6.jpg',
            description: 'Cartoon style characters talking in a room',
            medium: 'Pencil line art, colored digitally',
            maxdimension: '1920 pixels X 1080 pixels',
            price: '$180 USD per frame',
            animatic: '$250 USD per frame plus $50 per layer',
            wide: false
        },
        {
            thumbnail: 'images/storyboard/storyboard_people_7.jpg',
            description: 'Loose pencil drawing of kids walking in a school hallway',
            medium: 'Pencil line art, grey tones applied digitally',
            maxdimension: '1920 pixels X 1080 pixels',
            price: '$150 USD per frame',
            animatic: '$200 USD per frame plus $50 per layer',
            wide: false
        },
        {
            thumbnail: 'images/storyboard/storyboard_people_8.jpg',
            description: 'Cartoon style rendering of an elf talking to Santa with a over sized present on a reindeer drawn sleigh',
            medium: 'Pencil line art, grey tones applied digitally',
            maxdimension: '1920 pixels X 1080 pixels',
            price: '$150 USD per frame',
            animatic: '$200 USD per frame plus $50 per layer',
            wide: false
        },
        {
            thumbnail: 'images/storyboard/storyboard_people_9.jpg',
            description: 'Loose color rendering of women dancing in the park',
            medium: 'Pencil line art, colored digitally',
            maxdimension: '1920 pixels X 1080 pixels',
            price: '$150 USD per frame',
            animatic: '$200 USD per frame plus $50 per layer',
            wide: false
        },
        {
            thumbnail: 'images/storyboard/storyboard_people_10.jpg',
            description: 'Loose action color rendering of man racing on a jetski',
            medium: 'Pencil line art and watercolor',
            maxdimension: '1920 pixels X 1080 pixels',
            price: '$180 USD per frame',
            animatic: '$250 USD per frame plus $50 per layer',
            wide: false
        },
        {
            thumbnail: 'images/storyboard/storyboard_people_11.jpg',
            description: 'Retro style of a man jeering',
            medium: 'Digitally created',
            maxdimension: '1920 pixels X 1080 pixels',
            price: '$250 USD per frame',
            animatic: '$300 USD per frame plus $50 per layer',
            wide: false
        },
        {
            thumbnail: 'images/storyboard/storyboard_people_12.jpg',
            description: 'Color rendering of diverse peole working together',
            medium: 'Digitally created',
            maxdimension: '1920 pixels X 1080 pixels',
            price: '$150 USD per frame',
            animatic: '$200 USD per frame plus $50 per layer',
            wide: false
        },
        {
            thumbnail: 'images/storyboard/storyboard_people_13.jpg',
            description: 'Stylize graphic street scene with everyday activities',
            medium: 'Digitally created',
            maxdimension: '1920 pixels X 1080 pixels',
            price: '$180 USD per frame',
            animatic: '$250 USD per frame plus $50 per layer',
            wide: false
        },
        {
            thumbnail: 'images/storyboard/storyboard_people_14.jpg',
            description: 'Fashion illustration of a woman with red hair. Loose lines provide motion',
            medium: 'Ink drawing, watercolor and digital media',
            maxdimension: '1920 pixels X 1080 pixels',
            price: '$250 USD per frame',
            animatic: '$300 USD per frame plus $50 per layer',
            wide: false
        },
        {
            thumbnail: 'images/storyboard/storyboard_people_15.jpg',
            description: 'Stylize color rendering of a man with an axe lookinf at a big tree.',
            medium: 'Digitally created',
            maxdimension: '1920 pixels X 1080 pixels',
            price: '$250 USD per frame',
            animatic: '$300 USD per frame plus $50 per layer',
            wide: false
        },
        {
            thumbnail: 'images/storyboard/storyboard_people_16.jpg',
            description: 'Cartoon style rendering of Santa Claus shopping at a retail store',
            medium: 'Pencil and watercolor',
            maxdimension: '1920 pixels X 1080 pixels',
            price: '$150 USD per frame',
            animatic: '$200 USD per frame plus $50 per layer',
            wide: false
        },
        {
            thumbnail: 'images/storyboard/storyboard_people_18.jpg',
            description: 'Contemporary rendering of a woman wearing sunglasses with colorful palm trees.',
            medium: 'Digitally created',
            maxdimension: '1920 pixels X 1080 pixels',
            price: '$250 USD per frame',
            animatic: '$300 USD per frame plus $50 per layer',
            wide: false
        },
        {
            thumbnail: 'images/storyboard/storyboard_people_17.jpg',
            description: 'Stylize rendering of a man sitting working on a laptop listening to music',
            medium: 'DPencil and digital media',
            maxdimension: '1920 pixels X 1080 pixels',
            price: '$180 USD per frame',
            animatic: '$250 USD per frame plus $50 per layer',
            wide: false
        }
    ];

    (new ModalModel($('.pictures'), $('modal-picture'))).addCollection(data);
}());
