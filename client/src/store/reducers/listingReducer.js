import { GET_LIST_ID } from "../actions/listingAction";
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
    id: 12222222222,
    headline: "Testing headline",
    tab: "Retail",
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
    id: 1111111,
    headline: "Testing headline",
    tab: "Land",
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
  }
];

const initialState = {
  cardData,
  listId: 1
};
export default function listingReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LIST_ID:
      return {
        ...state,
        listId: action.id
      };
    default:
      return state;
  }
}
