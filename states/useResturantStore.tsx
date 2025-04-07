import { create } from 'zustand';

interface Restaurant {
  logo: any;
  food: { [key: string]: any };
}

interface ResturantDisplay {
  name: string;
  logo: any;
}

interface ResturantStore {
  resturants: { [key: string]: Restaurant }; // Remove the | null to make it non-nullable
  resturantsDisplay: ResturantDisplay[];
  setResturantsDisplay: (resturants: { [key: string]: Restaurant }) => void;
}


export const useResturantStore = create<ResturantStore>((set) => {
  const resturants: { [key: string]: Restaurant } = {
    "Restaurant A": {
      logo: require('@/assets/images/5493254.jpg'),
      food: {
        "Fried Chicken": { image: require('@/assets/images/chicken-skewers-with-slices-sweet-peppers-dill.jpg'), price: 'N2,000' },
        "Grilled Fish": { image: require('@/assets/images/lamb-steak-pieces-with-sauces-grilled-pepper-fresh-salad-wooden-board.jpg'), price: 'N2,500' },
        "Salad Bowl": { image: require('@/assets/images/chicken-chop-french-fries-wooden-board.jpg'), price: 'N3,000' },
      },
    },
    "Restaurant B": {
      logo: require('@/assets/images/5526265.jpg'),
      food: {
        "Burger Deluxe": { image: require('@/assets/images/delicious-homemade-sandwich-ketchup-fries-chicken-nuggets-black-board-gray-surface.jpg'), price: 'N1,800' },
        "Kechup and Fries": { image: require('@/assets/images/crispy-french-fries-with-ketchup-mayonnaise.jpg'), price: 'N3,500' },
        "Veggie Wrap": { image: require('@/assets/images/side-view-shawarma-with-fried-potatoes-board-cookware.jpg'), price: 'N1,200' },
      },
    },
    "Restaurant C": {
      logo: require('@/assets/images/5528439.jpg'),
      food: {
        "Pasta Alfredo": { image: require('@/assets/images/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table.jpg'), price: 'N2,200' },
        "Tacos": { image: require('@/assets/images/delicious-tacos-studio.jpg'), price: 'N1,500' },
        "Chicken Wings": { image: require('@/assets/images/close-up-delicious-chicken-meal.jpg'), price: 'N2,700' },
      },
    },
    "Restaurant D": {
      logo: require('@/assets/images/7309589.jpg'),
      food: {
        "Sushi Rolls": { image: require('@/assets/images/close-up-plate-with-sushi.jpg'), price: 'N4,500' },
        "Tempura": { image: require('@/assets/images/side-view-tempura-shrimps-with-sweet-chili-sauce-board.jpg'), price: 'N4,000' },
        "Ramen": { image: require('@/assets/images/close-up-delicious-asian-food.jpg'), price: 'N3,500' },
      },
    },
    "Restaurant E": {
      logo: require('@/assets/images/7673229.jpg'),
      food: {
        "Pizza Margherita": { image: require('@/assets/images/delicious-epic-food-presentation.jpg'), price: 'N3,200' },
        "Spaghetti Bolognese": { image: require('@/assets/images/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table (1).jpg'), price: 'N2,800' },
        "Garlic Bread": { image: require('@/assets/images/sandevil-sandh-BRMvT4sw-4c-unsplash.jpg'), price: 'N900' },
      },
    },
    "Restaurant F": {
      logo: require('@/assets/images/7697984.jpg'),
      food: {
        "Fish Tacos": { image: require('@/assets/images/jackie-alexander-u4HrHXORXNo-unsplash.jpg'), price: 'N2,300' },
        "Seafood Paella": { image: require('@/assets/images/douglas-lopez-4B0cLMtJxWw-unsplash.jpg'), price: 'N5,200' },
        "Shrimp Skewers": { image: require('@/assets/images/clark-douglas-HhEfe0DeMiA-unsplash.jpg'), price: 'N2,700' },
      },
    },
    "Restaurant G": {
      logo: require('@/assets/images/10417681.jpg'),
      food: {
        "Chicken Parmesan": { image: require('@/assets/images/solo-seafood-lu_AE4Tbqko-unsplash.jpg'), price: 'N3,800' },
        "Caesar Salad": { image: require('@/assets/images/chris-tweten-FK-UKNip0pE-unsplash.jpg'), price: 'N2,000' },
        "Jellof rice": { image: require('@/assets/images/markus-winkler-ysxmxPaeiIc-unsplash.jpg'), price: 'N800' },
      },
    },
    "Restaurant H": {
      logo: require('@/assets/images/te758.jpg'),
      food: {
        "Pad Thai": { image: require('@/assets/images/john-aledia-_wBJ0cvKhIE-unsplash.jpg'), price: 'N2,600' },
        "Green Curry": { image: require('@/assets/images/you-le-JTTxGQaFZKw-unsplash.jpg'), price: 'N3,300' },
        "Spring Rolls": { image: require('@/assets/images/side-view-shawarma-with-fried-potatoes-board-cookware.jpg'), price: 'N1,500' },
      },
    },
    "Restaurant I": {
      logo: require('@/assets/images/OOAD5V0.jpg'),
      food: {
        "Falafel Wrap": { image: require('@/assets/images/budi-puspa-wijaya-1ugpo9WYPXs-unsplash.jpg'), price: 'N1,800' },
        "Shawarma": { image: require('@/assets/images/eugene-kucheruk-TvcjBk5y0wU-unsplash.jpg'), price: 'N2,500' },
        "Hummus and Pita": { image: require('@/assets/images/riddhi-k-enRLKyJLxrk-unsplash.jpg'), price: 'N1,000' },
      },
    },
  };

  const resturantsDisplay = Object.keys(resturants).map((key) => ({
    name: key,
    logo: resturants[key].logo,
  }));

  return {
    resturants,
    resturantsDisplay,
    setResturantsDisplay: (resturants) => {
      const resturantsDisplay = Object.keys(resturants).map((key) => ({
        name: key,
        logo: resturants[key].logo,
      }));
      set({ resturants, resturantsDisplay });
    },
  };
});

