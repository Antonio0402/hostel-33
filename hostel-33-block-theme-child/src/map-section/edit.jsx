import { useBlockProps, useInnerBlocksProps, useBlockEditContext } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

function EditComponent({ attributes, setAttributes }) {
  const { branchId } = attributes;

  const blockProps = useBlockProps({
    className: "address-section",
  });

  const innerBlockProps = useInnerBlocksProps(blockProps, {
    allowedBlocks: [],
    template: [['hostel-33/address-map', {}]],
    templateLock: 'all',
  });

  // Retrieve clientId and block name
  const { clientId, name } = useBlockEditContext();

  // Retrieve the full block object using the clientId

  // Use `useSelect` to listen for changes in the child block's attributes
  const childAttributes = useSelect((select) => {
    const innerBlocks = select('core/block-editor').getBlock(clientId)?.innerBlocks;
    const addressMapBlock = innerBlocks?.find((block) => block.name === 'hostel-33/address-map');
    return addressMapBlock ? select('core/block-editor').getBlockAttributes(addressMapBlock.clientId) : {};
  }, []);

  // Update the parent state when the child's `branchId` changes
  useEffect(() => {
    if (childAttributes.branchId) {
      setAttributes({ branchId: childAttributes.branchId });
    }
  }, [childAttributes.branchId]);

  return (
    <>
      <section {...innerBlockProps}>
      </section>
    </>
  )
}

export default EditComponent;