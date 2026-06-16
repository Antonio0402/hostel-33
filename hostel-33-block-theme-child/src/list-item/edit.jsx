import { RichText, useBlockProps, InspectorControls, useInnerBlocksProps } from '@wordpress/block-editor';
import { PanelBody, PanelRow, FontSizePicker, ColorPicker } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

function EditComponent({ attributes, setAttributes }) {
  const blockProps = useBlockProps({
    className: "text-500 color-black advantage-item",
    style: {
      listStyle: 'none',
    }
  });

  const innerBlocksProps = useInnerBlocksProps(_, {
    template: [['font-awesome/icon', {}]],
    templateLock: "all",
    allowedBlock: []
  })

  const fontSizes = [
    {
      name: __('Small'),
      slug: 'small',
      size: 12,
    },
    {
      name: __('Big'),
      slug: 'big',
      size: 26,
    },
  ];
  const fallbackFontSize = 16;

  const { text, backgroundColor } = attributes;

  const handleChangeColor = (color) => {
    setAttributes({
      backgroundColor: color
    })
  }
  return (
    <>
      <InspectorControls>
        <PanelBody title={__("List Item Settings", 'hostel-33')} initialOpen={true}>
          <PanelRow title={__('Font Size', 'hostel-33')}>
            <FontSizePicker
              label={__('Font size', 'hostel-33')}
              fontSizes={fontSizes}
              value={text?.fontSize}
              fallbackFontSize={fallbackFontSize}
              onChange={(newFontSize) => {
                setAttributes({
                  advantage: {
                    ...text,
                    text: newFontSize,
                  },
                });
              }}
            />
          </PanelRow>
          <PanelRow title={__('Icon Wrapper Color', 'hostel-33')}>
            <ColorPicker onChange={handleChangeColor} color={backgroundColor} />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <li {...blockProps}>
        <div {...innerBlocksProps} style={{ background: backgroundColor }} className='icon-wrapper'>
        </div>
        <RichText
          tagName='p'
          value={text.content}
          onChange={(newText) => setAttributes({
            text: {
              content: newText,
            }
          })}
          placeholder={__('Enter your advantage...')}
          className="text-500 color-black"
        />
      </li>
    </>
  )
}

export default EditComponent;