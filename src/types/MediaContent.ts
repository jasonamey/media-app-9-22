type photoFileSizes = {
  small: string
  large: string
  medium?: string
}

type photoFiletypes = {
  regular: photoFileSizes
  trending?: photoFileSizes
}

type thumbnailType = photoFiletypes

export type MediaContent = {
  category: string
  id: string
  isBookmarked: boolean
  isTrending: boolean
  rating: string
  thumbnail: thumbnailType
  title: string
  year: number
}
