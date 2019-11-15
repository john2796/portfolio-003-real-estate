import { GET_LIST_ID } from "../actions/listingAction"
import city_1 from "../../assets/city_1.jpg"
import city_2 from "../../assets/city_2.jpg"
import city_3 from "../../assets/city_3.jpg"
import house_1 from "../../assets/house_1.jpg"
import house_2 from "../../assets/house_2.jpg"
import house_3 from "../../assets/house_3.jpg"
import house_4 from "../../assets/house_4.jpg"
import house_5 from "../../assets/house_5.jpg"
import house_6 from "../../assets/house_6.jpg"

const cardData = [
  {
    id: 1,
    headline: "Testing headline",
    tab: "Apartments",
    img: "image goes here",
    author: "author field testing here",
    images: [
      {
        src: city_1
      },
      {
        src: city_2
      },
      {
        src: city_3
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
        src: house_1
      },
      {
        src: house_2
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
        src: house_3
      },
      {
        src: house_4
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
        src: city_1
      },
      {
        src: city_2
      },
      {
        src: city_3
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
        src: city_1
      },
      {
        src: city_2
      },
      {
        src: city_3
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
        src: house_1
      },
      {
        src: house_2
      },
      {
        src: house_3
      },
      {
        src: house_4
      },
      {
        src: house_5
      },
      {
        src: house_6
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
        src: house_3
      },
      {
        src: house_4
      },
      {
        src: house_5
      },
      {
        src: house_6
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
        src: house_1
      },
      {
        src: house_2
      },
      {
        src: house_3
      },
      {
        src: house_6
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
        src: house_4
      },
      {
        src: house_5
      },
      {
        src: house_6
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
        src: house_3
      },
      {
        src: house_4
      },
      {
        src: house_5
      },
      {
        src: house_6
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
        src: house_1
      },
      {
        src: house_2
      },
      {
        src: house_3
      },
      {
        src: house_4
      },
      {
        src: house_5
      },
      {
        src: house_6
      }
    ]
  }
]

const initialState = {
  cardData,
  listId: 1
}
export default function listingReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LIST_ID:
      return {
        ...state,
        listId: action.id
      }
    default:
      return state
  }
}
