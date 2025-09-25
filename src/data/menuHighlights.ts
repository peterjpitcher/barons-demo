export type MenuSection = {
  title: string;
  items: {
    name: string;
    price?: string;
    description: string;
    dietary?: string[];
  }[];
};

export const menuSections: MenuSection[] = [
  {
    title: 'Nibbles & Bar Snacks',
    items: [
      {
        name: 'Crispy Chicken Goujons',
        price: '6.50 / 12.75 / 19.95',
        description: 'Pick tangy BBQ or hot Firecracker sauce. Available as 5, 10 or 20 pieces.',
      },
      {
        name: 'Corn Ribs (NGCI)',
        price: '5.95 / 10.50 / 18.95',
        description: 'Quartered corn on the cob with house spice, sweet chilli dip, coriander and lime.',
        dietary: ['NGCI'],
      },
      {
        name: 'Duck Gyozas',
        price: '6.95',
        description: 'Crispy dumplings with soy dip, spring onions and red chilli.',
      },
    ],
  },
  {
    title: 'Pub Favourites',
    items: [
      {
        name: 'Aromatic Makhani Curry',
        price: '16.95 / 15.95',
        description: 'Butter-rich tomato sauce with spiced chicken or roasted paneer, fragrant rice and coriander.',
      },
      {
        name: 'Homemade Fish Pie',
        price: '19.50',
        description: 'Salmon, haddock and prawns under creamy mash, served with seasonal vegetables.',
      },
      {
        name: 'Slow-Cooked Beef Lasagne',
        price: '17.95',
        description: 'Layered with mozzarella and parmesan, served with garlic ciabatta and dressed leaves.',
      },
    ],
  },
  {
    title: 'Burgers & Grills',
    items: [
      {
        name: 'The Ultimate Burger',
        price: '20.95',
        description: 'Triple stack with bacon, melting Cheddar, burger sauce, onion rings and skin-on fries.',
      },
      {
        name: 'Cajun Chicken & Ribs Combo',
        price: '22.50',
        description: 'Half rack of BBQ ribs, Cajun chicken breast, coleslaw and skin-on fries.',
      },
    ],
  },
  {
    title: 'Brunch & Breakfast',
    items: [
      {
        name: 'Smashed Avocado & Feta on Toast',
        price: '11.95',
        description: 'Roasted cherry tomatoes, rocket and basil dressing on toasted sourdough.',
        dietary: ['V'],
      },
      {
        name: 'Confit Duck & Waffle',
        price: '18.95',
        description: 'Crispy duck leg, fried egg and maple-flavoured syrup — savoury meets sweet.',
      },
      {
        name: 'Breakfast Quesadilla',
        price: '6.95',
        description: 'Cheese and red onion tortilla topped with guacamole, salsa and fried egg.',
        dietary: ['V'],
      },
    ],
  },
  {
    title: 'Sides to share',
    items: [
      {
        name: 'Halloumi Fries',
        price: '7.50',
        description: 'Mint yoghurt and pomegranate seeds for dipping.',
        dietary: ['V'],
      },
      {
        name: 'Garlic Pizza Bread',
        price: '6.95 / 9.95',
        description: 'Hand-stretched sourdough brushed with plant-based garlic butter. Add mozzarella or vegan cheese.',
        dietary: ['V'],
      },
    ],
  },
  {
    title: 'Puddings',
    items: [
      {
        name: 'Sticky Toffee Pudding',
        price: '8.50',
        description: 'Warm toffee sauce with clotted cream — pure comfort.',
      },
      {
        name: 'Biscoff Cheesecake (Ve)',
        price: '8.75',
        description: 'Rich vegan cheesecake topped with Biscoff sauce and dairy-free vanilla ice cream.',
        dietary: ['Vegan'],
      },
      {
        name: 'Chocolate Brownie (NGCI)',
        price: '8.50',
        description: 'Served warm with vanilla ice cream and chocolate sauce.',
        dietary: ['NGCI'],
      },
    ],
  },
  {
    title: 'Hot drinks & shakes',
    items: [
      {
        name: 'Strawberry Shortbread Milkshake',
        price: '5.95',
        description: 'Fresh strawberries and ice cream blended with buttery shortbread, finished with whipped cream.',
      },
      {
        name: 'Cappuccino',
        price: '3.95',
        description: 'Ground beans with foamed milk. Oat and soya alternatives always available.',
        dietary: ['V'],
      },
    ],
  },
];
