import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from "@wordpress/block-editor";
import EditComponent from './edit';
import metadata from './block.json';

registerBlockType(metadata.name, {
  attributes: {
    heading: {
      type: 'string',
      default: 'Welcome to Hostel 33',
    },
    subHeading: {
      type: 'object',
      default: {
        content: 'Located in the most crowned in ba temple’s front gate area',
        color: '#000',
      },
    },
    description: {
      type: 'object',
      default: {
        content: 'We are owned-family hostel which are within walking distance of most popular sacred temple located at Chau Doc city of Southwestern region. With more than 30 years of experience, we assure to provide for you a great place to rest where you can feel like home when taking a pilgrimage tour to Ba temple. More than 29 rooms with all air-cooled and hot-water available are neat decoration will bring you a comfortable and intimate atmosphere with your friends and family.',
        fontSize: "16px",
      },
    },
    headLine: {
      type: 'string',
      default: 'Booking call! 0926 - 3861371',
    },
    mainImage: {
      type: 'object',
      default: {
        url: '',
        alt: '',
      },
    },
  },
  edit: EditComponent,
  save: SaveComponent,
});

function SaveComponent({ attributes }) {
  const { heading, subHeading, description, headLine, mainImage } = attributes;
  const blockProps = useBlockProps.save({
    className: 'two-column-section',
  });
  return (
    <section {...blockProps} data-section="why-choose-us">
      <img src={mainImage.url} alt={mainImage.alt} />
      <div class="content">
        <h2 class="heading">{heading}</h2>
        <p class="sub-heading" style={{ color: subHeading?.color }}>{subHeading.content}</p>
        <div class="description" style={{ fontSize: description.fontSize }}>{description.content}</div>
        <p class="headline" data-style="headline-cta"><strong>{headLine}</strong></p>
      </div>
    </section>
  )
}