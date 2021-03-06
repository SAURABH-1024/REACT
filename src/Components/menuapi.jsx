const Menu = [{
        "id": 1,       category: "Breakfast",
        image: "https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "name": "Scrambled Eggs with Feta and Spinach",
        "Price":149,        "Description": "Creamy scrambled eggs with Feta cheese & spinach seasoned with salt & pepper",
  },
 {
        id: 2,
        category: "Breakfast",
        image: "https://images.pexels.com/photos/7020326/pexels-photo-7020326.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Smoked Salmon with Dill Hollandaise Eggs Benedict",
        Price: 240,
        Description: "Made with our in-house English Muffin, poached eggs, imported salmon and hollandaise sauce with dill",
    },
    {
        id: 3,
        category: "Breakfast",
        image: "https://images.pexels.com/photos/3702403/pexels-photo-3702403.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Jelly Berry ",
        Price: "₹49",
        Description: "Mini pancakes layered with cream cheese, cheesecake crumble, blueberries and grape jelly",
    },
    {
        id: 4,
        category: "Breakfast",
        image: "https://images.pexels.com/photos/7144669/pexels-photo-7144669.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Choco Banoffee 6pc",
        Price: "₹149",
        Description: "Mini Pancakes with banana, banoffee caramel and dark chocolate",
    },
    {
        id: 5,
        category: "Breakfast",
        image: "https://images.pexels.com/photos/69482/pexels-photo-69482.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Sprouted Moong Salad Chaat",
        Price: "₹125",
        Description: "[Calories: 135 kcal] Served with fresh nutritious vegetables and nachni fritters. Low in fat and high in vitamins and minerals. Aids digestion and helps in lowering high cholesterol level in blood, right choice for weight watchers.",
    },
    {
        id: 6,
        category: "Breakfast",
        image: "https://www.subbuskitchen.com/wp-content/uploads/2019/03/Idli-podi_web2-1300x867.jpg",
        name: "Milagai Podi Idli",
        Price: "₹99",
        Description: " Idli Podi (milagai podi) is a flavorful spicy chutney powder, which is mixed with ghee or sesame oil (gingelly oil) and served as an accompaniment with idli .",
    },
    {
        id: 7,
        category: "Breakfast",
        image: "https://aahaaramonline.com/wp-content/uploads/2020/08/Nagpur_Tarri_Poha.png",
        name: "Nagapuri Tarri Pohe",
        Price: "₹49",
        Description: "Tarri Poha is a delicious breakfast from Nagpur in Maharashtra that combines Kanda Pohe with a spicy chana-based gravy called the Tarri.",
    },
    {
        id: 8,
        category: "Breakfast",
        image: "https://www.vegrecipesofindia.com/wp-content/uploads/2018/01/indori-poha-recipe.jpg",
        name: "Indori Pohe",
        Price: "₹49",
        Description: "Household dish served with coriander and slice of lime.",
    },
    {
        id: 9,
        category: "Breakfast",
        image: "https://www.vegrecipesofindia.com/wp-content/uploads/2011/06/misal-pav.jpg",
        name: " Misal",
        Price: "₹79",
        Description: "Comes with farsan, potato sabji and mataki along with onion, corinder, lemon and 2 Slices",
    },
    {
        id: 10,
        category: "Breakfast",
        image: "https://i.ytimg.com/vi/7q5EkCgcYcE/maxresdefault.jpg",
        name: "Nutritious Daliya",
        Price: "₹90",
        Description: "[Calories: 235 kcal] Served with goodness of carrots, corns and tomatoes. A complex carbohydrate breakfast cereal low in fat and high in fiber good for diabetics and an ideal solution to combat constipation and obesity.",
    },
    {
        id: 11,
        category: "Breakfast",
        image: "https://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Spinach-Thalipeeth.jpg",
        name: "Thalipith with Veggies",
        Price: 279,
        Description: "[Calories: 175 kcal] Served with low fat yoghurt mint chutney. A multigrain cereal enriched with fibrous veggies such as spinach, carrots and cabbage. Rich source of complex carbohydrates, fiber, vitamins and minerals.",
    },

    {
        id: 12,
        category: "Lunch",
        image: "data:image/jpeg;base64,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",
        name: "Sampurna Thali",
        Price: "₹290",
        Description: "Paneer Butter Masala+Mix Veg+Dal Fry+Jeera Rice+Achar+Rasgulla [1 Piece]+2 Paratha+Salad",
    },

    {
        id: 13,
        category: "Lunch",
        image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/palak-paneer-1.jpg",
        name: " Palak Paneer",
        Price: "₹329",
        Description: "Palak paneer is a classic curry dish from North Indian cuisine made with fresh spinach, onions, spices, paneer and herbs",
    },
    {
        id: 14,
        category: "Lunch",
        image: "https://www.positivenewstrends.com/wp-content/uploads/2017/08/Makhmali_Chicken_Kebab_T-e1502345763663.png",
        name: "Murg Makhmali Tikka",
        Price: "₹490",
        Description: "MUST TRY..CHEF'S SPECIAL.. Boneless creamy chicken combined the joy of traditional kebab cheddar cheese and finish in clay pot. ",
    },
    {
        id: 15,
        category: "Lunch",
        image: "https://i2.wp.com/curryandvanilla.com/wp-content/uploads/2017/01/masoor-dal-tadka2.jpg?w=816&ssl=1",
        name: "Dal Tadkewali",
        Price: "₹349",
        Description: "Wholesome yellow toor dal tempered with home made butter, whole red chilly and cumin.",
    },
    {
        id: 16,
        category: "Lunch",
        image: "https://i0.wp.com/www.flourandspiceblog.com/wp-content/uploads/2020/05/Mutton-Handi-1.jpg?w=924&ssl=1",
        name: "Mutton Handi",
        Price: "₹599",
        Description: "This gravy has a dominance of onion, garlic, ginger paste and delicately prepared in tomato and onion gravy.",
    },
    {
        id: 17,
        category: "Lunch",
        image: "https://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Khaas_Seekh.jpg",
        name: "Murg Tikka Khaas",
        Price: "₹489",
        Description: "Boneless leg of chicken marinated with ginger, garlic, cinnamon stick, red chillies and yogurt grilled in tandoor.",
    },
    {
        id: 18,
        category: "Lunch",
        image: "https://hebbarskitchen.com/wp-content/uploads/mainPhotos/paneer-lababdar-recipe-how-to-make-restaurant-style-paneer-lababdar-1-768x1152.jpeg",
        name: "Paneer Nawabi Lacchader",
        Price: "₹429",
        Description: "Grated cottage cheese cooked with mouth watering Chefs special spicy gravy. ",
    },
    {
        id: 19,
        category: "Lunch",
        image: "https://www.vegrecipesofindia.com/wp-content/uploads/2014/11/veg-diwani-handi.jpg",
        name: "Dum Subz Handi",
        Price: "₹409",
        Description: "A vegetarian delight prepared from vegtables with a masalader gravy in nawabi style of dum cooking garnish with yellow butter",
    },
    {
        id: 20,
        category: "Lunch",
        image: "https://b.zmtcdn.com/data/pictures/6/18365236/55c735de93f2f550d0ffbe8cc24638cd.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        name: "Tandoori Angar",
        Price: "₹399",
        Description: "A combination of mushroom, baby corn, baby potatoes with capsicum and tomato grilled in tandoor.",
    },
    {
        id: 21,
        category: "Lunch",
        image: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/02/paneer-lababdar.jpg",
        name: "Paneer Kofta Lababdar",
        Price: "₹380",
        Description: "Succulent paneer dumpling cooked in medium spicy red gravy with special indian spices.",
    },

    {
        id: 22,
        category: "Snacks",
        image: "https://www.vegrecipesofindia.com/wp-content/uploads/2010/08/pani-puri-recipe.jpg",
        name: "Pani Puri",
        Price: "₹89",
        Description: " A hollow, crispy-fried puffed ball that is filled with potato, chickpeas, onions, spices, and flavoured water, usually tamarind or mint, and popped into one's mouth whole.",
    },
    {
        id: 23,
        category: "Snacks",
        image: "https://static.toiimg.com/thumb/52727664.cms?imgsize=126219&width=509&height=340",
        name: "Dahi Papdi Chaat",
        Price: "₹109",
        Description: "An easy and quick yoghurt based chaat recipe made with deep-fried flat puri with other chaat chutneys",
    },
    {
        id: 24,
        category: "Snacks",
        image: "https://production-media.gousto.co.uk/cms/mood-image/2598---Peri-Peri-Steak-Prego-Roll-With-Cheesy-Chips-7404-1581515373933-x700.jpg",
        name: "Peri Peri Fries with Cheddar Cheese",
        Price: "₹139",
        Description: "Perfect fusion shredded chicken with peri peri fries topped with schezwan chilli garlic mustard and mayo sauce garnished with mozzarella cheese",
    },
    {
        id: 25,
        category: "Snacks",
        image: "https://i2.wp.com/vegecravings.com/wp-content/uploads/2018/06/Bhel-Puri-Recipe-Step-By-Step-Instructions.jpg?w=1972&quality=65&strip=all&ssl=1",
        name: "Kurmuri Choupati Bhel",
        Price: "₹89",
        Description: "  Indian snack made with puffed rice, vegetables like boiled potatoes, tomatoes & onions, flavored with tangy chutneys.",
    },
    {
        id: 26,
        category: "Snacks",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Kachoris_-_Kolkata_2012-01-13_8321.JPG/375px-Kachoris_-_Kolkata_2012-01-13_8321.JPG",
        name: "Kachori",
        Price: "₹159",
        Description: "spicy Indian snack shaped like a round flattened ball, consisting of a flour-based shell with different fillings",
    },
    {
        id: 27,
        category: "Snacks",
        image: "https://images.pexels.com/photos/4394612/pexels-photo-4394612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Maximus Chicken Pizza-Medium + Chicken Tikka and Kheema Pizza-Medium ",
        Price: "₹599",
        Description: "Sausages, meatballs, kheema and barbeque chicken- welcome to the Chicken lovers paradise! Enjoy the standout combo of Chicken Maximus and Chicken Tikka and Kheema Pizza for just ₹599.",
    },
    {
        id: 28,
        category: "Snacks",
        image: "https://images.pexels.com/photos/4203043/pexels-photo-4203043.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Maharaja Veg Pizza-Medium + Garden Fresh Veggie Pizza-Medium",
        Price: "₹539",
        Description: "Two loaded pizzas with a generous spread of paneer chunks, delicious veggies and the choice of 4 cheese flavours. Grab this standout combo for just ₹539.",
    },
    {
        id: 29,
        category: "Snacks",
        image: "https://product-assets.faasos.io/production/product/image_1631083983803_Garlic%20Bread.jpg?d=500",
        name: "Cheese Infused Garlic Bread (with Free Cheese Dip)",
        Price: "₹135",
        Description: "Fresh flatbread baked with garlic butter and chefs secret seasoning, infused with creamy el-classico cheese. Served with a cheese dip to make it an extra cheesy affair!",
    },
    {
        id: 30,
        category: "Snacks",
        image: "https://images.pexels.com/photos/5446513/pexels-photo-5446513.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Grilled Chicken Sandwich",
        Price: "₹150",
        Description: "Delicious and tender grilled chicken, Onion, tomato and mayonnaise sandwiched between two slices of toasted Bread served with potato wafers on the side.",
    },
    {
        id: 31,
        category: "Snacks",
        image: "https://images.pexels.com/photos/5412341/pexels-photo-5412341.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Choco Chips Pastry [1 Piece]",
        Price: "₹80",
        Description: "A soft chocolate cake loaded with crunchy choco chips which gives it an intense flavour and is an all time favorite.",
    },
    {
        id: 32,
        category: "Snacks",
        image: "https://images.pexels.com/photos/6896379/pexels-photo-6896379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Chicken Burger",
        Price: "₹140",
        Description: "Classic burger with Chicken patty, onion, tomato, cucumber stuffed between Bread Bun served with chips on the side.",
    },

    {
        id: 33,
        category: "Dinner",
        image: "https://images.pexels.com/photos/4105296/pexels-photo-4105296.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Grilled Marinated Fish with Tropical Salsa and Coconut Rice",
        Price: "₹575",
        Description: "Fish steak marinated in coriander, lime and orange juice. Grilled and served with delicate coconut rice and a warm tropical salsa.",
    },

    {
        id: 34,
        category: "Dinner",
        image: "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Alfredo Pasta",
        Price: "₹459",
        Description: "A rich cream sauce with parmigiano reggiano.",
    },

    {
        id: 35,
        category: "Dinner",
        image: "https://assets.bonappetit.com/photos/5b919cad88eba1255e6ea7cf/16:9/w_1920,c_limit/basically-broccoli-and-quinoa-salad.jpg",
        name: "California Quinoa, Broccoli and Walnut Salad",
        Price: "₹279",
        Description: "Roasted and steamed quinoa with cranberry, broccoli, walnut and spring onions",
    },
    {
        id: 36,
        category: "Dinner",
        image: "https://images.pexels.com/photos/8964264/pexels-photo-8964264.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: " Roasted Tomato, Beetroot and Garlic Soup",
        Price: "₹240",
        Description: "Flavourful and wholesome. Tomato, beetroot and garlic pods dry roasted in the oven, pureed and served with herby croutons.",
    },
    {
        id: 37,
        category: "Dinner",
        image: "https://images.pexels.com/photos/1001773/pexels-photo-1001773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        name: " Chicken Chilli Basil Noodles",
        Price: "₹249",
        Description: "Wok-tossed noodles with shredded chicken in spicy chilli and basil is sure to tempt your tastebuds.",
    },
    {
        id: 38,
        category: "Dinner",
        image: "https://images.pexels.com/photos/6599106/pexels-photo-6599106.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: " Veg Manchurian Gravy",
        Price: "₹299",
        Description: "Fresh vegetable balls deep fried and tossed in soupy Hot & manchurian gravy is a perfect Indo-Chinese blend indeed. Goes best with fried rice.",
    },
    {
        id: 39,
        category: "Dinner",
        image: "https://images.pexels.com/photos/5338146/pexels-photo-5338146.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Shanghai Chicken and Hakka Noodles",
        Price: "₹299",
        Description: "[Served with Kimchi, Schezwan Dip] Wok-tossed hakka noodles with julienned vegetables served with succulent fried chicken in a sweet and spicy Shanghai sauce will leave you wanting for more..",
    },
    {
        id: 40,
        category: "Dinner",
        image: "https://images.pexels.com/photos/10296229/pexels-photo-10296229.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Oyster Chicken with Burnt Garlic Rice",
        Price: "₹259",
        Description: "Chicken cooked in oyster sauce with crunchy peppers and onions with a bowl full of burnt garlic rice. A meal of the Legends!",
    },
];

export default Menu;