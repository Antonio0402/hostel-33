import { BlockControls, RichText, useBlockProps, InspectorControls, MediaPlaceholder, MediaReplaceFlow, FontSizePicker, PlainText, InnerBlocks } from '@wordpress/block-editor';
import { ToolbarButton, ToolbarGroup, PanelBody, PanelRow, ColorPicker, Spinner } from "@wordpress/components";
import { __ } from '@wordpress/i18n';
import { isBlobURL } from '@wordpress/blob';
import TEMPLATE from './template';

function EditComponent({ attributes, setAttributes }) {
  const blockProps = useBlockProps({
    className: 'expanded-container',
    style: {
      marginInline: 'auto'
    }
  });
  const { mainImage, heading, subHeading } = attributes;

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
      <section {...blockProps}>
        <div class="two-column-section" data-section="selling-points">
          <div class="points">
            <h3 class="title | text-600 color-primary">
              <PlainText
                value={heading}
                onChange={(content) => setAttributes({ heading: content })}
                placeholder={__('Heading', 'hostel-33')}
              /></h3>
            <InnerBlocks
              allowedBlocks={[]}
              template={TEMPLATE}
              templateLock="all"
              renderAppender={() => (
                <InnerBlocks.ButtonBlockAppender />
              )}
            />
          </div>
          <div class="img-wrapper">
            {mainImage.url ? (
              <>
                <BlockControls>
                  <ToolbarGroup>
                    <MediaReplaceFlow
                      name={__('Replace Image', 'hostel-33')}
                      onSelect={onSelectImage}
                      onSelectURL={onSelectImageURL}
                      accept="image/*"
                      allowedTypes={['image']}
                      mediaURL={mainImage.url}
                    />
                    <ToolbarButton onClick={onRemoveImage}>
                      {__(`Remove Main Image`, 'hostel-33')}
                    </ToolbarButton>
                  </ToolbarGroup>
                </BlockControls >
                <img
                  src={mainImage.url}
                  alt={mainImage.alt}
                />
                {isBlobURL(mainImage.url) && <Spinner />}
              </>
            ) :
              <MediaPlaceholder
                onSelect={onSelectImage}
                onSelectURL={onSelectImageURL}
                accept='image/*'
                allowedTypes={['image']}
                disableMediaButtons={!!mainImage.url}
              />}
          </div>
        </div>
      </section>
    </>
  )
}

export default EditComponent;