import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps, RichText } from "@wordpress/block-editor";
import EditComponent from './edit';
import metadata from './block.json';

registerBlockType(metadata.name, {
  attributes: {
    backgroundImage: {
      type: 'object',
      default: {
        url: '',
        alt: '',
      },
    },
    title: {
      type: 'string',
      default: 'Stay more - save more',
    },
    highlight: {
      type: 'object',
      default: {
        content: 'Just from $20/5 beds - room/night',
        fontSize: '16px',
      },
    }
  },
  edit: EditComponent,
  save: SaveComponent,
});

function SaveComponent({ attributes }) {
  const blockProps = useBlockProps.save({
    className: 'ribbon',
  });
  const { backgroundImage, title, highlight } = attributes;

  return (
    <div {...blockProps} style={{ backgroundImage: `url(${backgroundImage.url})` }}>
      <div class="label">
        <h4>{title}</h4>
        <RichText.Content value={highlight.content} tagName='p' />
      </div>
      <InnerBlocks.Content />
    </div>
  )
}