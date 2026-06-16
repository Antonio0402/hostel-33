import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import TEMPLATE from './template';

function EditComponent({ attributes, setAttributes }) {
  const blockProps = useBlockProps();
  const blocks = wp.data.select('core/block-editor').getBlocks();
  const headerBlocks = blocks.find((block) => block.name === 'hostel-33/header');
  const firstInnerBlock = headerBlocks?.innerBlocks[0]?.innerBlocks[0];
  const lastInnerBlock = headerBlocks.innerBlocks[0]?.innerBlocks[headerBlocks.innerBlocks[0]?.innerBlocks.length - 1];
  const menuNameBlock = headerBlocks?.innerBlocks[0]?.innerBlocks.find((block) => {
    if (block.name === 'core/group' && block.attributes.className === 'main-navigation') {
      return block.innerBlocks[0]?.name === 'core/paragraph';
    }
  });
  useEffect(() => {
    if (lastInnerBlock && firstInnerBlock) {
      const button = lastInnerBlock.attributes;
      console.log(button);
      button.onClick = () => {
        if (window !== undefined) {
          window?.open('tel:0913137070', '_blank')
        }
      }
      setAttributes({
        firstInnerBlock: firstInnerBlock ? wp.blocks.serialize(firstInnerBlock) : "",
        lastInnerBlock: lastInnerBlock ? wp.blocks.serialize(lastInnerBlock) : "",
      })
    }
  }, []);

  useEffect(() => {
    if (menuNameBlock) {
      const menuName = menuNameBlock.innerBlocks[0].attributes.content;
      setAttributes({ menuName: menuName.text });
    }
  }, [menuNameBlock])

  const { menuName } = attributes;

  // Check if the block is on the front page
  const is_front_page = useSelect((select) => select('core/block-editor').getBlockRootClientId(select('core/block-editor').getSelectedBlockClientId()) === select('core/block-editor').getBlockRootClientId(select('core/block-editor').getSelectedBlockClientId()));

  return (
    <div {...blockProps}>
      <header id="masthead" className="site-header" style={{
        position: is_front_page ? 'fixed' : 'relative',
        backgroundColor: is_front_page ? 'transparent' : 'white',
      }}>
        <div className="header-container">
          <InnerBlocks
            allowedBlocks={['core/site-logo', 'hostel-33/cta-button']}
            template={TEMPLATE} // Predefine the site-logo block
            templateLock="all" // Prevent adding/removing other blocks
          />
        </div>
        <div className="divider"></div>
      </header>
    </div>
  )
}

export default EditComponent;