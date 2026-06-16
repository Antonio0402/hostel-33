import { __ } from '@wordpress/i18n';

const TEMPLATE = [
  [
    'core/group',
    {
      className: 'header-container',
      layout: {
        type: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      },
      style: {
        dimensions: {
          minHeight: '130px',
        }
      }
    },
    [
      [
        'core/group',
        {
          className: 'site-branding',
          layout: {
            type: 'constrained'
          }
        },
        [
          [
            'core/site-logo',
            {},
          ],
        ],
      ],
      [
        'core/group',
        {
          className: 'main-navigation',
          id: 'site-navigation',
          layout: {
            type: 'constrained'
          }
        },
        [
          [
            'core/paragraph',
            {
              content: __('Primary Menu', 'hostel-33'),
            },
          ],
        ],
      ],
      [
        'hostel-33/cta-button',
        {
          content: __('Call to Book', 'hostel-33'),
          style: 'btn-cta',
          size: 'base',
          tagName: 'button',
          iconPosition: 'prefix',
          className: 'site-cta',
        },
      ],
    ],
  ],
];

export default TEMPLATE;