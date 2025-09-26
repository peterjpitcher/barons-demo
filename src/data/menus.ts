import type { SeasonKey } from '@/config/seasons';

export type MenuItem = {
  name: string;
  price?: string;
  description?: string;
  dietary?: string[];
  calories?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
  season?: SeasonKey | 'all';
};

export const allDayMenu: MenuCategory[] = [
  {
    id: 'nibbles',
    title: 'Nibbles & Bar Snacks',
    subtitle: 'Perfect with a pre-dinner spritz',
    items: [
      {
        name: 'Crispy Chicken Goujons',
        price: '6.50 / 12.75 / 19.95',
        description: 'Tangy BBQ or hot Firecracker sauce. 5 / 10 / 20 pieces.',
      },
      {
        name: 'Corn Ribs',
        price: '5.95 / 10.50 / 18.95',
        description: 'Lightly spiced with sweet chilli dip, coriander & lime.',
        dietary: ['NGCI'],
      },
      {
        name: 'Halloumi Fries',
        price: '7.50',
        description: 'Mint yoghurt and pomegranate seeds.',
        dietary: ['V'],
      },
      {
        name: 'Duck Gyozas',
        price: '6.95',
        description: 'Crispy dumplings, soy dip, spring onion & chilli.',
      },
    ],
  },
  {
    id: 'starters',
    title: 'Starters & Small Plates',
    items: [
      {
        name: 'Classic Prawn Cocktail',
        price: '8.95',
        description: 'Marie Rose, iceberg lettuce, buttered granary bread.',
      },
      {
        name: 'Loaded Potato Skins',
        price: '7.75',
        description: 'Choose bacon & cheese or red onion & cheese with sour cream.',
      },
      {
        name: 'Malaysian Chicken Satay',
        price: '8.50',
        description: 'Peanut sauce, cucumber and sesame seeds.',
      },
      {
        name: 'Garlic Pizza Bread',
        price: '6.95 / 9.95',
        description: 'Hand-stretched sourdough, garlic butter. Add mozzarella or vegan cheese.',
      },
    ],
  },
  {
    id: 'pub-favourites',
    title: 'Pub Favourites',
    items: [
      {
        name: 'Fish & Chips',
        price: '18.95',
        description: 'Fresh haddock, skin-on fries, peas, tartare sauce.',
      },
      {
        name: 'Aromatic Makhani Curry',
        price: '16.95 / 15.95',
        description: 'Spiced chicken or paneer, tomato butter sauce, basmati rice.',
      },
      {
        name: 'Slow-Cooked Beef Lasagne',
        price: '17.95',
        description: 'Mozzarella, parmesan, garlic ciabatta and dressed leaves.',
      },
      {
        name: 'Confit Duck, Peppercorn Sauce',
        price: '20.95',
        description: 'Potato dauphinoise and seasonal greens.',
      },
    ],
  },
  {
    id: 'burgers',
    title: 'Burgers & Grills',
    items: [
      {
        name: 'The Ultimate Burger',
        price: '20.95',
        description: 'Triple stack, bacon, melting Cheddar, onion rings, burger sauce, fries.',
      },
      {
        name: 'Barons Veggie Burger',
        price: '17.95',
        description: 'Mushrooms, melted cheese, fried onions, brioche bun and fries.',
        dietary: ['V'],
      },
      {
        name: '8oz Sirloin Steak',
        price: '26.95',
        description: 'Chunky chips, roast tomato, field mushroom, peppercorn sauce.',
      },
    ],
  },
  {
    id: 'sunday',
    title: 'Sunday Carvery',
    subtitle: 'Served 12 noon – 5pm every Sunday',
    items: [
      {
        name: 'Carvery Plate',
        description: 'Roast beef, pork crackling, chicken or veggie wellington with giant Yorkshires and seasonal veg.',
      },
      {
        name: 'Carvery Sides',
        description: 'Cauliflower cheese, roasted roots, crispy roast potatoes, gravy boats aplenty.',
      },
      {
        name: 'Kids Carvery',
        price: '8.95',
        description: 'Smaller plate with choice of roast and vegetables.',
      },
    ],
  },
];

type SpecialMenuGroup = {
  key: string;
  title: string;
  description: string;
  categories: MenuCategory[];
  downloadHref?: string;
  season?: SeasonKey | 'all';
};

