import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps, RichText } from "@wordpress/block-editor";
import EditComponent from './edit';
import metadata from './block.json';

registerBlockType(metadata.name, {
  attributes: {
    slogan: {
      type: 'object',
      default: {
        content: '',
        color: '#893229',
      },
    },
    bannerImages: {
      type: 'array',
      default: Array.from({ length: 3 }, (_, index) => ({
        id: index + 1,
        url: '',
        alt: '',
      })),
    }
  },
  edit: EditComponent,
  save: SaveComponent,
});

function SaveComponent({ attributes }) {
  const { bannerImages, slogan } = attributes;
  return (
    <div {...useBlockProps.save()}>
      <div
        className="page-banner-control"
        style={{
          width: '100%',
          minHeight: '300px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {bannerImages.map((image, index) => (
          <div key={image.id} className="banner-image-wrapper">
            <img
              src={image.url || ''}
              alt={image.alt || ''}
              data-id={image.id || index + 1}
              style={{
                width: '400px',
                height: 'auto',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </div>
        ))}
      </div>
      <RichText.Content
        className="page-banner-slogan"
        data-color={slogan?.color}
        tagName='h1'
        value={slogan?.content}
        style={{
          color: slogan?.color,
        }} />
      <div className="spacer" style={{ margin: '20px 0' }}></div>
      <InnerBlocks.Content />
    </div>
  )
}