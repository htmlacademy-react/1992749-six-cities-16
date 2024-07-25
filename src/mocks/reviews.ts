import { userReviews } from '../types/types';

export const getRandomElement = (elements: userReviews[]) => elements[Math.floor(Math.random() * elements.length)];

export const reviews: userReviews[] = [
  [{
    'id': '57521517-6d28-4f3f-bcef-325df98b9853',
    'comment': 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
    'date': '2024-06-28T21:00:00.025Z',
    'rating': 3,
    'user': {
      'name': 'Jack',
      'avatarUrl': 'https://16.design.htmlacademy.pro/static/avatar/7.jpg',
      'isPro': false
    }
  },

  {
    'id': '3c00b5b4-fc10-484d-a1cc-44359c9b48f2',
    'comment': 'The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.',
    'date': '2024-06-27T21:00:00.025Z',
    'rating': 5,
    'user': {
      'name': 'Kendall',
      'avatarUrl': 'https://16.design.htmlacademy.pro/static/avatar/2.jpg',
      'isPro': false
    }
  }],

  [],

  [{
    'id': '8fa9af72-d212-4dfb-8203-9af654f17ce7',
    'comment': 'This villa is perfect in every way: the view on mountains and waterfalls, the hot tub and the villa itself. The evening here became a great continuation of our journeys over country.',
    'date': '2024-06-29T21:00:00.025Z',
    'rating': 4,
    'user': {
      'name': 'Zak',
      'avatarUrl': 'https://16.design.htmlacademy.pro/static/avatar/2.jpg',
      'isPro': true
    }
  }],

  [{
    'id': 'de6fc7b5-bff5-4ea3-9856-b5668a193505',
    'comment': 'The deluxe room was a quite comfortable one with all the adequate facilities. The only thing that made me feel uncomfortable was the rude behavior of an impolite staff at the reception desk.',
    'date': '2024-06-28T21:00:00.025Z',
    'rating': 5,
    'user': {
      'name': 'Mollie',
      'avatarUrl': 'https://16.design.htmlacademy.pro/static/avatar/10.jpg',
      'isPro': true
    }
  },

  {
    'id': 'c73408e7-e833-4f97-a387-576539efd296',
    'comment': 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
    'date': '2024-06-26T21:00:00.025Z',
    'rating': 3,
    'user': {
      'name': 'Kendall',
      'avatarUrl': 'https://16.design.htmlacademy.pro/static/avatar/3.jpg',
      'isPro': false
    }
  },

  {
    'id': 'bbf1b765-bb1d-41c1-acd7-60ecfddd1127',
    'comment': 'I stayed here for one night and it was an unpleasant experience.',
    'date': '2024-06-24T21:00:00.025Z',
    'rating': 3,
    'user': {
      'name': 'Mollie',
      'avatarUrl': 'https://16.design.htmlacademy.pro/static/avatar/8.jpg',
      'isPro': true
    }
  }],

  [{
    'id': '843d96b3-6d9b-4521-92e3-16879dcc88b6',
    'comment': 'What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!',
    'date': '2024-06-21T21:00:00.025Z',
    'rating': 4,
    'user': {
      'name': 'Christina',
      'avatarUrl': 'https://16.design.htmlacademy.pro/static/avatar/6.jpg',
      'isPro': true
    }
  }],

  [],

  [
    {
      'id': '90fc9be3-4025-4741-8e8d-ddc9ae436c24',
      'comment': 'Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.',
      'date': '2024-07-04T21:00:00.076Z',
      'rating': 4,
      'user': {
        'name': 'Jack',
        'avatarUrl': 'https://16.design.htmlacademy.pro/static/avatar/7.jpg',
        'isPro': false
      }
    },
    {
      'id': 'c5d15da4-2d41-4ac7-be4e-b5f988d24311',
      'comment': 'Bathed in the nature. Completely unplugged. Unforgettable.',
      'date': '2024-07-01T21:00:00.076Z',
      'rating': 4,
      'user': {
        'name': 'Zak',
        'avatarUrl': 'https://16.design.htmlacademy.pro/static/avatar/2.jpg',
        'isPro': true
      }
    }
  ],

  [
    {
      'id': '24a0efc6-d932-43b9-bbc1-6677d29f3e66',
      'comment': 'This villa is perfect in every way: the view on mountains and waterfalls, the hot tub and the villa itself. The evening here became a great continuation of our journeys over country.',
      'date': '2024-07-03T21:00:00.076Z',
      'rating': 5,
      'user': {
        'name': 'Isaac',
        'avatarUrl': 'https://16.design.htmlacademy.pro/static/avatar/1.jpg',
        'isPro': true
      }
    },
    {
      'id': '3bd121b9-c277-488b-bd21-a12bc911d094',
      'comment': 'Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.',
      'date': '2024-07-01T21:00:00.076Z',
      'rating': 1,
      'user': {
        'name': 'Sophie',
        'avatarUrl': 'https://16.design.htmlacademy.pro/static/avatar/3.jpg',
        'isPro': true
      }
    },
    {
      'id': 'e7cb4218-0be3-4a78-ae2a-349c87fb07ac',
      'comment': 'I stayed here for one night and it was an unpleasant experience.',
      'date': '2024-06-28T21:00:00.076Z',
      'rating': 1,
      'user': {
        'name': 'Corey',
        'avatarUrl': 'https://16.design.htmlacademy.pro/static/avatar/4.jpg',
        'isPro': false
      }
    }
  ],

  [
    {
      'id': '99fdd6c9-13e7-42be-a0f4-e878c71c3610',
      'comment': 'Bathed in the nature. Completely unplugged. Unforgettable.',
      'date': '2024-07-01T21:00:00.076Z',
      'rating': 1,
      'user': {
        'name': 'Sophie',
        'avatarUrl': 'https://16.design.htmlacademy.pro/static/avatar/9.jpg',
        'isPro': false
      }
    }
  ],

  [
    {
      'id': '6bfc9cc4-35eb-4646-8a89-585d15c78ba8',
      'comment': 'What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!',
      'date': '2024-07-02T21:00:00.076Z',
      'rating': 5,
      'user': {
        'name': 'Corey',
        'avatarUrl': 'https://16.design.htmlacademy.pro/static/avatar/2.jpg',
        'isPro': false
      }
    },
    {
      'id': '6e15f969-6c3f-4279-a401-17e0f0c9e508',
      'comment': 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
      'date': '2024-06-29T21:00:00.076Z',
      'rating': 2,
      'user': {
        'name': 'Mollie',
        'avatarUrl': 'https://16.design.htmlacademy.pro/static/avatar/9.jpg',
        'isPro': true
      }
    }
  ],

  [
    {
      'id': 'f5b64ff5-64ad-4da8-a691-769060833d40',
      'comment': 'This villa is perfect in every way: the view on mountains and waterfalls, the hot tub and the villa itself. The evening here became a great continuation of our journeys over country.',
      'date': '2024-07-04T21:00:00.076Z',
      'rating': 2,
      'user': {
        'name': 'Christina',
        'avatarUrl': 'https://16.design.htmlacademy.pro/static/avatar/8.jpg',
        'isPro': false
      }
    },
    {
      'id': 'd2a1d594-1ca0-416b-ab7a-7652371313d8',
      'comment': 'What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!',
      'date': '2024-07-01T21:00:00.076Z',
      'rating': 2,
      'user': {
        'name': 'Max',
        'avatarUrl': 'https://16.design.htmlacademy.pro/static/avatar/8.jpg',
        'isPro': true
      }
    },
    {
      'id': '59d0ad79-f22c-4b30-95e6-818124949bf9',
      'comment': 'Bathed in the nature. Completely unplugged. Unforgettable.',
      'date': '2024-06-28T21:00:00.076Z',
      'rating': 3,
      'user': {
        'name': 'Sophie',
        'avatarUrl': 'https://16.design.htmlacademy.pro/static/avatar/1.jpg',
        'isPro': false
      }
    }
  ]
];