export const brunchMenu: SpecialMenuGroup = {
  key: 'brunch',
  title: 'Brunch & Breakfast',
  description: 'Served daily from 9am — perfect after a Horsell Common walk.',
  downloadHref: '/pdf/brunch-menu.pdf',
  categories: [
    {
      id: 'brunch-savoury',
      title: 'Brunch favourites',
      items: [
        {
          name: 'Smashed Avocado & Feta on Toast',
          price: '11.95',
          description: 'Roasted cherry tomatoes, rocket, basil dressing on sourdough.',
          dietary: ['V'],
        },
        {
          name: 'Confit Duck & Waffle',
          price: '18.95',
          description: 'Crispy duck leg, fried egg, maple-flavoured syrup.',
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
      id: 'brunch-sweet',
      title: 'Sweet plates',
      items: [
        {
          name: 'Breakfast Waffles',
          price: '8.95',
          description: 'Strawberries, natural yoghurt, honey drizzle.',
          dietary: ['V'],
        },
        {
          name: 'Chocolate Cookie Sundae',
          price: '8.50',
          description: 'Vanilla & chocolate ice cream, whipped cream, warm fudge sauce.',
        },
      ],
    },
  ],
};

export const dessertMenu: SpecialMenuGroup = {
  key: 'desserts',
  title: 'Puddings & shakes',
  description: 'Showstoppers to finish the meal or take centre stage on dessert tables.',
  downloadHref: '/pdf/puddings.pdf',
  categories: [
    {
      id: 'puddings',
      title: 'Puddings',
      items: [
        {
          name: 'Sticky Toffee Pudding',
          price: '8.50',
          description: 'Served warm with toffee sauce and clotted cream.',
        },
        {
          name: 'Biscoff Cheesecake (V)',
          price: '8.75',
          description: 'Vegan cheesecake, caramel ripple, dairy-free vanilla ice cream.',
          dietary: ['Vegan'],
        },
        {
          name: 'Spiced Apple & Cinnamon Crumble',
          price: '7.95',
          description: "Pour-your-own hot custard, perfect for sharing.",
        },
        {
          name: 'Mini Pudding & Hot Drink',
          price: '6.95',
          description: 'Choose brownie, pavlova or crumble with your favourite coffee.',
        },
      ],
    },
    {
      id: 'drinks',
      title: 'Hot drinks & milkshakes',
      items: [
        {
          name: 'Strawberry Shortbread Milkshake',
          price: '5.95',
          description: 'Fresh strawberries and shortbread blended with ice cream, topped with whipped cream.',
        },
        {
          name: 'Vanilla Caramel Shake (Ve)',
          price: '5.95',
          description: 'Vegan vanilla ice cream, soya milk, vegan whipped cream and caramel drizzle.',
          dietary: ['Vegan'],
        },
        {
          name: 'Cappuccino',
          price: '3.95',
          description: 'Freshly ground beans with foamed milk. Oat/soya on request.',
          dietary: ['V'],
        },
        {
          name: 'Hot Chocolate',
          price: '4.25',
          description: 'Milk, soya or oat milk base — add whipped cream or marshmallows.',
        },
      ],
    },
  ],
};

export const festiveMenus: SpecialMenuGroup = {
  key: 'festive',
  title: 'Festive dining',
  description: 'December celebrations, Christmas Day lunch and buffet feasts.',
  downloadHref: '/pdf/christmas-celebration.pdf',
  season: 'christmas',
  categories: [
    {
      id: 'christmas-day',
      title: 'Christmas Day Lunch',
      items: [
        {
          name: 'Hand-carved Pancetta-wrapped Turkey Breast',
          description: 'Roast potatoes, pigs in blankets, honeyed carrots and rich gravy.',
        },
        {
          name: 'Beef Fillet Wellington',
          description: 'Truffled mash, glazed chestnuts, red wine jus.',
        },
        {
          name: 'Festive Butternut Squash & Chestnut Strudel',
          description: 'Cranberry relish, roasted winter greens (Ve).',
          dietary: ['Vegan'],
        },
        {
          name: 'Classic Christmas Pudding',
          description: 'Brandy custard, orange crème fraîche.',
        },
      ],
    },
    {
      id: 'party-buffet',
      title: 'Party buffet favourites',
      items: [
        {
          name: 'BBQ Pork Ribs',
          description: 'Served with cajun wedges and slaw.',
        },
        {
          name: 'Loaded Nachos',
          description: 'Cheddar, salsa, sour cream, jalapeños and guacamole (Ve option available).',
          dietary: ['V'],
        },
        {
          name: 'Turkish-inspired Mezze',
          description: 'Falafel, hummus, flatbreads and pickled veg (Ve).',
          dietary: ['Vegan'],
        },
      ],
    },
  ],
};

export const pizzaShackMenu: SpecialMenuGroup = {
  key: 'pizza-shack',
  title: 'Pizza Shack',
  description: 'Hand-stretched sourdough pizzas from our garden shack — walk-ups or pre-order.',
  downloadHref: '/pdf/pizza-shack.pdf',
  categories: [
    {
      id: 'pizzas',
      title: 'Signature pizzas',
      items: [
        {
          name: 'Garden Margherita',
          price: '12.00',
          description: 'San Marzano tomato, fior di latte, fresh basil and olive oil.',
          dietary: ['V'],
        },
        {
          name: 'Smoky Barbecue Chicken',
          price: '13.50',
          description: 'BBQ sauce, shredded chicken, red peppers, mozzarella & rocket.',
        },
        {
          name: 'Spiced Veggie Jackfruit',
          price: '13.00',
          description: 'BBQ jackfruit, red onion, jalapeños, coriander (Ve).',
          dietary: ['Vegan'],
        },
      ],
    },
  ],
};

export const eventBuffetMenu: SpecialMenuGroup = {
  key: 'event-buffet',
  title: 'Events & buffets',
  description: 'Menus designed for wakes, celebrations of life, parties and corporate gatherings.',
  downloadHref: '/pdf/party-buffet.pdf',
  categories: [
    {
      id: 'buffet',
      title: 'Buffet selections',
      items: [
        {
          name: 'Afternoon Tea Spread',
          description: 'Finger sandwiches, sausage rolls, patisserie bites.',
        },
        {
          name: 'Fork Buffet',
          description: 'Roast meats, salmon platters, seasonal salads and artisan breads.',
        },
        {
          name: 'BBQ Banquet',
          description: 'Flame-grilled burgers, skewers and summer salads.',
        },
      ],
    },
  ],
};

export const childrenMenu: SpecialMenuGroup = {
  key: 'children',
  title: "Children's favourites",
  description: 'Smaller plates for young diners — also available as half portions of classics.',
  downloadHref: '/pdf/childrens-menu.pdf',
  categories: [
    {
      id: 'kids',
      title: 'For little ones',
      items: [
        {
          name: 'Mini Fish & Chips',
          price: '7.25',
          description: 'Crispy haddock goujons, peas and fries.',
        },
        {
          name: 'Build Your Own Pizza',
          price: '6.95',
          description: 'Choose toppings from cheese, ham, sweetcorn, peppers.',
        },
        {
          name: 'Chicken Goujons',
          price: '7.25',
          description: 'Skin-on fries, veggie sticks and ketchup.',
        },
      ],
    },
  ],
};

export const menuDownloads = [
  { label: 'Full main menu', href: '/pdf/main-menu.pdf' },
  { label: 'Set lunch menu', href: '/pdf/set-lunch.pdf' },
  { label: 'Set menu – events dining', href: '/pdf/set-menu-events.pdf' },
  { label: 'Fork buffet options', href: '/pdf/fork-buffet.pdf' },
  { label: 'Afternoon buffet', href: '/pdf/afternoon-buffet.pdf' },
  { label: 'Party buffet packages', href: '/pdf/party-buffet.pdf' },
  { label: 'BBQ menu', href: '/pdf/bbq-menu.pdf' },
  { label: 'Pizza feast sharing menu', href: '/pdf/pizza-feast.pdf' },
  { label: 'Pizza Shack menu', href: '/pdf/pizza-shack.pdf' },
  { label: 'Brunch & breakfast', href: '/pdf/brunch-menu.pdf' },
  { label: "Children's favourites", href: '/pdf/childrens-menu.pdf' },
  { label: "Children's brunch", href: '/pdf/childrens-brunch.pdf' },
  { label: 'Desserts & shakes', href: '/pdf/puddings.pdf' },
  { label: 'Drinks list', href: '/pdf/drinks-menu.pdf' },
  { label: 'Festive buffet', href: '/pdf/festive-buffet.pdf' },
  { label: 'Christmas celebrations', href: '/pdf/christmas-celebration.pdf' },
  { label: 'Christmas Day carvery & kids', href: '/pdf/christmas-day-carvery.pdf' },
  { label: 'Festive opening hours', href: '/pdf/festive-opening-hours.pdf' },
];
