import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import EditComponent from './edit';
import metadata from './block.json';

registerBlockType(metadata.name, {
  attributes: {
    content: {
      type: 'string',
    },
    style: {
      type: 'string', default: 'btn-cta'
    },
    size: {
      type: 'string', default: 'base'
    },
    linkObject: {
      type: 'object',
      default: { url: "" }
    },
    tagName: {
      type: 'string', default: 'button'
    },
    iconPosition: {
      type: 'string', default: 'prefix'
    },
    disableIcon: {
      type: 'boolean', default: false
    }
  },
  edit: EditComponent,
  save: SaveComponent,
});

function SaveComponent({ attributes }) {
  const { content, style, size, linkObject, tagName } = attributes;
  const btnSize = size === 'base' ? '' : `btn-${size}`;
  // Extend blockProps with additional attributes
  const blockProps = useBlockProps.save({
    className: "btn",
    'data-style': style,
    'data-variant': btnSize,
    'aria-label': content,
  });
  if (tagName === 'button') {
    return (
      <button
        {...blockProps}
        role="button"
      >
        <InnerBlocks.Content />
        <span className="screen-reader-text">{content}</span>
        {content}
      </button>
    );
  } else {
    isAnChor = linkObject?.url?.startWith('#');
    return (
      <a
        {...blockProps}
        href={isAnChor ? '' : linkObject?.url}
        data-roll-to={isAnChor ? linkObject?.url : ''}
      >
        <InnerBlocks.Content />
        <span className="screen-reader-text">{content}</span>
        {content}
      </a>
    );
  }
}