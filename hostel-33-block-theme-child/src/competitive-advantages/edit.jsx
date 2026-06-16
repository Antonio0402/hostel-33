import { InnerBlocks, useBlockProps, useBlockEditContext, useInnerBlocksProps } from '@wordpress/block-editor';
import { select } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import TEMPLATE from './template';

function EditComponent({ attributes, setAttributes }) {
  const blockProps = useBlockProps({
    className: 'expanded-container',
    style: {
      marginInline: 'auto'
    }
  });

  const innerBlocksProps = useInnerBlocksProps(_, {
    template: TEMPLATE,
    templateLock: "all",
    allowedBlocks: []
  })

  // Retrieve clientId and block name
  // const { clientId, name } = useBlockEditContext(); 

  // Retrieve the full block object using the clientId
  // const block = select('core/block-editor').getBlock(clientId);

  return (
    <section {...blockProps}>
      <div
        {...innerBlocksProps}
        className="two-column-section"
        data-section="exclusive-advantages"
      ></div>
    </section>
  )
}

export default EditComponent;