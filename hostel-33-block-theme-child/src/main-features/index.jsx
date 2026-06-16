import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import EditComponent from './edit';
import { select } from '@wordpress/data';
import metadata from './block.json';

registerBlockType(metadata.name, {
  attributes: {
    heading: {
      type: 'string',
      default: 'We offer for guest',
    },
    mainImage: {
      type: 'object',
      default: {
        url: '',
        alt: '',
      },
    },
  },
  edit: EditComponent,
  save: SaveComponent,
});

function SaveComponent({ attributes }) {
  const { heading, mainImage } = attributes;
  const blockProps = useBlockProps.save({
    className: 'expanded-container',
  });
  return (
    <section {...blockProps}>
      <div class="two-column-section" data-section="selling-points">
        <div class="points">
          <h3 class="title | text-600 color-primary">{heading}</h3>
          <InnerBlocks.Content />
        </div>
        <div class="img-wrapper">
          <img src={mainImage.url} alt={mainImage.alt} />
        </div>
      </div>
    </section>
  )
}