import { InnerBlocks, BlockControls, RichText, useBlockProps, InspectorControls, MediaPlaceholder, MediaReplaceFlow } from '@wordpress/block-editor';
import { ToolbarButton, ToolbarGroup, PanelBody, PanelRow, ColorPicker, Flex, FlexItem, Spinner, __experimentalSpacer as Spacer } from "@wordpress/components";
import { __ } from '@wordpress/i18n';
import { isBlobURL } from '@wordpress/blob';
import { useEffect } from '@wordpress/element';
import useFrontPage from '../hooks/useFrontPage';

function EditComponent({ attributes, setAttributes }) {
  const { bannerImages, slogan } = attributes;
  const blocks = wp.data.select('core/block-editor').getBlocks();
  const bannerBlocks = blocks.find((block) => block.name === 'hostel-33/page-banner');
  const ctaButtonBlocks = bannerBlocks?.innerBlocks.find((block) => block.name === 'hostel-33/cta-button');

  useEffect(() => {
    if (ctaButtonBlocks) {
      setAttributes({
        ctaButtonBlocks: ctaButtonBlocks ? wp.blocks.serialize(ctaButtonBlocks) : "",
      })
    }
  }, [ctaButtonBlocks]);

  const is_front_page = useFrontPage();

  const blockProps = useBlockProps({
    className: 'page-banner expanded-container',
    style: {
      marginTop: is_front_page ? '130px' : '0',
      marginInline: 'auto',
    }
  });

  const onSelectImage = (currentIdx, newImage) => {
    const newBannerImage = {
      id: newImage.id,
      url: newImage.url,
      alt: newImage.alt,
    }
    const newBannerImages = [...bannerImages];
    newBannerImages[currentIdx] = newBannerImage;
    setAttributes({
      bannerImages: newBannerImages,
    })
  }

  const onRemoveImage = (currentIdx) => {
    const newBannerImages = [...bannerImages];
    newBannerImages[currentIdx] = {
      id: '',
      url: '',
      alt: '',
    }
    setAttributes({
      bannerImages: newBannerImages,
    })
  }

  const onSelectImageURL = (currentIdx, newUrl) => {
    const newBannerImages = [...bannerImages];
    newBannerImages[currentIdx] = {
      id: currentIdx,
      url: newUrl,
      alt: '',
    }
    setAttributes({
      bannerImages: newBannerImages,
    })
  }

  const handleChangeColor = (color) => {
    setAttributes({
      slogan: {
        ...slogan,
        color: color.hex,
      }
    })
  }

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title="Color Settings" initialOpen={true}>
          <PanelRow>
            <ColorPicker onChange={handleChangeColor} color={slogan?.color} />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <Flex className="page-banner-control" style={{ width: '100%', minHeight: '300px' }}>
        {bannerImages?.map((image, index) => (
          <FlexItem key={index}>
            {image.url ? (
              <>
                <BlockControls>
                  <ToolbarGroup>
                    <MediaReplaceFlow
                      name={__('Replace Image', 'hostel-33')}
                      onSelect={(newImage) => onSelectImage(index, newImage)}
                      onSelectURL={(newUrl) => onSelectImageURL(index, newUrl)}
                      accept="image/*"
                      allowedTypes={['image']}
                      mediaId={image.id}
                      mediaURL={image.url}
                    />
                    <ToolbarButton onClick={() => onRemoveImage(index)}>
                      {__(`Remove Image ${index + 1}`, 'hostel-33')}
                    </ToolbarButton>
                  </ToolbarGroup>
                </BlockControls >
                <img
                  src={image.url}
                  alt={image.alt}
                  data-id={image.id}
                  style={{
                    width: '400px',
                    height: 'auto',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
                {isBlobURL(image.url) && <Spinner />}
              </>
            ) :
              <MediaPlaceholder
                onSelect={(newImage) => onSelectImage(index, newImage)}
                onSelectURL={(newUrl) => onSelectImageURL(index, newUrl)}
                accept='image/*'
                allowedTypes={['image']}
                disableMediaButtons={!!image.url}
              />}
          </FlexItem>
        ))}
      </Flex>
      <RichText
        className="page-banner-slogan"
        data-color={slogan?.color}
        tagName='h1'
        allowedFormats={[
          'core/bold',
          'core/italic',
          'core/heading',
        ]}
        value={slogan?.content}
        onChange={(content) => setAttributes({
          slogan: {
            ...slogan,
            content: content,
          }
        })}
        placeholder={__('Add your slogan', 'hostel-33')}
        style={{
          color: slogan?.color,
        }}
      />
      <Spacer marginX={20} />
      <InnerBlocks
        allowedBlocks={['hostel-33/cta-button']}
        templateLock={false}
        template={[['hostel-33/cta-button', {
          content: __('Check THE UNBEATABLE PRICE today', 'hostel-33'),
          style: 'gradient',
          size: 'base',
          tagName: 'button',
          iconPosition: 'suffix',
          role: "navigation",
        }]]}
      />
    </div>
  )
}

export default EditComponent;