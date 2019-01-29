const cardData = [
  {
    id: 1,
    headline: "Testing headline",
    tab: "Apartments",
    img: "image goes here",
    author: "author field testing here",
    images: [
      {
        src:
          "https://losangeles.wpresidence.net/wp-content/uploads/2016/03/city_9-1-525x328.jpg"
      },
      {
        src:
          "https://losangeles.wpresidence.net/wp-content/uploads/2014/05/WPEstateImageAfter1013-525x328.jpg"
      },
      {
        src:
          "https://losangeles.wpresidence.net/wp-content/uploads/2014/05/WPEstateImageAfter0913-525x328.jpg"
      }
    ]
  },
  {
    id: 12,
    headline: "second Card Test headline",
    tab: "Apartments",
    img: "image goes here",
    author: "author field testing here",
    images: [
      {
        src:
          "https://losangeles.wpresidence.net/wp-content/uploads/2018/04/new-980x777.jpeg"
      },
      {
        src:
          "https://losangeles.wpresidence.net/wp-content/uploads/2014/05/WPEstateImageAfter0913-525x328.jpg"
      }
    ]
  },
  {
    id: 32,
    headline: "second Card Test headline",
    tab: "Apartments",
    img: "image goes here",
    author: "author field testing here",
    images: [
      {
        src:
          "https://losangeles.wpresidence.net/wp-content/uploads/2018/04/new-980x777.jpeg"
      },
      {
        src:
          "https://losangeles.wpresidence.net/wp-content/uploads/2014/05/WPEstateImageAfter0913-525x328.jpg"
      }
    ]
  },
  {
    id: 29,
    headline: "second Card Test headline",
    tab: "Apartments",
    img: "image goes here",
    author: "author field testing here",
    images: [
      {
        src:
          "https://losangeles.wpresidence.net/wp-content/uploads/2018/04/new-980x777.jpeg"
      },
      {
        src:
          "https://losangeles.wpresidence.net/wp-content/uploads/2014/05/WPEstateImageAfter0913-525x328.jpg"
      }
    ]
  },
  {
    id: 27,
    headline: "second Card Test headline",
    tab: "Apartments",
    img: "image goes here",
    author: "author field testing here",
    images: [
      {
        src:
          "https://losangeles.wpresidence.net/wp-content/uploads/2018/04/new-980x777.jpeg"
      },
      {
        src:
          "https://losangeles.wpresidence.net/wp-content/uploads/2014/05/WPEstateImageAfter0913-525x328.jpg"
      }
    ]
  },
  {
    id: 124,
    headline: "second Card Test headline",
    tab: "Apartments",
    img: "image goes here",
    author: "author field testing here",
    images: [
      {
        src:
          "https://losangeles.wpresidence.net/wp-content/uploads/2018/04/new-980x777.jpeg"
      },
      {
        src:
          "https://losangeles.wpresidence.net/wp-content/uploads/2014/05/WPEstateImageAfter0913-525x328.jpg"
      }
    ]
  },
  {
    id: 1211,
    headline: "second Card Test headline",
    tab: "Houses",
    img: "image goes here",
    author: "author field testing here",
    images: [
      {
        src:
          "https://losangeles.wpresidence.net/wp-content/uploads/2018/04/new-980x777.jpeg"
      },
      {
        src:
          "https://losangeles.wpresidence.net/wp-content/uploads/2014/05/WPEstateImageAfter0913-525x328.jpg"
      }
    ]
  },
  {
    id: 12111,
    headline: "second Card Test headline",
    tab: "Houses",
    img: "image goes here",
    author: "author field testing here",
    images: [
      {
        src:
          "https://losangeles.wpresidence.net/wp-content/uploads/2018/04/new-980x777.jpeg"
      },
      {
        src:
          "https://losangeles.wpresidence.net/wp-content/uploads/2014/05/WPEstateImageAfter0913-525x328.jpg"
      }
    ]
  },
  {
    id: 1241,
    headline: "second Card Test headline",
    tab: "Villas",
    img: "image goes here",
    author: "author field testing here",
    images: [
      {
        src:
          "https://losangeles.wpresidence.net/wp-content/uploads/2018/04/new-980x777.jpeg"
      },
      {
        src:
          "https://losangeles.wpresidence.net/wp-content/uploads/2014/05/WPEstateImageAfter0913-525x328.jpg"
      }
    ]
  },
  {
    id: 4,
    headline: "Testing headline",
    tab: "Retail",
    img: "image goes here",
    author: "author field testing here"
  },
  {
    id: 5,
    headline: "Testing headline",
    tab: "Land",
    img: "image goes here",
    author: "author field testing here"
  }
];

const initialState = {
  cardData
};
export default function listingReducer(state = initialState, action) {
  switch (action.type) {
    // case 'ACTION_TYPE':
    //   return code
    default:
      return state;
  }
}
