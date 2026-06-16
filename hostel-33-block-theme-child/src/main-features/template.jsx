import { __ } from '@wordpress/i18n';

const TEMPLATE = [
  [
    'core/group',
    {
      className: 'point-list',
      tagName: 'ul'
    },
    [
      [
        'core/group',
        {
          className: 'text-500 color-black',
          tagName: 'li',
        },
        [
          [
            'font-awesome/icon',
          ],
          [
            'core/paragraph',
            {
              content: __('Free parking.', 'hostel-33'),
              tagName: 'span'
            }
          ]
        ]
      ],
      [
        'core/group',
        {
          className: 'text-500 color-black',
          tagName: 'li',
        },
        [
          [
            'font-awesome/icon',
          ],
          [
            'core/paragraph',
            {
              content: __('Free parking.', 'hostel-33'),
              tagName: 'span'
            }
          ]
        ]
      ],
      [
        'core/group',
        {
          className: 'text-500 color-black',
          tagName: 'li',
        },
        [
          [
            'font-awesome/icon',
          ],
          [
            'core/paragraph',
            {
              content: __('Free parking.', 'hostel-33'),
              tagName: 'span'
            }
          ]
        ]
      ],
      [
        'core/group',
        {
          className: 'text-500 color-black',
          tagName: 'li',
        },
        [
          [
            'font-awesome/icon',
          ],
          [
            'core/paragraph',
            {
              content: __('Free parking.', 'hostel-33'),
              tagName: 'span'
            }
          ]
        ]
      ],
      [
        'core/group',
        {
          className: 'text-500 color-black',
          tagName: 'li',
        },
        [
          [
            'font-awesome/icon',
          ],
          [
            'core/paragraph',
            {
              content: __('Free parking.', 'hostel-33'),
              tagName: 'span'
            }
          ]
        ]
      ],
      [
        'core/group',
        {
          className: 'text-500 color-black',
          tagName: 'li',
        },
        [
          [
            'font-awesome/icon',
          ],
          [
            'core/paragraph',
            {
              content: __('Free parking.', 'hostel-33'),
              tagName: 'span'
            }
          ]
        ]
      ],
    ]
  ],
  [
    'hostel-33/cta-button',
    {
      content: __('Choose your room', 'hostel-33'),
      style: 'btn-outline',
      size: 'base',
      tagName: 'button',
      disableIcon: true,
    }
  ]
];

export default TEMPLATE;