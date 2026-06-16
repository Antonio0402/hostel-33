import { BlockControls, RichText, useBlockProps, InspectorControls, MediaPlaceholder, MediaReplaceFlow, FontSizePicker, PlainText } from '@wordpress/block-editor';
import { ToolbarButton, ToolbarGroup, PanelBody, PanelRow, ColorPicker, Spinner } from "@wordpress/components";
import { __ } from '@wordpress/i18n';
import { isBlobURL } from '@wordpress/blob';

function EditComponent({ attributes, setAttributes }) {
  const blockProps = useBlockProps({
    className: 'two-column-section',
  });
  const { mainImage, heading, subHeading, description, headLine } = attributes;
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

  const handleChangeColor = (color) => {
    setAttributes({
      subHeading: {
        ...subHeading,
        color: color.hex,
      }
    })
  }

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Why Choose Us Settings", 'hostel-33')} initialOpen={true}>
          <PanelRow title={__('Main Image', 'hostel-33')}>
            <ColorPicker onChange={handleChangeColor} color={subHeading?.color} />
          </PanelRow>
          <PanelRow title={__('Font Size', 'hostel-33')}>
            <FontSizePicker
              label={__('Description font size', 'hostel-33')}
              fontSizes={fontSizes}
              value={description?.fontSize}
              fallbackFontSize={fallbackFontSize}
              onChange={(newFontSize) => {
                setAttributes({
                  description: {
                    ...description,
                    fontSize: newFontSize,
                  },
                });
              }}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <section {...blockProps} data-section="why-choose-us">
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
        <div class="content">
          <h2 class="heading">
            <PlainText
              value={heading}
              onChange={(content) => setAttributes({ heading: content })}
              placeholder={__('Heading', 'hostel-33')}
            />
          </h2>
          <p class="sub-heading">
            <PlainText
              value={subHeading.content}
              onChange={(content) => setAttributes({ subHeading: { ...subHeading, content } })}
              placeholder={__('Sub Heading', 'hostel-33')}
              style={{ color: subHeading?.color }}
            />
          </p>
          <RichText
            className='description'
            tagName="p"
            value={description?.content}
            onChange={(content) => setAttributes({ description: { ...description, content } })}
            placeholder={__('Description', 'hostel-33')}
            style={{ fontSize: description?.fontSize ? description.fontSize : `${fallbackFontSize}px` }}
          />
          <p class="headline" data-style="headline-cta">
            <strong>
              <PlainText
                value={headLine}
                onChange={(content) => setAttributes({
                  headLine: content,
                })}
                placeholder={__('Headline', 'hostel-33')}
              />
            </strong>
          </p>
        </div>
      </section>
    </>
  )
}

export default EditComponent;