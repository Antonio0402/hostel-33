import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";
import EditComponent from './edit';
import metadata from './block.json';

registerBlockType(metadata.name, {
  attributes: {
    ribbonBlock: {
      type: 'string',
      default: '',
    },
    advantages: {
      type: 'array',
      default: [],
    },
  },
  edit: EditComponent,
  save: SaveComponent,
});

function SaveComponent({ attributes }) {
  const blockProps = useBlockProps.save({
    className: 'expanded-container',
  });
  const innerBlocksProps = useInnerBlocksProps.save();
  return (
    <section {...blockProps}>
      <div {...innerBlocksProps} className="two-column-section" data-section="exclusive-advantages">
      </div>
    </section>
  )
}