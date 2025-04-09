import { __ } from '@wordpress/i18n';

const TEMPLATE = [
  [
    'core/group',
    {
      className: 'panel',
      layout: {
        type: 'constrained'
      }
    },
    [
      [
        'hostel-33/ribbon',
        {
          className: 'ribbon',
        },
      ]
    ],
  ],
  [
    'core/group',
    {
      className: 'advantages',
      layout: {
        type: 'constrained'
      }
    },
    [
      [
        'core/heading',
        {
          className: 'title | text-600 color-black',
          level: 3,
          content: __('Need bigger space for entire family', 'hostel-33'),
        }
      ],
      [
        'core/group',
        {
          className: 'advantages-list',
          role: 'list',
          layout: {
            type: 'constrained',
            "justifyContent": "left"
          }
        },
        [
          [
            'hostel-33/list-item',
            {}
          ],
          [
            'hostel-33/list-item',
            {}
          ],
          [
            'hostel-33/list-item',
            {}
          ],
          [
            'hostel-33/list-item',
            {}
          ],
        ]
      ]
    ]
  ]
];

export default TEMPLATE;