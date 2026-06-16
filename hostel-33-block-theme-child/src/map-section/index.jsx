import { registerBlockType } from '@wordpress/blocks';
import EditComponent from './edit';
import metadata from './block.json';

registerBlockType(metadata.name, {
  attributes: {
    branchId: {
      type: 'number',
    },
  },
  edit: EditComponent,
});