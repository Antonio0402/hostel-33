import { registerBlockType } from '@wordpress/blocks';
import EditComponent from './edit';
import metadata from './block.json';

registerBlockType(metadata.name, {
  edit: EditComponent,
});