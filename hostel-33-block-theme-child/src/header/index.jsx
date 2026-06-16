import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from "@wordpress/block-editor";
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import EditComponent from './edit';
import metadata from './block.json';

registerBlockType(metadata.name, {
  attributes: {
    menuName: {
      type: 'string', default: 'Primary Menu'
    },
    firstInnerBlock: {
      type: 'string', default: ""
    },
    lastInnerBlock: {
      type: 'string', default: ""
    },
  },
  edit: EditComponent,
  save: SaveComponent,
});

function SaveComponent() {
  return (
    <div {...useBlockProps.save()}>
      <InnerBlocks.Content />
    </div>
  );
}