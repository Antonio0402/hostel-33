import { InnerBlocks, BlockControls, RichText, useBlockProps, __experimentalLinkControl as LinkControl } from '@wordpress/block-editor';
import { ToolbarButton, ToolbarGroup, Popover, Button, DropdownMenu } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import { link } from "@wordpress/icons"
import { SVG, Path } from '@wordpress/primitives';
import { __ } from '@wordpress/i18n';

function EditComponent({ attributes, setAttributes }) {
  const blockProps = useBlockProps({
    className: "btn",
  });
  const [isLinkPickerVisible, setIsLinkPickerVisible] = useState(false);
  const [isIconOnly, setIsIconOnly] = useState(false);
  const { content, style, size, linkObject, iconPosition, disableIcon } = attributes;
  const btnSize = size === 'base' ? '' : `btn-${size}`;
  useEffect(() => {
    if (isLinkPickerVisible) {
      setAttributes({ tagName: "a" });
    } else {
      setAttributes({ tagName: "button" });
    }
  }, [isLinkPickerVisible])

  const handleChange = (newContent) => {
    setAttributes({ content: newContent });
  };

  const handleSelectSize = (newSize) => {
    setAttributes({ size: newSize });
  }

  const handleEnableLink = () => {
    setIsLinkPickerVisible(prev => !prev);
  }

  const handleLinkChange = (newLink) => {
    setAttributes({ linkObject: newLink })
  }

  const handleButtonStyle = (newStyle) => {
    setAttributes({ style: newStyle })
    if (newStyle === "btn-icon") {
      setIsIconOnly(true);
    }
    else {
      setIsIconOnly(false);
    }
  }

  const handleIconPosition = (newPosition) => {
    setAttributes({ iconPosition: newPosition })
  }
  return (
    <>
      <BlockControls>
        <ToolbarGroup
          title='Add Link'
        >
          <ToolbarButton
            title="Link"
            onClick={handleEnableLink}
            icon={link}
            isActive={!!linkObject?.url}
          />
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarButton isPressed={size === "lg"} onClick={() => handleSelectSize("lg")}>Large</ToolbarButton>
          <ToolbarButton isPressed={size === "base"} onClick={() => handleSelectSize("base")}>Base</ToolbarButton>
          <ToolbarButton isPressed={size === "sm"} onClick={() => handleSelectSize("sm")}>Small</ToolbarButton>
        </ToolbarGroup>
        <ToolbarGroup
          title='Button Style'
        >
          <DropdownMenu
            controls={[
              {
                onClick: () => handleButtonStyle("btn-cta"),
                title: 'Filled',
                isActive: style === "btn-cta",
                isPressed: style === "btn-cta"
              },
              {
                onClick: () => handleButtonStyle("btn-outline"),
                title: 'Outlined',
                isActive: style === "btn-outline",
                isPressed: style === "btn-outline"
              },
              {
                onClick: () => handleButtonStyle("gradient"),
                title: 'Gradient',
                isActive: style === "gradient",
                isPressed: style === "gradient"
              },
              {
                onClick: () => handleButtonStyle("btn-icon"),
                title: 'Icon Only',
                isActive: style === "btn-icon",
                isPressed: style === "btn-icon"
              },
            ]}
            icon={<SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path d="M5 5v1.5h14V5H5zm0 7.8h14v-1.5H5v1.5zM5 19h14v-1.5H5V19z" /></SVG>}
            label="Select a style"
          />
        </ToolbarGroup>
        <ToolbarGroup
          title='Icon Position'
        >
          <DropdownMenu
            controls={[
              {
                onClick: () => handleIconPosition("prefix"),
                title: 'Prefix',
                isActive: iconPosition === "prefix"
              },
              {
                onClick: () => handleIconPosition("suffix"),
                title: 'Suffix',
                isActive: iconPosition === "suffix"
              }
            ]}
            icon="move"
            label="Choose Icon Position"
          />
        </ToolbarGroup>
      </BlockControls>
      <div {...blockProps}
        data-style={style}
        data-variant={btnSize}
      >
        {!disableIcon && iconPosition === 'prefix' && <InnerBlocks allowedBlocks={["font-awesome/icon"]}
          template={
            [
              ["font-awesome/icon", { placeholder: <i class="fa fa-phone" /> }]
            ]
          }
          templateLock={false}
          renderAppender={false}
        />}
        {
          !isIconOnly &&
          <RichText
            value={content}
            tagName='span'
            allowedFormats={[]}
            onChange={handleChange}
            placeholder="Button Text"
          />
        }
        {!disableIcon && iconPosition === 'suffix' && <InnerBlocks allowedBlocks={["font-awesome/icon"]}
          template={
            [
              ["font-awesome/icon", { placeholder: <i class="fa fa-phone" /> }]
            ]
          }
          templateLock={false}
          renderAppender={false}
        />}
        {isLinkPickerVisible ? (
          <Popover position="middle center"
            onClose={() => setIsLinkPickerVisible(false)}
            onFocusOutside={() => setIsLinkPickerVisible(false)}
            // necessary for it to close when you click outside the popover
            __unstableSlotName="__unstable-block-tools-after"
          >
            <LinkControl
              settings={[]}
              value={linkObject}
              onChange={handleLinkChange}
            />
            <Button variant="primary" onClick={() => setIsLinkPickerVisible(false)} style={{ display: "block", width: "100%" }}>
              Confirm Link
            </Button>
          </Popover >
        ) : null}
      </div>
    </>
  )
}

export default EditComponent;