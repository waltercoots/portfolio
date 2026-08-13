import ParagraphBlock from './ParagraphBlock.vue'
import HeadingBlock from './HeadingBlock.vue'
import MetricsBlock from './MetricsBlock.vue'
import PullquoteBlock from './PullquoteBlock.vue'
import MediaBlock from './MediaBlock.vue'
import GalleryBlock from './GalleryBlock.vue'
import ListBlock from './ListBlock.vue'

export const blockRegistry = {
  paragraph: ParagraphBlock,
  heading: HeadingBlock,
  metrics: MetricsBlock,
  pullquote: PullquoteBlock,
  media: MediaBlock,
  gallery: GalleryBlock,
  list: ListBlock,
}
