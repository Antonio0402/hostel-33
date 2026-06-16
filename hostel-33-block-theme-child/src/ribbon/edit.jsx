import { InnerBlocks, BlockControls, RichText, useBlockProps, PlainText, InspectorControls, MediaPlaceholder, MediaReplaceFlow } from '@wordpress/block-editor';
import { ToolbarButton, ToolbarGroup, PanelBody, PanelRow, FontSizePicker } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

function EditComponent({ attributes, setAttributes }) {
  const blockProps = useBlockProps({
    className: "ribbon",
  });

  const { backgroundImage, title, highlight } = attributes;

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

  const onSelectImage = (newImage) => {
    setAttributes({
      mainImage: {
        url: newImage.url,
        alt: newImage.alt,
      },
    })
  }

  const onRemoveImage = () => {
    setAttributes({
      mainImage: {
        url: '',
        alt: '',
      },
    })
  }

  const onSelectImageURL = (newUrl) => {
    setAttributes({
      mainImage: {
        url: newUrl,
        alt: '',
      },
    })
  }

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Ribbon Settings", 'hostel-33')} initialOpen={true}>
          <PanelRow title={__('Font Size', 'hostel-33')}>
            <FontSizePicker
              label={__('Highlight font size', 'hostel-33')}
              fontSizes={fontSizes}
              value={highlight?.fontSize}
              fallbackFontSize={fallbackFontSize}
              onChange={(newFontSize) => {
                setAttributes({
                  highlight: {
                    ...highlight,
                    fontSize: newFontSize,
                  },
                });
              }}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <div {...blockProps} style={{ backgroundImage: `url(${backgroundImage.url})` }}>
        {backgroundImage.url ? (
          <>
            <BlockControls>
              <ToolbarGroup>
                <MediaReplaceFlow
                  name={__('Replace Image', 'hostel-33')}
                  onSelect={onSelectImage}
                  onSelectURL={onSelectImageURL}
                  accept="image/*"
                  allowedTypes={['image']}
                  mediaURL={backgroundImage.url}
                />
                <ToolbarButton onClick={onRemoveImage}>
                  {__(`Remove Image`, 'hostel-33')}
                </ToolbarButton>
              </ToolbarGroup>
            </BlockControls >
            {isBlobURL(backgroundImage.url) && <Spinner />}
          </>
        ) :
          <MediaPlaceholder
            onSelect={onSelectImage}
            onSelectURL={onSelectImageURL}
            accept='image/*'
            allowedTypes={['image']}
            disableMediaButtons={!!backgroundImage.url}
          />}
        <div class="label">
          <h4>
            <PlainText
              value={title}
              onChange={(content) => setAttributes({ title: content })}
              placeholder={__('Title', 'hostel-33')}
            />
          </h4>
          <RichText
            value={highlight.content}
            onChange={(content) => setAttributes({ highlight: { ...highlight, content } })}
            placeholder={__('Highlight', 'hostel-33')}
            tagName='p'
          />
        </div>
        <InnerBlocks
          allowedBlocks={[]}
          template={[
            ['hostel-33/cta-button', {
              content: __('Call to Book', 'hostel-33'),
              style: 'btn-cta',
              size: 'sm',
              tagName: 'button',
              iconPosition: 'prefix',
            }]
          ]}
          templateLock="all"
        />
      </div>
    </>
  )
}

export default EditComponent;