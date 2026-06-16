import { registerBlockType } from '@wordpress/blocks';
import { useInnerBlocksProps, useBlockProps, RichText } from "@wordpress/block-editor";
import EditComponent from './edit';
import metadata from './block.json';

registerBlockType(metadata.name, {
  attributes: {
    text: {
      type: 'object',
      default: {
        fontSize: '16px',
        content: ''
      },
    },
    backgroundColor: {
      type: 'string',
      default: '#ffffff',
    }
  },
  edit: EditComponent,
  save: SaveComponent,
});

function SaveComponent({ attributes }) {
  const { text, backgroundColor } = attributes;
  const blockProps = useBlockProps.save({
    className: 'text-500 color-black advantage-item',
    style: {
      listStyle: 'none',
    }
  });
  const innerBlocksProps = useInnerBlocksProps.save({
    style: { background: backgroundColor },
    className: 'icon-wrapper'
  });

  return (
    <li {...blockProps}>
      <div {...innerBlocksProps}>
      </div>
      <RichText.Content tagName='p' value={text.content} className="text-500 color-black" />
    </li>
  )
}