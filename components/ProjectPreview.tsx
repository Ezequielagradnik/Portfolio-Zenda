import Image from "next/image"
import Link from "next/link"

interface ProjectPreviewProps {
  url: string
  image: string
  title: string
}

export default function ProjectPreview({ url, image, title }: ProjectPreviewProps) {
  const isLocalImage = image.startsWith("/") || image.startsWith("./")

  return (
    <Link href={url} target="_blank" className="block relative group">
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <Image
          src={isLocalImage ? image : `/placeholder.svg?height=600&width=800`}
          alt={title}
          width={800}
          height={600}
          className="object-cover w-full transition-transform duration-300 group-hover:scale-105"
          unoptimized={isLocalImage}
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white text-lg font-medium">{title}</span>
        </div>
      </div>
    </Link>
  )
}

